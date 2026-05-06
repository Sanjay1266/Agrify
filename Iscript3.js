// Define the products array
const insecticideProducts = [
    {
        id: 1,
        name: "Coragen Insecticide",
        company: "FMC",
        price: 167,
        image: "assets/images/Coragen.webp",
        type: "systemic"
    },
    {
        id: 2,
        name: "Phoskill Insecticide",
        company: "UPL",
        price: 199,
        image: "assets/images/Phoskill.avif",
        type: "contact"
    },
    {
        id: 3,
        name: "Exponus Insecticide",
        company: "BASF",
        price: 582,
        image: "assets/images/Exponus.avif",
        type: "systemic"
    },
    {
        id: 4,
        name: "Alika Insecticide",
        company: "Syngenta",
        price: 116,
        image: "assets/images/Alika Insecticide.avif",
        type: "contact"
    },
    {
        id: 5,
        name: "Jump Insecticide",
        company: "Bayer",
        price: 171,
        image: "assets/images/Jump.webp",
        type: "field"
    },
    {
        id: 6,
        name: "Solomon Insecticide",
        company: "Bayer",
        price: 369,
        image: "assets/images/Solomon.jpg",
        type: "field"
    },
    {
        id: 7,
        name: "Rogor Insecticide",
        company: "FMC",
        price: 102,
        image: "assets/images/Rogor.avif",
        type: "systemic"
    },
    {
        id: 8,
        name: "Actara Insecticide",
        company: "Syngenta",
        price: 250,
        image: "assets/images/Actara.avif",
        type: "systemic"
    },
    {
        id: 9,
        name: "Ekalux Insecticide",
        company: "Syngenta",
        price: 225,
        image: "assets/images/Ekalux.avif",
        type: "contact"
    },
    {
        id: 10,
        name: "Ampligo Insecticide",
        company: "Syngenta",
        price: 233,
        image: "assets/images/ampligo.avif",
        type: "fruit"
    },
    {
        id: 11,
        name: "Admire Insecticide",
        company: "Bayer",
        price: 239,
        image: "assets/images/Admire.avif",
        type: "fruit"
    },
    {
        id: 12,
        name: "Lancergold Insecticide",
        company: "UPL",
        price: 303,
        image: "assets/images/Lancergold.avif",
        type: "field"
    },
    {
        id: 13,
        name: "Omite Insecticide",
        company: "Dhanuka",
        price: 199,
        image: "assets/images/Omite.webp",
        type: "fruit"
    },
    {
        id: 14,
        name: "Confidor Insecticide",
        company: "Bayer",
        price: 735,
        image: "assets/images/confidor.avif",
        type: "systemic"
    },
    {
        id: 15,
        name: "Karate Insecticide",
        company: "Syngenta",
        price: 199,
        image: "assets/images/Karate.webp",
        type: "contact"
    },
    {
        id: 16,
        name: "Oberon Insecticide",
        company: "Bayer",
        price: 715,
        image: "assets/images/Oberon.webp",
        type: "fruit"
    },
    {
        id: 17,
        name: "Furadan Insecticide",
        company: "Crystal Crop Protection",
        price: 799,
        image: "assets/images/Furadan.avif",
        type: "systemic"
    },
    {
        id: 18,
        name: "Gracia Insecticide",
        company: "Godrej Agrovet",
        price: 1400,
        image: "assets/images/Gracia.webp",
        type: "organic"
    },
    {
        id: 19,
        name: "Pegasus Insecticide",
        company: "Syngenta",
        price: 926,
        image: "assets/images/pegasus.avif",
        type: "organic"
    },
    {
        id: 20,
        name: "Ulala Insecticide",
        company: "UPL",
        price: 356,
        image: "assets/images/ULALA (1).avif",
        type: "organic"
    },
    {
        id: 21,
        name: "Movento Energy Insecticide",
        company: "Bayer",
        price: 466,
        image: "assets/images/movento.avif",
        type: "systemic"
    },
    {
        id: 22,
        name: "Tata Manik Insecticide",
        company: "Tata Rallis",
        price: 177,
        image: "assets/images/manik.avif",
        type: "contact"
    },
    {
        id: 23,
        name: "Calden50 SP Insecticide",
        company: "Dhanuka",
        price: 420,
        image: "assets/images/calden50.avif",
        type: "field"
    },
    {
        id: 24,
        name: "Confidor Super Insecticide",
        company: "Bayer",
        price: 333,
        image: "assets/images/confidor super 1.avif",
        type: "systemic"
    },
    {
        id: 25,
        name: "Insecticide",
        company: "BASF",
        price: 611,
        image: "assets/images/interpid.avif",
        type: "field"
    },
    {
        id: 26,
        name: "Curacron Insecticide",
        company: "Syngenta",
        price: 266,
        image: "assets/images/curacron.avif",
        type: "fruit"
    },
    {
        id: 27,
        name: "Tatamida Insecticide",
        company: "Tata Rallis",
        price: 444,
        image: "assets/images/tatamida.avif",
        type: "systemic"
    },
    {
        id: 28,
        name: "Tricel Insecticide",
        company: "Sumitomo",
        price: 113,
        image: "assets/images/tricel.avif",
        type: "contact"
    },
    {
        id: 30,
        name: "Meothrin Insecticide",
        company: "Sumitomo",
        price: 496,
        image: "assets/images/Meothrin.avif",
        type: "fruit"
    },
    {
        id: 31,
        name: "Vayego Insecticide",
        company: "Bayer",
        price: 1089,
        image: "assets/images/vayego.avif",
        type: "organic"
    },
    {
        id: 32,
        name: "Voliam Flexi Insecticide",
        company: "Syngenta",
        price: 800,
        image: "assets/images/Voliam.avif",
        type: "systemic"
    },
    {
        id: 33,
        name: "Shinwa Insecticide",
        company: "Insecticides(India)limited",
        price: 751,
        image: "assets/images/shinwa.avif",
        type: "field"
    },
    {
        id: 34,
        name: "Proclaim Insecticide",
        company: "Crystal Crop Protection",
        price: 91,
        image: "assets/images/Proclaim.avif",
        type: "contact"
    },
    {
        id: 35,
        name: "Takaf Insecticide",
        company: "Adama",
        price: 332,
        image: "assets/images/takaf.avif",
        type: "fruit"
    },
    {
        id: 37,
        name: "Fortenza Duo Insecticide",
        company: "Syngenta",
        price: 562,
        image: "assets/images/frotenza.avif",
        type: "systemic"
    },
    {
        id: 38,
        name: "Reeva 5 Insecticide",
        company: "Tata Rallis",
        price: 222,
        image: "assets/images/reeva.avif",
        type: "organic"
    },
    {
        id: 39,
        name: "Sefina Insecticide",
        company: "BASF",
        price: 745,
        image: "assets/images/sefina.avif",
        type: "fruit"
    }
];

// Function to filter products 
function filterProducts(filterType, filterValue) {
    if (filterType === 'company' && filterValue !== 'all') {
        return insecticideProducts.filter(product => product.company.toLowerCase() === filterValue.toLowerCase());
    } else if (filterType === 'type') {
        return insecticideProducts.filter(product => product.type.toLowerCase() === filterValue.toLowerCase());
    } else {
        return insecticideProducts; // Return all products if 'all' is selected or no valid filter
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Function to render product cards
    function renderProducts(products) {
        const productGrid = document.getElementById('product-grid');
        productGrid.innerHTML = '';

        products.forEach(product => {
            // Determine safety badge based on price
            let safetyLevel = 'safety-low';
            if (product.price > 500) {
                safetyLevel = 'safety-high';
            } else if (product.price > 250) {
                safetyLevel = 'safety-medium';
            }

            // Generate HTML for each product
            const productHTML = `
                <div class="insecticide-card" data-id="${product.id}">
                    <div class="insecticide-image">
                        <img src="./images/${product.image}" alt="${product.name}">
                        <span class="safety-badge ${safetyLevel}">${product.company}</span>
                    </div>
                    <div class="insecticide-info">
                        <h3>${product.name}</h3>
                        <p>Professional-grade insecticide for effective pest control.</p>
                        <div class="insecticide-specs">
                            <div class="spec-item">
                                <i class="fas fa-shield-alt"></i>
                                <span>Professional Grade</span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-bug"></i>
                                <span>Multi-Pest</span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-building"></i>
                                <span>${product.company}</span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-seedling"></i>
                                <span>${product.type}</span>
                            </div>
                        </div>
                        <div class="insecticide-price">
                            <span class="price">₹${product.price}</span>
                            <span>Standard Pack</span>
                        </div>
                        <div class="insecticide-actions">
                            <a href="#" class="buy-now">
                                <i class="fas fa-shopping-cart"></i>
                                Buy Now
                            </a>
                            <a href="#" class="info-btn">
                                <i class="fas fa-info-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productHTML;
        });
    }

    // Initial render of all products
    renderProducts(insecticideProducts);

    // Handle category button clicks
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            let filteredProducts;

            // Check if it's a company filter or type filter
            if (button.hasAttribute('data-company')) {
                const company = button.getAttribute('data-company');
                filteredProducts = filterProducts('company', company);
            } else if (button.hasAttribute('data-type')) {
                const type = button.getAttribute('data-type');
                filteredProducts = filterProducts('type', type);
            } else {
                filteredProducts = insecticideProducts;
            }

            renderProducts(filteredProducts);
        });
    });

    // Tab Functionality
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding tab pane
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Accordion Functionality
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');

            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = null;
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                accordionItem.classList.add('active');
                const content = accordionItem.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});