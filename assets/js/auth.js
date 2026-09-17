/**
 * Agrify Authentication & Profile Controller
 * Integrates with Node/Express/MongoDB API with offline demo fallback
 */

const AgrifyAuth = (function () {
  const API_BASE = 'http://localhost:3001';

  async function login(username, password) {
    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({
          name: data.name || username.split('@')[0],
          username: username
        }));
        return { success: true, message: 'Logged in successfully!' };
      } else {
        return { success: false, message: data.error || 'Invalid username or password' };
      }
    } catch (err) {
      console.warn('Backend server not reachable, switching to local session fallback:', err);
      // Fallback offline session simulation
      const fallbackUser = {
        name: username.split('@')[0] || 'Demo Farmer',
        username: username
      };
      localStorage.setItem('token', 'offline_demo_token_' + Date.now());
      localStorage.setItem('user', JSON.stringify(fallbackUser));
      return { 
        success: true, 
        message: 'Welcome back! Logged in (Demo Mode).',
        isOfflineMode: true
      };
    }
  }

  async function register(name, username, password) {
    try {
      const response = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, password })
      });

      const data = await response.json();
      if (response.ok) {
        return { success: true, message: 'Account created successfully! Please sign in.' };
      } else {
        return { success: false, message: data.error || 'Registration failed' };
      }
    } catch (err) {
      console.warn('Backend server not reachable, registering local session fallback:', err);
      localStorage.setItem('token', 'offline_demo_token_' + Date.now());
      localStorage.setItem('user', JSON.stringify({ name, username }));
      return { 
        success: true, 
        message: 'Account created and signed in (Demo Mode)!',
        isOfflineMode: true
      };
    }
  }

  async function fetchProfile() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const response = await fetch(`${API_BASE}/profile`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }
    } catch (e) {
      // Return cached user
    }

    try {
      const cached = localStorage.getItem('user');
      return cached ? JSON.parse(cached) : null;
    } catch (e) {
      return null;
    }
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return {
    login,
    register,
    fetchProfile,
    logout
  };
})();

// Document Ready logic for Auth & Profile pages
document.addEventListener('DOMContentLoaded', async function () {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const profileContainer = document.getElementById('profile-dashboard-content');
  const pagesPath = typeof AgrifyApp !== 'undefined' ? AgrifyApp.getPagesPath() : './';
  const basePath = typeof AgrifyApp !== 'undefined' ? AgrifyApp.getBasePath() : '../';

  // LOGIN PAGE LOGIC
  if (loginForm) {
    loginForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const userError = document.getElementById('username-error');
      const passError = document.getElementById('password-error');
      const submitBtn = document.getElementById('login-submit-btn');

      if (userError) userError.textContent = '';
      if (passError) passError.textContent = '';

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username) {
        if (userError) userError.textContent = 'Please enter your username or email';
        return;
      }
      if (!password) {
        if (passError) passError.textContent = 'Please enter your password';
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
      }

      const res = await AgrifyAuth.login(username, password);

      if (res.success) {
        if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast(res.message);
        setTimeout(() => {
          window.location.href = `${pagesPath}profile.html`;
        }, 600);
      } else {
        if (passError) passError.textContent = res.message;
        if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast(res.message, 'error');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Sign In';
        }
      }
    });
  }

  // SIGNUP PAGE LOGIC
  if (signupForm) {
    signupForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const nameInput = document.getElementById('signup-name');
      const usernameInput = document.getElementById('signup-username');
      const passwordInput = document.getElementById('signup-password');
      const nameError = document.getElementById('name-error');
      const userError = document.getElementById('username-error');
      const passError = document.getElementById('password-error');
      const submitBtn = document.getElementById('signup-submit-btn');

      if (nameError) nameError.textContent = '';
      if (userError) userError.textContent = '';
      if (passError) passError.textContent = '';

      const name = nameInput.value.trim();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      let valid = true;
      if (name.length < 3) {
        if (nameError) nameError.textContent = 'Name must be at least 3 characters long';
        valid = false;
      }
      if (username.length < 4) {
        if (userError) userError.textContent = 'Username must be at least 4 characters long';
        valid = false;
      }
      if (password.length < 6) {
        if (passError) passError.textContent = 'Password must be at least 6 characters long';
        valid = false;
      }

      if (!valid) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
      }

      const res = await AgrifyAuth.register(name, username, password);

      if (res.success) {
        if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast(res.message);
        setTimeout(() => {
          window.location.href = `${pagesPath}profile.html`;
        }, 800);
      } else {
        if (userError) userError.textContent = res.message;
        if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast(res.message, 'error');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Create Account';
        }
      }
    });
  }

  // PROFILE DASHBOARD LOGIC
  if (profileContainer) {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = `${pagesPath}login.html`;
      return;
    }

    const user = await AgrifyAuth.fetchProfile();
    const displayName = (user && user.name) || 'Valued Farmer';
    const displayUser = (user && user.username) || 'farmer@agrify.com';

    // Populate Sidebar
    const profileNameEl = document.getElementById('profile-name');
    const profileUserEl = document.getElementById('profile-username');
    if (profileNameEl) profileNameEl.textContent = displayName;
    if (profileUserEl) profileUserEl.textContent = `@${displayUser}`;

    // Populate Orders Tab
    const ordersListEl = document.getElementById('orders-list-container');
    if (ordersListEl && typeof AgrifyCart !== 'undefined') {
      const orders = AgrifyCart.getOrderHistory();
      if (orders.length === 0) {
        ordersListEl.innerHTML = `
          <div style="text-align: center; padding: 3rem 1rem; background: var(--gray-50); border-radius: var(--radius-md); border: 1px dashed var(--gray-300);">
            <i class="fas fa-box-open" style="font-size: 3rem; color: var(--gray-400); margin-bottom: 1rem;"></i>
            <h4 style="font-size: 1.2rem; color: var(--gray-800); margin-bottom: 0.35rem;">No orders placed yet</h4>
            <p style="color: var(--gray-500); margin-bottom: 1.5rem;">Explore our high-yield seeds, fertilizers, and insecticides.</p>
            <a href="${pagesPath}store.html" class="btn btn-accent btn-sm">Explore Store</a>
          </div>
        `;
      } else {
        ordersListEl.innerHTML = orders.map(order => {
          const dateFormatted = new Date(order.date).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'short', day: 'numeric'
          });

          return `
            <div class="order-history-card">
              <div class="order-history-header">
                <div>
                  <div style="font-size: 0.8rem; color: var(--gray-500); text-transform: uppercase; font-weight: 700;">Order ID</div>
                  <strong style="color: var(--primary-900); font-size: 1.05rem;">${order.orderId}</strong>
                </div>
                <div>
                  <div style="font-size: 0.8rem; color: var(--gray-500); text-transform: uppercase; font-weight: 700;">Order Date</div>
                  <div>${dateFormatted}</div>
                </div>
                <div>
                  <div style="font-size: 0.8rem; color: var(--gray-500); text-transform: uppercase; font-weight: 700;">Total Paid</div>
                  <strong style="color: var(--primary-800);">₹${order.total}</strong>
                </div>
                <div>
                  <span class="badge badge-green"><i class="fas fa-check-circle"></i> ${order.status}</span>
                </div>
              </div>

              <div class="order-history-items-grid">
                ${order.items.map(item => `
                  <div class="order-history-item-row">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <img src="${basePath}${item.image}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: contain; background: var(--gray-50); border-radius: 4px; border: 1px solid var(--gray-200);">
                      <div>
                        <strong>${item.name}</strong>
                        <div style="font-size: 0.8rem; color: var(--gray-500);">${item.variant || 'Standard'} &times; ${item.quantity}</div>
                      </div>
                    </div>
                    <div style="font-weight: 700; color: var(--primary-800);">₹${item.price * item.quantity}</div>
                  </div>
                `).join('')}
              </div>

              <div style="padding-top: 0.75rem; border-top: 1px solid var(--gray-100); display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--gray-500);">
                <span>Shipping to: <strong>${order.shippingDetails ? order.shippingDetails.city + ', ' + order.shippingDetails.pincode : 'India'}</strong></span>
                <span>Payment: <strong style="text-transform: uppercase;">${order.paymentMethod}</strong></span>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Profile Tab Switching
    const profileTabs = document.querySelectorAll('.profile-nav-item');
    const tabPanels = document.querySelectorAll('.profile-tab-panel');
    profileTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        profileTabs.forEach(t => t.classList.remove('active'));
        tabPanels.forEach(p => p.style.display = 'none');

        this.classList.add('active');
        const target = document.getElementById(this.getAttribute('data-target'));
        if (target) target.style.display = 'block';
      });
    });

    // Profile Logout button
    const logoutBtn = document.getElementById('profile-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        AgrifyAuth.logout();
        if (typeof AgrifyApp !== 'undefined') AgrifyApp.showToast('Logged out');
        setTimeout(() => {
          window.location.href = `${basePath}index.html`;
        }, 500);
      });
    }
  }
});
