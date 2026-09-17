/**
 * Agrify Product Details Page Controller
 * Dynamically renders product specs, variant options, dosage directions, and related products
 */

document.addEventListener('DOMContentLoaded', function () {
  if (typeof AgrifyProducts === 'undefined') {
    console.error('AgrifyProducts is required');
    return;
  }

  // Get product ID from URL query param
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || '1';
  const product = AgrifyProducts.getById(productId) || AgrifyProducts.getById(1);

  if (!product) {
    document.body.innerHTML = `
      <div style="text-align: center; padding: 5rem 1rem;">
        <h2>Product not found</h2>
        <a href="store.html" class="btn btn-primary" style="margin-top: 1rem;">Back to Store</a>
      </div>
    `;
    return;
  }

  const basePath = typeof AgrifyApp !== 'undefined' ? AgrifyApp.getBasePath() : '../';
  const pagesPath = typeof AgrifyApp !== 'undefined' ? AgrifyApp.getPagesPath() : './';

  // Update document title
  document.title = `${product.name} | Agrify Farming Solutions`;

  // Breadcrumbs
  const breadcrumbProduct = document.getElementById('breadcrumb-product');
  const breadcrumbCategory = document.getElementById('breadcrumb-category');
  if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = product.category;
    breadcrumbCategory.href = `${pagesPath}store.html?category=${encodeURIComponent(product.category)}`;
  }

  // Populate Visuals & Info
  const detailImage = document.getElementById('detail-image');
  if (detailImage) {
    detailImage.src = basePath + product.image;
    detailImage.alt = product.name;
  }

  const detailCategoryBadge = document.getElementById('detail-category-badge');
  if (detailCategoryBadge) detailCategoryBadge.textContent = product.category;

  const detailTitle = document.getElementById('detail-title');
  if (detailTitle) detailTitle.textContent = product.name;

  const detailCompany = document.getElementById('detail-company');
  if (detailCompany) detailCompany.textContent = `Manufactured by ${product.company}`;

  const detailRatingText = document.getElementById('detail-rating-text');
  if (detailRatingText) detailRatingText.textContent = `${product.rating} (${product.reviewsCount} customer reviews)`;

  const detailPriceCurrent = document.getElementById('detail-price-current');
  if (detailPriceCurrent) detailPriceCurrent.textContent = `₹${product.price}`;

  const detailPriceOrig = document.getElementById('detail-price-orig');
  if (detailPriceOrig) detailPriceOrig.textContent = `₹${product.originalPrice}`;

  const detailDiscount = document.getElementById('detail-discount');
  if (detailDiscount) detailDiscount.textContent = product.discount;

  // Variants Selector
  let currentSelectedVariant = (product.variants && product.variants[0]) || 'Standard Pack';
  const variantContainer = document.getElementById('variant-chips');
  if (variantContainer && product.variants) {
    variantContainer.innerHTML = product.variants.map((v, i) => `
      <button type="button" class="variant-chip ${i === 0 ? 'selected' : ''}" data-variant="${v}">
        ${v}
      </button>
    `).join('');

    variantContainer.querySelectorAll('.variant-chip').forEach(chip => {
      chip.addEventListener('click', function () {
        variantContainer.querySelectorAll('.variant-chip').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        currentSelectedVariant = this.getAttribute('data-variant');
      });
    });
  }

  // Quantity Controller
  let currentQuantity = 1;
  const qtyInput = document.getElementById('quantity-input');
  const btnMinus = document.getElementById('btn-qty-minus');
  const btnPlus = document.getElementById('btn-qty-plus');

  if (btnMinus && qtyInput) {
    btnMinus.addEventListener('click', () => {
      if (currentQuantity > 1) {
        currentQuantity--;
        qtyInput.value = currentQuantity;
      }
    });
  }

  if (btnPlus && qtyInput) {
    btnPlus.addEventListener('click', () => {
      currentQuantity++;
      qtyInput.value = currentQuantity;
    });
  }

  if (qtyInput) {
    qtyInput.addEventListener('change', () => {
      const val = parseInt(qtyInput.value, 10);
      currentQuantity = isNaN(val) || val < 1 ? 1 : val;
      qtyInput.value = currentQuantity;
    });
  }

  // Add To Cart
  const btnAddCart = document.getElementById('btn-add-cart');
  if (btnAddCart) {
    btnAddCart.addEventListener('click', () => {
      if (typeof AgrifyCart !== 'undefined') {
        AgrifyCart.addItem(product.id, currentQuantity, currentSelectedVariant);
      }
    });
  }

  // Buy Now
  const btnBuyNow = document.getElementById('btn-buy-now');
  if (btnBuyNow) {
    btnBuyNow.addEventListener('click', () => {
      if (typeof AgrifyCart !== 'undefined') {
        AgrifyCart.addItem(product.id, currentQuantity, currentSelectedVariant);
        window.location.href = `${pagesPath}checkout.html`;
      }
    });
  }

  // Populate Key Attributes
  const specCategory = document.getElementById('spec-category');
  if (specCategory) specCategory.textContent = product.category;

  const specCompany = document.getElementById('spec-company');
  if (specCompany) specCompany.textContent = product.company;

  const specType = document.getElementById('spec-type');
  if (specType) specType.textContent = product.type;

  const specDosage = document.getElementById('spec-dosage');
  if (specDosage) specDosage.textContent = product.dosage;

  // Tabs Content
  const tabDesc = document.getElementById('tab-content-desc');
  if (tabDesc) {
    tabDesc.innerHTML = `
      <p>${product.description}</p>
      <p>Tested rigorously under field conditions for maximum bio-efficacy and minimal ecological footprint. Formulated with premium stabilizers for exceptional shelf life and rapid absorption by crop foliage and root networks.</p>
    `;
  }

  const tabDosage = document.getElementById('tab-content-dosage');
  if (tabDosage) {
    tabDosage.innerHTML = `
      <p><strong>Recommended Dosage:</strong> ${product.dosage}</p>
      <p><strong>Application Method:</strong> Suitable for foliar spray using knapsack or tractor-mounted sprayers, as well as micro-irrigation/fertigation systems where recommended.</p>
      <p><strong>Water Requirement:</strong> 150 - 200 liters of clean water per acre. Spray early in the morning or late evening for optimum results.</p>
    `;
  }

  const tabTarget = document.getElementById('tab-content-target');
  if (tabTarget) {
    tabTarget.innerHTML = `
      <p><strong>Target Spectrum:</strong> ${product.targetPests}</p>
      <p><strong>Suitable Crops:</strong> Cotton, Paddy/Rice, Tomato, Chilli, Cabbage, Cauliflower, Sugarcane, Banana, Groundnut, and all major cash and horticultural crops.</p>
    `;
  }

  const tabManufacturer = document.getElementById('tab-content-manufacturer');
  if (tabManufacturer) {
    tabManufacturer.innerHTML = `
      <p><strong>Brand / Manufacturer:</strong> ${product.company}</p>
      <p><strong>Country of Origin:</strong> India</p>
      <p><strong>Quality Certification:</strong> ISO 9001:2015 certified formulation & CIBRC registered.</p>
    `;
  }

  // Tab Switcher
  const tabButtons = document.querySelectorAll('.detail-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      this.classList.add('active');
      const targetPanel = document.getElementById(this.getAttribute('data-tab'));
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Related Products
  const relatedGrid = document.getElementById('related-products-grid');
  if (relatedGrid) {
    const related = AgrifyProducts.getByCategory(product.category)
      .filter(p => p.id !== product.id)
      .slice(0, 4);

    relatedGrid.innerHTML = related.map(rel => {
      const relUrl = `${pagesPath}product-details.html?id=${rel.id}`;
      return `
        <div class="product-card">
          <div class="product-card-media">
            <span class="product-category-tag">${rel.category}</span>
            <img src="${basePath}${rel.image}" alt="${rel.name}">
            <div class="product-card-overlay">
              <button class="overlay-action-btn" data-quick-view="${rel.id}" title="Quick View">
                <i class="fas fa-eye"></i>
              </button>
              <button class="overlay-action-btn" data-add-cart="${rel.id}" title="Add to Cart">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
          <div class="product-card-content">
            <div class="product-brand">${rel.company}</div>
            <h3 class="product-title"><a href="${relUrl}">${rel.name}</a></h3>
            <div class="product-price-row">
              <span class="current-price">₹${rel.price}</span>
              <button class="card-add-cart-btn" data-add-cart="${rel.id}">
                <i class="fas fa-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
});
