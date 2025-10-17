// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart functionality
    initializeCart();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize product sorting
    initializeSorting();
    
    // Initialize product filtering
    initializeFiltering();
    
    // Add click event to product images
    initializeProductInteractions();
});

// Cart functionality
function initializeCart() {
    // Get cart count from localStorage or initialize to 0
    let cartCount = localStorage.getItem('cartCount') || 0;
    
    // Add to cart buttons
    const addToCartButtons = createAddToCartButtons();
    
    // Add event listeners to the cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get product info from parent element
            const productBox = this.closest('.box1');
            const productName = productBox.querySelector('.pname').textContent;
            const productPrice = productBox.querySelector('.price').textContent;
            const productCompany = productBox.querySelector('.company').textContent;
            
            // Create product object
            const product = {
                name: productName,
                price: productPrice,
                company: productCompany,
                quantity: 1
            };
            
            // Add to cart
            addProductToCart(product);
            
            // Show confirmation
            showNotification(`${productName} added to cart!`);
            
            // Update cart count
            cartCount++;
            localStorage.setItem('cartCount', cartCount);
            updateCartDisplay();
        });
    });
}

// Create and append "Add to Cart" buttons to product boxes
function createAddToCartButtons() {
    const productBoxes = document.querySelectorAll('.box1');
    const buttons = [];
    
    productBoxes.forEach(box => {
        const button = document.createElement('button');
        button.className = 'add-to-cart-btn';
        button.textContent = 'Add to Cart';
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.padding = '8px 12px';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        button.style.marginTop = '10px';
        
        box.querySelector('.idea').appendChild(button);
        buttons.push(button);
    });
    
    return buttons;
}

// Add product to cart in localStorage
function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already in cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    
    if (existingProductIndex !== -1) {
        // Increment quantity if product already in cart
        cart[existingProductIndex].quantity += 1;
    } else {
        // Add new product to cart
        cart.push(product);
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart icon/count display
function updateCartDisplay() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    const cartLink = document.querySelector('a[href="cart.html"]');
    
    if (cartLink) {
        cartLink.textContent = `Your Cart (${cartCount})`;
    }
}

// Show notification when product is added to cart
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove notification after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const products = document.querySelectorAll('.box1');
            
            products.forEach(product => {
                const productName = product.querySelector('.pname').textContent.toLowerCase();
                const companyName = product.querySelector('.company').textContent.toLowerCase();
                
                // Check if product matches search term
                if (productName.includes(searchTerm) || companyName.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
}

// Sorting functionality
function initializeSorting() {
    // Create sorting controls
    const sortingContainer = document.createElement('div');
    sortingContainer.className = 'sorting-container';
    sortingContainer.style.margin = '20px 0';
    sortingContainer.style.padding = '10px';
    sortingContainer.style.backgroundColor = '#f5f5f5';
    sortingContainer.style.borderRadius = '5px';
    
    // Create sorting label
    const sortingLabel = document.createElement('span');
    sortingLabel.textContent = 'Sort by: ';
    sortingContainer.appendChild(sortingLabel);
    
    // Create sorting options
    const sortOptions = [
        { value: 'price-low', text: 'Price: Low to High' },
        { value: 'price-high', text: 'Price: High to Low' },
        { value: 'name-a', text: 'Name: A to Z' },
        { value: 'name-z', text: 'Name: Z to A' }
    ];
    
    // Create select element
    const select = document.createElement('select');
    select.id = 'sort-select';
    select.style.padding = '5px';
    select.style.marginLeft = '10px';
    
    // Add options to select
    sortOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        select.appendChild(optionElement);
    });
    
    // Add select to container
    sortingContainer.appendChild(select);
    
    // Add container to page
    const heading = document.querySelector('.heading');
    if (heading) {
        heading.parentNode.insertBefore(sortingContainer, heading.nextSibling);
    }
    
    // Add event listener to select
    select.addEventListener('change', function() {
        sortProducts(this.value);
    });
}

// Sort products based on selected option
function sortProducts(sortOption) {
    const productContainer = document.querySelector('.product');
    const products = Array.from(document.querySelectorAll('.box1'));
    
    // Sort products based on selected option
    switch (sortOption) {
        case 'price-low':
            products.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price').textContent.replace('₹', ''));
                const priceB = parseFloat(b.querySelector('.price').textContent.replace('₹', ''));
                return priceA - priceB;
            });
            break;
        case 'price-high':
            products.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price').textContent.replace('₹', ''));
                const priceB = parseFloat(b.querySelector('.price').textContent.replace('₹', ''));
                return priceB - priceA;
            });
            break;
        case 'name-a':
            products.sort((a, b) => {
                const nameA = a.querySelector('.pname').textContent.toLowerCase();
                const nameB = b.querySelector('.pname').textContent.toLowerCase();
                return nameA.localeCompare(nameB);
            });
            break;
        case 'name-z':
            products.sort((a, b) => {
                const nameA = a.querySelector('.pname').textContent.toLowerCase();
                const nameB = b.querySelector('.pname').textContent.toLowerCase();
                return nameB.localeCompare(nameA);
            });
            break;
    }
    
    // Clear container
    productContainer.innerHTML = '';
    
    // Append sorted products
    products.forEach(product => {
        productContainer.appendChild(product);
    });
}

// Filtering functionality
function initializeFiltering() {
    // Create filtering container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';
    filterContainer.style.margin = '20px 0';
    filterContainer.style.padding = '10px';
    filterContainer.style.backgroundColor = '#f5f5f5';
    filterContainer.style.borderRadius = '5px';
    
    // Create filtering label
    const filterLabel = document.createElement('span');
    filterLabel.textContent = 'Filter by Company: ';
    filterContainer.appendChild(filterLabel);
    
    // Get unique companies
    const products = document.querySelectorAll('.box1');
    const companies = new Set();
    
    products.forEach(product => {
        const company = product.querySelector('.company').textContent;
        companies.add(company);
    });
    
    // Create select element
    const select = document.createElement('select');
    select.id = 'filter-select';
    select.style.padding = '5px';
    select.style.marginLeft = '10px';
    
    // Add "All" option
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'All Companies';
    select.appendChild(allOption);
    
    // Add company options
    Array.from(companies).sort().forEach(company => {
        const option = document.createElement('option');
        option.value = company;
        option.textContent = company;
        select.appendChild(option);
    });
    
    // Add select to container
    filterContainer.appendChild(select);
    
    // Add container to page
    const sortingContainer = document.querySelector('.sorting-container');
    if (sortingContainer) {
        sortingContainer.parentNode.insertBefore(filterContainer, sortingContainer.nextSibling);
    }
    
    // Add event listener to select
    select.addEventListener('change', function() {
        filterProducts(this.value);
    });
}

// Filter products based on selected company
function filterProducts(company) {
    const products = document.querySelectorAll('.box1');
    
    products.forEach(product => {
        const productCompany = product.querySelector('.company').textContent;
        
        if (company === 'all' || productCompany === company) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Product interactions
function initializeProductInteractions() {
    const productImages = document.querySelectorAll('.box1 img');
    
    productImages.forEach(image => {
        // Add hover effect
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Add click event (alternative to image map)
        image.addEventListener('click', function() {
            const productName = this.closest('.box1').querySelector('.pname').textContent;
            // Store product info in localStorage for detail page
            localStorage.setItem('selectedProduct', productName);
            
            // Navigate to product detail page
            window.location.href = 'further_details.html';
        });
    });
}