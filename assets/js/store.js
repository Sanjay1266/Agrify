/**
 * Agrify Store & Catalog Controller
 * Handles live search, category/brand filters, sorting, and dynamic product grid rendering
 */

document.addEventListener('DOMContentLoaded', function () {
  if (typeof AgrifyProducts === 'undefined') {
    console.error('AgrifyProducts data module is required.');
    return;
  }

  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'All Products';
  const initialSearch = urlParams.get('search') || '';
  const initialBrand = urlParams.get('brand') || 'All Brands';

  // Store State
  const state = {
    category: initialCategory,
    company: initialBrand,
    search: initialSearch,
    sort: 'featured',
    displayLimit: 12,
    pageSize: 12
  };

  // DOM Elements
  const searchInput = document.getElementById('store-search-input');
  const searchBtn = document.getElementById('store-search-btn');
  const categoryPillsContainer = document.getElementById('category-pills');
  const brandSelect = document.getElementById('brand-select');
  const sortSelect = document.getElementById('sort-select');
  const productGrid = document.getElementById('product-grid');
  const resultsCount = document.getElementById('results-count');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const loadMoreContainer = document.getElementById('load-more-container');

  // Set initial search value in input
  if (searchInput && state.search) {
    searchInput.value = state.search;
  }

  // Render Category Pills
  function renderCategoryPills() {
    if (!categoryPillsContainer) return;
    const categories = AgrifyProducts.getCategories();
    categoryPillsContainer.innerHTML = categories.map(cat => {
      const isActive = cat.toLowerCase() === state.category.toLowerCase();
      return `
        <button class="category-pill ${isActive ? 'active' : ''}" data-cat="${cat}">
          ${cat}
        </button>
      `;
    }).join('');

    categoryPillsContainer.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', function () {
        const cat = this.getAttribute('data-cat');
        state.category = cat;
        state.displayLimit = state.pageSize; // reset limit on filter change
        
        categoryPillsContainer.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');

        // Update URL cleanly without reloading
        updateUrlParams();
        renderProducts();
      });
    });
  }

  // Populate Brand Filter
  function renderBrandOptions() {
    if (!brandSelect) return;
    const companies = AgrifyProducts.getCompanies();
    brandSelect.innerHTML = companies.map(comp => `
      <option value="${comp}" ${comp.toLowerCase() === state.company.toLowerCase() ? 'selected' : ''}>${comp}</option>
    `).join('');

    brandSelect.addEventListener('change', function () {
      state.company = this.value;
      state.displayLimit = state.pageSize;
      updateUrlParams();
      renderProducts();
    });
  }

  // Update URL Query String
  function updateUrlParams() {
    const params = new URLSearchParams();
    if (state.category && state.category !== 'All Products') params.set('category', state.category);
    if (state.company && state.company !== 'All Brands') params.set('brand', state.company);
    if (state.search) params.set('search', state.search);
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  }

  // Sort helper
  function sortProducts(list, sortType) {
    const sorted = [...list];
    if (sortType === 'price-low') {
      return sorted.sort((a, b) => a.price - b.price);
    }
    if (sortType === 'price-high') {
      return sorted.sort((a, b) => b.price - a.price);
    }
    if (sortType === 'rating') {
      return sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted; // 'featured' retains natural index order
  }

  // Render Product Grid
  function renderProducts() {
    if (!productGrid) return;

    let filtered = AgrifyProducts.search(state.search, state.category, state.company);
    filtered = sortProducts(filtered, state.sort);

    // Update count display
    if (resultsCount) {
      resultsCount.innerHTML = `Showing <span>${Math.min(filtered.length, state.displayLimit)}</span> of <span>${filtered.length}</span> products`;
    }

    if (filtered.length === 0) {
      productGrid.innerHTML = `
        <div class="empty-results-box">
          <i class="fas fa-search"></i>
          <h3>No agricultural products match your criteria</h3>
          <p>Try clearing your search term, switching categories, or resetting brand filters.</p>
          <button class="btn btn-primary btn-sm" id="reset-filters-btn">
            <i class="fas fa-redo"></i> Reset All Filters
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.category = 'All Products';
          state.company = 'All Brands';
          state.search = '';
          if (searchInput) searchInput.value = '';
          if (brandSelect) brandSelect.value = 'All Brands';
          renderCategoryPills();
          updateUrlParams();
          renderProducts();
        });
      }

      if (loadMoreContainer) loadMoreContainer.style.display = 'none';
      return;
    }

    // Slice for pagination
    const displayed = filtered.slice(0, state.displayLimit);
    const basePath = typeof AgrifyApp !== 'undefined' ? AgrifyApp.getBasePath() : './';
    const pagesPath = typeof AgrifyApp !== 'undefined' ? AgrifyApp.getPagesPath() : './pages/';

    productGrid.innerHTML = displayed.map(product => {
      const detailUrl = `${pagesPath}product-details.html?id=${product.id}`;
      return `
        <div class="product-card" data-id="${product.id}">
          <div class="product-card-media">
            <span class="product-category-tag">${product.category}</span>
            <img src="${basePath}${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-card-overlay">
              <button class="overlay-action-btn" data-quick-view="${product.id}" title="Quick View">
                <i class="fas fa-eye"></i>
              </button>
              <button class="overlay-action-btn" data-add-cart="${product.id}" title="Add to Cart">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
          <div class="product-card-content">
            <div class="product-brand">${product.company}</div>
            <h3 class="product-title">
              <a href="${detailUrl}">${product.name}</a>
            </h3>
            <div class="product-rating-row">
              <div class="product-rating-stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <span class="product-rating-text">${product.rating} (${product.reviewsCount})</span>
            </div>
            <div class="product-price-row">
              <div class="price-box">
                <span class="current-price">₹${product.price}</span>
                <span class="original-price">₹${product.originalPrice}</span>
              </div>
              <button class="card-add-cart-btn" data-add-cart="${product.id}">
                <i class="fas fa-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Load More Visibility
    if (loadMoreContainer) {
      if (filtered.length > state.displayLimit) {
        loadMoreContainer.style.display = 'block';
        if (loadMoreBtn) {
          loadMoreBtn.innerHTML = `Load More Products (${filtered.length - state.displayLimit} remaining)`;
        }
      } else {
        loadMoreContainer.style.display = 'none';
      }
    }
  }

  // Event Listeners
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.search = searchInput.value.trim();
        state.displayLimit = state.pageSize;
        updateUrlParams();
        renderProducts();
      }, 300);
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (searchInput) {
        state.search = searchInput.value.trim();
        state.displayLimit = state.pageSize;
        updateUrlParams();
        renderProducts();
      }
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      state.sort = this.value;
      renderProducts();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
      state.displayLimit += state.pageSize;
      renderProducts();
    });
  }

  // Initialize
  renderCategoryPills();
  renderBrandOptions();
  renderProducts();
});
