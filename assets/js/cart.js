/**
 * Agrify Cart & Checkout State Management
 * Handles persistent shopping cart, coupon codes, and order processing
 */

const AgrifyCart = (function() {
  const CART_STORAGE_KEY = 'agrify_cart';
  const COUPON_STORAGE_KEY = 'agrify_applied_coupon';
  const ORDERS_STORAGE_KEY = 'agrify_orders';
  
  const listeners = [];

  // Available coupons
  const VALID_COUPONS = {
    'AGRI20': { code: 'AGRI20', discountPercent: 20, desc: '20% off your agricultural order' },
    'WELCOME10': { code: 'WELCOME10', discountPercent: 10, desc: '10% off welcome bonus' },
    'FARMER50': { code: 'FARMER50', flatDiscount: 50, desc: '₹50 flat discount on seeds and fertilizers' }
  };

  function loadCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to load cart from storage', e);
      return [];
    }
  }

  function saveCart(items) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      notifyListeners();
    } catch (e) {
      console.error('Failed to save cart to storage', e);
    }
  }

  function notifyListeners() {
    const items = loadCart();
    listeners.forEach(fn => {
      try { fn(items); } catch(err) { console.error(err); }
    });
    // Dispatch custom DOM event
    window.dispatchEvent(new CustomEvent('agrify:cart-updated', { detail: { items } }));
  }

  return {
    getItems: function() {
      return loadCart();
    },

    getCount: function() {
      const items = loadCart();
      return items.reduce((acc, item) => acc + (item.quantity || 1), 0);
    },

    addItem: function(productId, quantity = 1, variant = null) {
      const items = loadCart();
      let product = null;
      if (typeof AgrifyProducts !== 'undefined') {
        product = AgrifyProducts.getById(productId);
      }
      
      if (!product) {
        console.error('Product not found with ID:', productId);
        return false;
      }

      const chosenVariant = variant || (product.variants && product.variants[0]) || 'Standard';
      const existingIndex = items.findIndex(item => item.id === product.id && item.variant === chosenVariant);

      if (existingIndex > -1) {
        items[existingIndex].quantity += quantity;
      } else {
        items.push({
          id: product.id,
          name: product.name,
          company: product.company,
          price: product.price,
          image: product.image,
          category: product.category,
          variant: chosenVariant,
          quantity: quantity
        });
      }

      saveCart(items);
      
      if (typeof AgrifyApp !== 'undefined' && AgrifyApp.showToast) {
        AgrifyApp.showToast(`Added ${quantity}x "${product.name}" to cart!`);
      }
      return true;
    },

    updateQuantity: function(productId, quantity, variant = null) {
      let items = loadCart();
      const numQty = parseInt(quantity, 10);
      
      if (numQty <= 0) {
        return this.removeItem(productId, variant);
      }

      const index = items.findIndex(item => item.id === parseInt(productId, 10) && (!variant || item.variant === variant));
      if (index > -1) {
        items[index].quantity = numQty;
        saveCart(items);
      }
    },

    removeItem: function(productId, variant = null) {
      let items = loadCart();
      const numId = parseInt(productId, 10);
      items = items.filter(item => !(item.id === numId && (!variant || item.variant === variant)));
      saveCart(items);
      if (typeof AgrifyApp !== 'undefined' && AgrifyApp.showToast) {
        AgrifyApp.showToast('Item removed from cart');
      }
    },

    clearCart: function() {
      saveCart([]);
      localStorage.removeItem(COUPON_STORAGE_KEY);
    },

    getSubtotal: function() {
      const items = loadCart();
      return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    getShippingFee: function(subtotal = null) {
      const st = subtotal !== null ? subtotal : this.getSubtotal();
      if (st === 0) return 0;
      return st >= 500 ? 0 : 50; // Free delivery over ₹500
    },

    applyCoupon: function(code) {
      if (!code) return { success: false, message: 'Please enter a coupon code' };
      const normalized = code.trim().toUpperCase();
      const coupon = VALID_COUPONS[normalized];
      if (coupon) {
        localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupon));
        notifyListeners();
        return { success: true, message: `Coupon ${coupon.code} applied successfully!`, coupon };
      }
      return { success: false, message: 'Invalid coupon code. Try AGRI20 or WELCOME10' };
    },

    getAppliedCoupon: function() {
      try {
        const raw = localStorage.getItem(COUPON_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },

    removeCoupon: function() {
      localStorage.removeItem(COUPON_STORAGE_KEY);
      notifyListeners();
    },

    getDiscountAmount: function() {
      const subtotal = this.getSubtotal();
      const coupon = this.getAppliedCoupon();
      if (!coupon || subtotal === 0) return 0;

      if (coupon.discountPercent) {
        return Math.round((subtotal * coupon.discountPercent) / 100);
      }
      if (coupon.flatDiscount) {
        return Math.min(coupon.flatDiscount, subtotal);
      }
      return 0;
    },

    getTotal: function() {
      const subtotal = this.getSubtotal();
      if (subtotal === 0) return 0;
      const discount = this.getDiscountAmount();
      const shipping = this.getShippingFee(subtotal);
      return Math.max(0, subtotal - discount + shipping);
    },

    processOrder: function(shippingDetails, paymentMethod) {
      const items = loadCart();
      if (items.length === 0) {
        return { success: false, message: 'Your cart is empty' };
      }

      const orderId = 'AGRI-' + Math.floor(100000 + Math.random() * 900000);
      const order = {
        orderId,
        date: new Date().toISOString(),
        items,
        subtotal: this.getSubtotal(),
        discount: this.getDiscountAmount(),
        shipping: this.getShippingFee(),
        total: this.getTotal(),
        coupon: this.getAppliedCoupon(),
        shippingDetails,
        paymentMethod,
        status: 'Confirmed'
      };

      try {
        const existingOrders = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || '[]');
        existingOrders.unshift(order);
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(existingOrders));
      } catch (e) {
        console.error('Failed to save order history', e);
      }

      this.clearCart();
      return { success: true, orderId, order };
    },

    getOrderHistory: function() {
      try {
        return JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || '[]');
      } catch (e) {
        return [];
      }
    },

    subscribe: function(callback) {
      if (typeof callback === 'function') {
        listeners.push(callback);
      }
    }
  };
})();

// Expose globally
if (typeof window !== 'undefined') {
  window.AgrifyCart = AgrifyCart;
}
