/**
 * Agrify Checkout & Order Processing Controller
 */

document.addEventListener('DOMContentLoaded', function () {
  if (typeof AgrifyCart === 'undefined') {
    console.error('AgrifyCart module is required');
    return;
  }

  const basePath = typeof AgrifyApp !== 'undefined' ? AgrifyApp.getBasePath() : '../';
  const pagesPath = typeof AgrifyApp !== 'undefined' ? AgrifyApp.getPagesPath() : './';

  // DOM Elements
  const itemsContainer = document.getElementById('summary-items-list');
  const emptyCartNotice = document.getElementById('empty-cart-notice');
  const checkoutMainGrid = document.getElementById('checkout-main-grid');
  const subtotalEl = document.getElementById('summary-subtotal');
  const discountRow = document.getElementById('summary-discount-row');
  const discountEl = document.getElementById('summary-discount');
  const shippingEl = document.getElementById('summary-shipping');
  const totalEl = document.getElementById('summary-total');
  const couponInput = document.getElementById('coupon-input');
  const applyCouponBtn = document.getElementById('apply-coupon-btn');
  const appliedCouponContainer = document.getElementById('applied-coupon-container');
  const shippingForm = document.getElementById('shipping-form');

  // Pre-fill user data if logged in
  try {
    const rawUser = localStorage.getItem('user');
    if (rawUser) {
      const user = JSON.parse(rawUser);
      if (document.getElementById('full-name') && user.name) document.getElementById('full-name').value = user.name;
      if (document.getElementById('email') && user.username && user.username.includes('@')) document.getElementById('email').value = user.username;
    }
  } catch (e) {}

  // Render Cart Summary
  function renderSummary() {
    const items = AgrifyCart.getItems();

    if (items.length === 0) {
      if (emptyCartNotice) emptyCartNotice.style.display = 'block';
      if (checkoutMainGrid) checkoutMainGrid.style.display = 'none';
      return;
    } else {
      if (emptyCartNotice) emptyCartNotice.style.display = 'none';
      if (checkoutMainGrid) checkoutMainGrid.style.display = 'grid';
    }

    if (itemsContainer) {
      itemsContainer.innerHTML = items.map(item => `
        <div class="summary-cart-item">
          <div class="summary-item-thumb">
            <img src="${basePath}${item.image}" alt="${item.name}">
          </div>
          <div class="summary-item-info">
            <div class="summary-item-title">${item.name}</div>
            <div class="summary-item-meta">${item.company} | ${item.variant || 'Standard'}</div>
            <div class="summary-item-qty-control">
              <button class="summary-qty-btn" onclick="AgrifyCart.updateQuantity(${item.id}, ${item.quantity - 1}, '${item.variant}')"><i class="fas fa-minus"></i></button>
              <span style="font-weight: 700; font-size: 0.9rem;">${item.quantity}</span>
              <button class="summary-qty-btn" onclick="AgrifyCart.updateQuantity(${item.id}, ${item.quantity + 1}, '${item.variant}')"><i class="fas fa-plus"></i></button>
            </div>
          </div>
          <div style="text-align: right;">
            <div class="summary-item-price">₹${item.price * item.quantity}</div>
            <button class="summary-item-remove" onclick="AgrifyCart.removeItem(${item.id}, '${item.variant}')" title="Remove item">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      `).join('');
    }

    // Cost Breakdown
    const subtotal = AgrifyCart.getSubtotal();
    const discount = AgrifyCart.getDiscountAmount();
    const shipping = AgrifyCart.getShippingFee(subtotal);
    const total = AgrifyCart.getTotal();
    const appliedCoupon = AgrifyCart.getAppliedCoupon();

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    if (totalEl) totalEl.textContent = `₹${total}`;

    if (discountRow && discountEl) {
      if (discount > 0) {
        discountRow.style.display = 'flex';
        discountEl.textContent = `-₹${discount}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    // Applied Coupon display
    if (appliedCouponContainer) {
      if (appliedCoupon) {
        appliedCouponContainer.innerHTML = `
          <div class="applied-coupon-tag">
            <span><i class="fas fa-tag"></i> <strong>${appliedCoupon.code}</strong> applied (${appliedCoupon.desc})</span>
            <button type="button" id="remove-coupon-btn"><i class="fas fa-times"></i></button>
          </div>
        `;
        document.getElementById('remove-coupon-btn').addEventListener('click', () => {
          AgrifyCart.removeCoupon();
          renderSummary();
          if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast('Coupon removed');
        });
      } else {
        appliedCouponContainer.innerHTML = '';
      }
    }
  }

  // Payment method switcher
  const paymentCards = document.querySelectorAll('.payment-radio-card');
  const paymentPanels = document.querySelectorAll('.payment-details-panel');

  paymentCards.forEach(card => {
    card.addEventListener('click', function () {
      paymentCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      const radio = this.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const method = radio.value;
      paymentPanels.forEach(p => p.classList.remove('show'));
      const targetPanel = document.getElementById(`${method}-panel`);
      if (targetPanel) targetPanel.classList.add('show');
    });
  });

  // Apply Coupon
  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const code = couponInput.value.trim();
      const res = AgrifyCart.applyCoupon(code);
      if (res.success) {
        couponInput.value = '';
        if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast(res.message);
        renderSummary();
      } else {
        if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast(res.message, 'error');
      }
    });
  }

  // Handle Form Submit & Order Placement
  if (shippingForm) {
    shippingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullName = document.getElementById('full-name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const address = document.getElementById('address').value.trim();
      const city = document.getElementById('city').value.trim();
      const state = document.getElementById('state').value.trim();
      const pincode = document.getElementById('pincode').value.trim();

      if (!fullName || !email || !phone || !address || !pincode) {
        if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast('Please fill out all required shipping fields', 'error');
        return;
      }

      // Selected payment method
      const selectedPaymentRadio = document.querySelector('input[name="payment_method"]:checked');
      const paymentMethod = selectedPaymentRadio ? selectedPaymentRadio.value : 'cod';

      const shippingDetails = {
        fullName, email, phone, address, city, state, pincode
      };

      const result = AgrifyCart.processOrder(shippingDetails, paymentMethod);

      if (result.success) {
        showOrderSuccessModal(result.order);
      } else {
        if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast(result.message, 'error');
      }
    });
  }

  // Order Success Modal Display
  function showOrderSuccessModal(order) {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop open';
    modal.style.zIndex = '9999';

    modal.innerHTML = `
      <div class="modal-card" style="max-width: 550px;">
        <div class="order-success-modal">
          <div class="success-icon-badge">
            <i class="fas fa-check"></i>
          </div>
          <h2 style="font-family: var(--font-display); font-size: 1.8rem; color: var(--primary-900); margin-bottom: 0.5rem;">
            Order Placed Successfully!
          </h2>
          <p style="color: var(--gray-600); margin-bottom: 1.5rem; font-size: 0.95rem;">
            Thank you for choosing Agrify. Your order <strong style="color: var(--primary-800);">${order.orderId}</strong> has been received and is being prepared for dispatch.
          </p>

          <div style="background: var(--gray-50); border-radius: var(--radius-md); padding: 1.25rem; text-align: left; margin-bottom: 1.75rem; border: 1px solid var(--gray-200);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem;">
              <span style="color: var(--gray-500);">Amount Paid:</span>
              <strong style="color: var(--primary-800);">₹${order.total}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem;">
              <span style="color: var(--gray-500);">Payment Method:</span>
              <strong style="text-transform: uppercase;">${order.paymentMethod}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
              <span style="color: var(--gray-500);">Estimated Delivery:</span>
              <strong style="color: var(--accent-500);">3-5 Business Days</strong>
            </div>
          </div>

          <div style="display: flex; gap: 1rem;">
            <a href="${pagesPath}profile.html" class="btn btn-secondary" style="flex: 1;">View in Account</a>
            <a href="${pagesPath}store.html" class="btn btn-accent" style="flex: 1;">Continue Shopping</a>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
  }

  // Subscribe to changes
  AgrifyCart.subscribe(() => {
    renderSummary();
  });

  // Initial render
  renderSummary();
});
