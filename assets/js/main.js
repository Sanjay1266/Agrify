/**
 * Agrify - Main Global Application Controller
 * Handles Navigation, Responsive Menus, User State, Cart Badge, Toasts & Quick-View Modal
 */

const AgrifyApp = (function () {
  // Determine if the current page is located in root or inside /pages/
  const isInsidePagesDir = window.location.pathname.includes('/pages/') || 
                           window.location.pathname.endsWith('/pages') ||
                           (window.location.pathname.split('/').filter(Boolean).length > 1 && !window.location.pathname.endsWith('index.html'));

  function getBasePath() {
    return isInsidePagesDir ? '../' : './';
  }

  function getPagesPath() {
    return isInsidePagesDir ? './' : './pages/';
  }

  // Initialize UI components
  function initHeader() {
    // Header scroll elevation
    const header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }

    // Mobile Hamburger
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
          mobileToggle.classList.remove('open');
          navMenu.classList.remove('open');
        }
      });
    }

    // Mobile category dropdown toggle
    const dropdownToggles = document.querySelectorAll('.nav-item-has-dropdown > a');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          this.parentElement.classList.toggle('active-mobile');
        }
      });
    });

    // User Profile Dropdown
    const userTrigger = document.getElementById('user-profile-trigger');
    const userMenu = document.getElementById('user-dropdown-menu');
    if (userTrigger && userMenu) {
      userTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        userMenu.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        userMenu.classList.remove('show');
      });
    }

    // Update User Auth in Nav
    updateAuthDisplay();

    // Update Cart Badge
    updateCartBadge();

    // Listen for cart changes
    if (typeof AgrifyCart !== 'undefined') {
      AgrifyCart.subscribe(() => {
        updateCartBadge();
      });
    }
    window.addEventListener('agrify:cart-updated', updateCartBadge);
  }

  function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = typeof AgrifyCart !== 'undefined' ? AgrifyCart.getCount() : 0;
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  function updateAuthDisplay() {
    const token = localStorage.getItem('token');
    const rawUser = localStorage.getItem('user');
    let user = null;
    try { user = rawUser ? JSON.parse(rawUser) : null; } catch (e) { }

    const userProfileTrigger = document.getElementById('user-profile-trigger');
    const userDropdown = document.getElementById('user-dropdown-menu');

    if (!userProfileTrigger || !userDropdown) return;

    if (token) {
      const displayName = (user && user.name) ? user.name.split(' ')[0] : 'Farmer';
      userProfileTrigger.innerHTML = `
        <img class="user-avatar-img" src="${getBasePath()}assets/images/default-user.png" alt="Avatar">
        <span class="user-display-name">${displayName}</span>
        <i class="fas fa-chevron-down" style="font-size: 0.75rem; color: var(--gray-500);"></i>
      `;
      userDropdown.innerHTML = `
        <div style="padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--gray-200);">
          <div style="font-weight: 700; color: var(--gray-800);">${(user && user.name) || 'User'}</div>
          <div style="font-size: 0.8rem; color: var(--gray-500);">${(user && user.username) || ''}</div>
        </div>
        <a href="${getPagesPath()}profile.html"><i class="fas fa-user-circle"></i> My Account & Orders</a>
        <a href="${getPagesPath()}checkout.html"><i class="fas fa-shopping-bag"></i> Cart & Checkout</a>
        <hr>
        <button id="nav-logout-btn" style="color: var(--danger-500);"><i class="fas fa-sign-out-alt"></i> Logout</button>
      `;

      const logoutBtn = document.getElementById('nav-logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          showToast('Logged out successfully');
          setTimeout(() => {
            window.location.href = getBasePath() + 'index.html';
          }, 800);
        });
      }
    } else {
      userProfileTrigger.innerHTML = `
        <i class="fas fa-user" style="font-size: 1.1rem; color: var(--primary-700);"></i>
        <span class="user-display-name">Account</span>
        <i class="fas fa-chevron-down" style="font-size: 0.75rem; color: var(--gray-500);"></i>
      `;
      userDropdown.innerHTML = `
        <a href="${getPagesPath()}login.html"><i class="fas fa-sign-in-alt"></i> Sign In</a>
        <a href="${getPagesPath()}signup.html"><i class="fas fa-user-plus"></i> Create Account</a>
        <hr>
        <a href="${getPagesPath()}checkout.html"><i class="fas fa-shopping-cart"></i> View Cart</a>
      `;
    }
  }

  // Toast Notification System
  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconClass = 'fa-check-circle';
    if (type === 'error') iconClass = 'fa-exclamation-circle';
    if (type === 'info') iconClass = 'fa-info-circle';

    toast.innerHTML = `
      <i class="fas ${iconClass}" style="color: ${type === 'error' ? 'var(--danger-500)' : type === 'info' ? '#3b82f6' : 'var(--accent-500)'}; font-size: 1.25rem;"></i>
      <span style="flex: 1;">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastSlideOut 0.3s forwards';
      setTimeout(() => {
        if (toast.parentElement) toast.remove();
      }, 300);
    }, 3500);
  }

  // Quick View Modal
  function openQuickView(productId) {
    if (typeof AgrifyProducts === 'undefined') return;
    const product = AgrifyProducts.getById(productId);
    if (!product) return;

    let modalBackdrop = document.getElementById('quick-view-modal');
    if (!modalBackdrop) {
      modalBackdrop = document.createElement('div');
      modalBackdrop.id = 'quick-view-modal';
      modalBackdrop.className = 'modal-backdrop';
      modalBackdrop.innerHTML = `
        <div class="modal-card">
          <button class="modal-close-btn" id="modal-close"><i class="fas fa-times"></i></button>
          <div id="modal-body"></div>
        </div>
      `;
      document.body.appendChild(modalBackdrop);

      // Close events
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeQuickView();
      });
      modalBackdrop.querySelector('#modal-close').addEventListener('click', closeQuickView);
    }

    const modalBody = modalBackdrop.querySelector('#modal-body');
    const imageSrc = getBasePath() + product.image;
    const detailUrl = `${getPagesPath()}product-details.html?id=${product.id}`;

    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 2.25rem;">
        <div style="display: flex; align-items: center; justify-content: center; background: var(--gray-100); border-radius: var(--radius-md); padding: 1.5rem;">
          <img src="${imageSrc}" alt="${product.name}" style="max-height: 280px; width: auto; object-fit: contain;">
        </div>
        <div>
          <span class="badge badge-green" style="margin-bottom: 0.5rem;">${product.category}</span>
          <h2 style="font-family: var(--font-display); font-size: 1.5rem; color: var(--primary-900); margin-bottom: 0.25rem;">${product.name}</h2>
          <div style="color: var(--gray-500); font-weight: 500; font-size: 0.95rem; margin-bottom: 0.75rem;">By ${product.company}</div>
          
          <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.25rem;">
            <span style="font-size: 1.6rem; font-weight: 800; color: var(--primary-800);">₹${product.price}</span>
            <span style="text-decoration: line-through; color: var(--gray-400); font-size: 1.1rem;">₹${product.originalPrice}</span>
            <span class="badge badge-amber">${product.discount}</span>
          </div>

          <p style="color: var(--gray-600); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.25rem;">
            ${product.description}
          </p>

          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-weight: 600; font-size: 0.88rem; margin-bottom: 0.4rem; color: var(--gray-700);">Select Pack Size:</label>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;" id="quick-view-variants">
              ${(product.variants || []).map((v, i) => `
                <button type="button" class="variant-pill ${i === 0 ? 'active' : ''}" style="padding: 0.35rem 0.75rem; border: 1.5px solid ${i === 0 ? 'var(--accent-500)' : 'var(--gray-300)'}; background: ${i === 0 ? 'var(--accent-50)' : 'var(--white)'}; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 600; cursor: pointer;">${v}</button>
              `).join('')}
            </div>
          </div>

          <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 1.5rem;">
            <button class="btn btn-accent btn-lg" id="modal-add-cart-btn" style="flex: 2;">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
            <a href="${detailUrl}" class="btn btn-secondary btn-lg" style="flex: 1;">
              View Details
            </a>
          </div>
        </div>
      </div>
    `;

    // Variant selector logic
    let selectedVariant = (product.variants && product.variants[0]) || 'Standard';
    const variantPills = modalBody.querySelectorAll('.variant-pill');
    variantPills.forEach(pill => {
      pill.addEventListener('click', function () {
        variantPills.forEach(p => {
          p.style.borderColor = 'var(--gray-300)';
          p.style.background = 'var(--white)';
        });
        this.style.borderColor = 'var(--accent-500)';
        this.style.background = 'var(--accent-50)';
        selectedVariant = this.textContent.trim();
      });
    });

    // Add to cart from modal
    const addCartBtn = modalBody.querySelector('#modal-add-cart-btn');
    addCartBtn.addEventListener('click', () => {
      if (typeof AgrifyCart !== 'undefined') {
        AgrifyCart.addItem(product.id, 1, selectedVariant);
        closeQuickView();
      }
    });

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    const modalBackdrop = document.getElementById('quick-view-modal');
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Global listeners for Quick View clicks
  function initGlobalListeners() {
    document.addEventListener('click', (e) => {
      const quickViewBtn = e.target.closest('[data-quick-view]');
      if (quickViewBtn) {
        e.preventDefault();
        const id = quickViewBtn.getAttribute('data-quick-view');
        openQuickView(id);
      }

      const addToCartBtn = e.target.closest('[data-add-cart]');
      if (addToCartBtn) {
        e.preventDefault();
        const id = addToCartBtn.getAttribute('data-add-cart');
        if (typeof AgrifyCart !== 'undefined') {
          AgrifyCart.addItem(id, 1);
        }
      }
    });
  }

  // Document Ready entry point
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initGlobalListeners();
  });

  return {
    showToast,
    openQuickView,
    closeQuickView,
    getBasePath,
    getPagesPath,
    updateAuthDisplay
  };
})();

if (typeof window !== 'undefined') {
  window.AgrifyApp = AgrifyApp;
}
