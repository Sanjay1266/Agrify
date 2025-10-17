// Product data combining items from Insecticide and Micronutrients
const products = [
    // Insecticide products
    {
        id: 1,
        name: "Coragen Insecticide",
        company: "FMC",
        price: "₹167",
        image: "Coragen.webp",
        category: "Insecticide"
    },
    {
        id: 2,
        name: "Phoskill Insecticide",
        company: "UPL",
        price: "₹199",
        image: "Phoskill.avif",
        category: "Insecticide"
    },
    {
        id: 3,
        name: "Exponus Insecticide",
        company: "BASE F",
        price: "₹582",
        image: "Exponus.avif",
        category: "Insecticide"
    },
    {
        id: 4,
        name: "Alika Insecticide",
        company: "Syngenta",
        price: "₹116",
        image: "Alika Insecticide.avif",
        category: "Insecticide"
    },
    {
        id: 5,
        name: "Jump Insecticide",
        company: "Bayer",
        price: "₹171",
        image: "Jump.webp",
        category: "Insecticide"
    },
    {
        id: 6,
        name: "Solomon Insecticide",
        company: "Bayer",
        price: "₹369",
        image: "Solomon.jpg",
        category: "Insecticide"
    },
    {
        id: 7,
        name: "Rogor Insecticide",
        company: "FMC",
        price: "₹102",
        image: "Rogor.avif",
        category: "Insecticide"
    },
    {
        id: 8,
        name: "Actara Insecticide",
        company: "Syngenta",
        price: "₹250",
        image: "Actara.avif",
        category: "Insecticide"
    },
    {
        id: 9,
        name: "Ekalux Insecticide",
        company: "Syngenta",
        price: "₹225",
        image: "Ekalux.avif",
        category: "Insecticide"
    },
    {
        id: 10,
        name: "Ampligo Insecticide",
        company: "Syngenta",
        price: "₹233",
        image: "ampligo.avif",
        category: "Insecticide"
    },
    // Micronutrients products (using placeholder images since none were provided in Micronutrients.html)
    {
        id: 11,
        name: "Zinc Micronutrient",
        company: "Agrify Organics",
        price: "₹299",
        image: "https://via.placeholder.com/200x200?text=Zinc",
        category: "Micronutrient"
    },
    {
        id: 12,
        name: "Boron Supplement",
        company: "GreenGrow",
        price: "₹245",
        image: "https://via.placeholder.com/200x200?text=Boron",
        category: "Micronutrient"
    },
    {
        id: 13,
        name: "Iron Chelate",
        company: "EcoFarm",
        price: "₹189",
        image: "https://via.placeholder.com/200x200?text=Iron",
        category: "Micronutrient"
    },
    {
        id: 14,
        name: "Manganese Foliar Spray",
        company: "NutriSoil",
        price: "₹275",
        image: "https://via.placeholder.com/200x200?text=Manganese",
        category: "Micronutrient"
    },
    {
        id: 15,
        name: "Copper Micronutrient",
        company: "CropBoost",
        price: "₹320",
        image: "https://via.placeholder.com/200x200?text=Copper",
        category: "Micronutrient"
    },
    {
        id: 16,
        name: "Molybdenum Complex",
        company: "Agrify Premium",
        price: "₹399",
        image: "https://via.placeholder.com/200x200?text=Molybdenum",
        category: "Micronutrient"
    },
    {
        id: 17,
        name: "Magnesium Supplement",
        company: "GreenTech",
        price: "₹215",
        image: "https://via.placeholder.com/200x200?text=Magnesium",
        category: "Micronutrient"
    },
    {
        id: 18,
        name: "Calcium Boost",
        company: "PlantCare",
        price: "₹265",
        image: "https://via.placeholder.com/200x200?text=Calcium",
        category: "Micronutrient"
    },
    {
        id: 19,
        name: "Sulfur Granules",
        company: "SoilRich",
        price: "₹175",
        image: "https://via.placeholder.com/200x200?text=Sulfur",
        category: "Micronutrient"
    },
    {
        id: 20,
        name: "Complete Micronutrient Mix",
        company: "NutriComplete",
        price: "₹499",
        image: "https://via.placeholder.com/200x200?text=Complete",
        category: "Micronutrient"
    }
];

// Function to populate the product list
function populateProducts(filterCategory = null) {
    const productContainer = document.getElementById('product-list');
    if (!productContainer) return;
    
    // Clear current products
    productContainer.innerHTML = '';
    
    // Filter products if a category is specified
    let displayProducts = products;
    if (filterCategory && filterCategory !== 'All Products') {
        displayProducts = products.filter(product => 
            product.category.toLowerCase() === filterCategory.toLowerCase());
    }
    
    // Display products (limiting to 8 initially)
    const initialDisplay = displayProducts.slice(0, 8);
    
    initialDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="quick-view">Quick View</button>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="company">${product.company}</p>
                <p class="price">${product.price}</p>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span>(4.5)</span>
                </div>
            </div>
        `;
        
        productContainer.appendChild(productCard);
    });
}

// Add event listeners for filter buttons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize with all products
    populateProducts();
    
    // Add click handlers for filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the filter category from the button text
            const filterCategory = this.textContent.trim();
            
            // Update products based on filter
            populateProducts(filterCategory);
        });
    });
    
    // Handle load more button
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const currentProducts = document.querySelectorAll('.product-card');
            const activeFilter = document.querySelector('.filter-btn.active').textContent.trim();
            
            let filteredProducts = products;
            if (activeFilter !== 'All Products') {
                filteredProducts = products.filter(product => 
                    product.category.toLowerCase() === activeFilter.toLowerCase());
            }
            
            // Add more products (next 4)
            const nextProducts = filteredProducts.slice(currentProducts.length, currentProducts.length + 4);
            
            if (nextProducts.length === 0) {
                loadMoreBtn.textContent = 'No More Products';
                loadMoreBtn.disabled = true;
                return;
            }
            
            const productContainer = document.getElementById('product-list');
            
            nextProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-overlay">
                            <button class="quick-view">Quick View</button>
                            <button class="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="company">${product.company}</p>
                        <p class="price">${product.price}</p>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>(4.5)</span>
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(productCard);
            });
            
            // If we've loaded all products, disable the button
            if (currentProducts.length + nextProducts.length >= filteredProducts.length) {
                loadMoreBtn.textContent = 'No More Products';
                loadMoreBtn.disabled = true;
            }
        });
    }
    
    // Handle mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});