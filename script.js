// Product data combining items from Insecticide, Fungicides, and Herbicides
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
    // Fungicide products
    {
        id: 11,
        name: "Saaf Fungicide",
        company: "UPL",
        price: "₹99",
        image: "Saaf.jpeg",
        category: "Fungicide"
    },
    {
        id: 12,
        name: "Indofil M-45 Fungicide",
        company: "Indofil",
        price: "₹169",
        image: "Indofil.webp",
        category: "Fungicide"
    },
    {
        id: 13,
        name: "Nativo Fungicide",
        company: "Bayer",
        price: "₹412",
        image: "Nativo.jpg",
        category: "Fungicide"
    },
    {
        id: 14,
        name: "Bavistin Fungicide",
        company: "Crystal Crop Protection",
        price: "₹276",
        image: "Bavistin.webp",
        category: "Fungicide"
    },
    {
        id: 15,
        name: "Antracol Fungicide",
        company: "Bayer",
        price: "₹286",
        image: "Antracol.webp",
        category: "Fungicide"
    },
    {
        id: 16,
        name: "Ridomil Gold Fungicide",
        company: "Syngenta",
        price: "₹496",
        image: "Redomil.jpeg",
        category: "Fungicide"
    },
    {
        id: 17,
        name: "Amistar Top Fungicide",
        company: "Syngenta",
        price: "₹2222",
        image: "Amistartop.jpg",
        category: "Fungicide"
    },
    {
        id: 18,
        name: "Blue Copper Fungicide",
        company: "Crystal Crop Protection",
        price: "₹440",
        image: "Bluecopper.jpg",
        category: "Fungicide"
    },
    {
        id: 19,
        name: "Sprint Fungicide",
        company: "Indofil",
        price: "₹580",
        image: "Sprint.webp",
        category: "Fungicide"
    },
    {
        id: 20,
        name: "Blitox Fungicide",
        company: "Tata Rallis",
        price: "₹496",
        image: "Biltox.webp",
        category: "Fungicide"
    },
    // Herbicide products
    {
        id: 21,
        name: "Roundup Herbicide",
        company: "Monsanto",
        price: "₹149",
        image: "Roundup.jpg",
        category: "Herbicide"
    },
    {
        id: 22,
        name: "Excel Mera 71 Herbicide",
        company: "Excel Crop Care",
        price: "₹175",
        image: "ExcelMera.jpg",
        category: "Herbicide"
    },
    {
        id: 23,
        name: "Nominee Gold Herbicide",
        company: "PI Industries",
        price: "₹450",
        image: "NomineeGold.jpg",
        category: "Herbicide"
    },
    {
        id: 24,
        name: "Atrazine Herbicide",
        company: "UPL",
        price: "₹320",
        image: "Atrazine.jpg",
        category: "Herbicide"
    },
    {
        id: 25,
        name: "Glyphosate Herbicide",
        company: "Bayer",
        price: "₹235",
        image: "Glyphosate.jpg",
        category: "Herbicide"
    },
    {
        id: 26,
        name: "2,4-D Sodium Salt Herbicide",
        company: "Crystal Crop Protection",
        price: "₹180",
        image: "2-4D.jpg",
        category: "Herbicide"
    },
    {
        id: 27,
        name: "Targa Super Herbicide",
        company: "Nissan Chemical",
        price: "₹680",
        image: "TargaSuper.jpg",
        category: "Herbicide"
    },
    {
        id: 28,
        name: "Pendimethalin Herbicide",
        company: "BASF",
        price: "₹520",
        image: "Pendimethalin.jpg",
        category: "Herbicide"
    },
    {
        id: 29,
        name: "Pretilachlor Herbicide",
        company: "Syngenta",
        price: "₹410",
        image: "Pretilachlor.jpg",
        category: "Herbicide"
    },
    {
        id: 30,
        name: "Butachlor Herbicide",
        company: "Dhanuka",
        price: "₹290",
        image: "Butachlor.jpg",
        category: "Herbicide"
    },
    // Humic Nutrient products
    {
        id: 31,
        name: "Jivras Biostimulant",
        company: "Multiplex",
        price: "₹295",
        image: "jivras.png",
        category: "Humic Nutrient"
    },
    {
        id: 32,
        name: "Seahume",
        company: "Atkotiya Agro",
        price: "₹294",
        image: "seahume.png",
        category: "Humic Nutrient"
    },
    {
        id: 33,
        name: "Tapas Pushti",
        company: "Vanproz",
        price: "₹243",
        image: "jivras.png",
        category: "Humic Nutrient"
    },
    {
        id: 34,
        name: "Actosol Calcium",
        company: "Actosol",
        price: "₹996",
        image: "actosol.png",
        category: "Humic Nutrient"
    },
    {
        id: 35,
        name: "BCX Biohumic",
        company: "BCX Bio Organics",
        price: "₹130",
        image: "BCX.png",
        category: "Humic Nutrient"
    },
    {
        id: 36,
        name: "Zeal Humic Flakes",
        company: "Zeal Biologicals",
        price: "₹516",
        image: "zealhumic.png",
        category: "Humic Nutrient"
    },
    {
        id: 37,
        name: "Humate H & F Spray",
        company: "Humate India",
        price: "₹398",
        image: "humate.png",
        category: "Humic Nutrient"
    },
    {
        id: 38,
        name: "Humi Pro 95 WSG",
        company: "Hifield Organic",
        price: "₹267",
        image: "humipro.png",
        category: "Humic Nutrient"
    },
    {
        id: 39,
        name: "Humesol Humic Acid",
        company: "PI Industries",
        price: "₹204",
        image: "humesol.png",
        category: "Humic Nutrient"
    },
    {
        id: 40,
        name: "Sun Bio Root",
        company: "Sonkul",
        price: "₹340",
        image: "sunbioroot.png",
        category: "Humic Nutrient"
    },
    // Nematicide products
    {
        id: 41,
        name: "Guardian N-Shield",
        company: "BioHarvest",
        price: "₹545",
        image: "guardian-shield.png",
        category: "Nematicide"
    },
    {
        id: 42,
        name: "NemaKill Pro",
        company: "EcoAgro Solutions",
        price: "₹720",
        image: "nemakill-pro.png",
        category: "Nematicide"
    },
    {
        id: 43,
        name: "RootGuard Plus",
        company: "Agrivance",
        price: "₹498",
        image: "rootguard-plus.png",
        category: "Nematicide"
    },
    {
        id: 44,
        name: "NemaBlock Advanced",
        company: "GreenField",
        price: "₹630",
        image: "nemablock.png",
        category: "Nematicide"
    },
    {
        id: 45,
        name: "Defender Soil Treatment",
        company: "Crop Shield",
        price: "₹860",
        image: "defender-soil.png",
        category: "Nematicide"
    },
    {
        id: 46,
        name: "NemaStop Bio",
        company: "OrganicLife",
        price: "₹425",
        image: "nemastop-bio.png",
        category: "Nematicide"
    },
    {
        id: 47,
        name: "Vydate Root Protector",
        company: "ProtectChem",
        price: "₹795",
        image: "vydate-root.png",
        category: "Nematicide"
    },
    {
        id: 48,
        name: "SoilShield Nema Control",
        company: "TerraVita",
        price: "₹585",
        image: "soilshield.png",
        category: "Nematicide"
    },
    {
        id: 49,
        name: "RootZone Nematicide",
        company: "PlantDefenders",
        price: "₹675",
        image: "rootzone.png",
        category: "Nematicide"
    },
    {
        id: 50,
        name: "NemaGone Liquid",
        company: "FarmTech Solutions",
        price: "₹520",
        image: "nemagone.png",
        category: "Nematicide"
    },
    // NPK Fertilizer products
    {
        id: 51,
        name: "KATYAYANI NPK 19:19:19",
        company: "Katyayani Organics",
        price: "₹354",
        image: "KatanayaNPK19.webp",
        category: "NPK Fertilizer"
    },
    {
        id: 52,
        name: "KATYAYANI NPK 20:20:20",
        company: "Katyayani Organics",
        price: "₹495",
        image: "KatanayaNPK.webp",
        category: "NPK Fertilizer"
    },
    {
        id: 53,
        name: "Nano Fert 19:19:19",
        company: "Geolife Agritech India Pvt Ltd.",
        price: "₹799",
        image: "geonano.webp",
        category: "NPK Fertilizer"
    },
    {
        id: 54,
        name: "Nanofert 13:00:45 Fertilizer",
        company: "Geolife Agritech India Pvt Ltd.",
        price: "₹890",
        image: "NPK13.webp",
        category: "NPK Fertilizer"
    },
    {
        id: 55,
        name: "Nanofert 00:52:34 NPK Fertilizer",
        company: "Geolife Agritech India Pvt Ltd.",
        price: "₹1250",
        image: "NPK00.webp",
        category: "NPK Fertilizer"
    },
    {
        id: 56,
        name: "Enhancer NPK",
        company: "Loki.Labs",
        price: "₹2000",
        image: "Planten.jpg",
        category: "NPK Fertilizer"
    },
    {
        id: 57,
        name: "All purpose NPK",
        company: "Loki.Labs",
        price: "₹1170",
        image: "NPK10.10.jpg",
        category: "NPK Fertilizer"
    },
    {
        id: 58,
        name: "Notore 46:0:0 NPK",
        company: "Notore Labs",
        price: "₹2834",
        image: "NPK46.png",
        category: "NPK Fertilizer"
    },
    {
        id: 59,
        name: "Powerpack 20-20-20 NPK Fertilizer",
        company: "PowerPandi",
        price: "₹560",
        image: "Powerpack20.jpg",
        category: "NPK Fertilizer"
    },
    {
        id: 60,
        name: "The Andereson NPK 10-10-10",
        company: "The Andereson",
        price: "₹699",
        image: "Andre10.jpg",
        category: "NPK Fertilizer"
    },
    // Plant Growth Promoters products
    {
        id: 61,
        name: "Liquid Seaweed",
        company: "Anand Agro Care",
        price: "₹539",
        image: "AnandAgroSeaRubyLiquidSeaweed.png",
        category: "Plant Growth Promoter"
    },
    {
        id: 62,
        name: "Bhumi JET-100",
        company: "Bhumi Agro Industries",
        price: "₹199",
        image: "BhumiJET-100.png",
        category: "Plant Growth Promoter"
    },
    {
        id: 63,
        name: "Amino 17",
        company: "West Coast Herbochem",
        price: "₹226",
        image: "Amino-17.png",
        category: "Plant Growth Promoter"
    },
    {
        id: 64,
        name: "Amruth Alzyme",
        company: "Amruth Organic",
        price: "₹503",
        image: "AmruthAlzyme.png",
        category: "Plant Growth Promoter"
    },
    {
        id: 65,
        name: "Falcon Growth Promoter",
        company: "Multiplex",
        price: "₹130",
        image: "Falcon.png",
        category: "Plant Growth Promoter"
    },
    {
        id: 66,
        name: "V-Hume Promoter",
        company: "Vanproz",
        price: "₹309",
        image: "V-hume.png",
        category: "Plant Growth Promoter"
    },
    {
        id: 67,
        name: "Planofix Promoter",
        company: "Bayer",
        price: "₹117",
        image: "Planofix.png",
        category: "Plant Growth Promoter"
    },
    {
        id: 68,
        name: "Bahaar Promoter",
        company: "Tata Rallis",
        price: "₹283",
        image: "Bahaar.png",
        category: "Plant Growth Promoter"
    },
    {
        id: 69,
        name: "Quantis Biostimulant",
        company: "Syngenta",
        price: "₹120",
        image: "QuantisBiostimulant.png",
        category: "Plant Growth Promoter"
    },
    {
        id: 70,
        name: "Allure Growth Promoter",
        company: "Agrinos",
        price: "₹699",
        image: "Allure.png",
        category: "Plant Growth Promoter"
    },
    // Yield Boosters products
    {
        id: 71,
        name: "Vibrant Growrich",
        company: "Vibrant Life",
        price: "₹1000",
        image: "VIBRANTGROWRICH.png",
        category: "Yield Booster"
    },
    {
        id: 72,
        name: "Prime Aavirat",
        company: "Bioprime",
        price: "₹678",
        image: "PRIMEAAVIRATGROWTHBOOSTER.png",
        category: "Yield Booster"
    },
    {
        id: 73,
        name: "Prime Chiron",
        company: "Bioprime",
        price: "₹270",
        image: "primechiron.png",
        category: "Yield Booster"
    },
    {
        id: 74,
        name: "Venus Proteinx 50",
        company: "Venus Agro Chemicals",
        price: "₹200",
        image: "proteinx.png",
        category: "Yield Booster"
    },
    {
        id: 75,
        name: "Godrej Double",
        company: "Godrej Agrovet",
        price: "₹340",
        image: "godrejdouble.png",
        category: "Yield Booster"
    },
    {
        id: 76,
        name: "Agroveer (vegetables)",
        company: "Sethu Farmer Producer",
        price: "₹120",
        image: "agroveer.png",
        category: "Yield Booster"
    },
    {
        id: 77,
        name: "Agroveer (fruits)",
        company: "Sethu Farmer Producer",
        price: "₹134",
        image: "agroveerfruits.png",
        category: "Yield Booster"
    },
    {
        id: 78,
        name: "Bioprime Prime Fast 10",
        company: "Bioprime",
        price: "₹230",
        image: "fast10.png",
        category: "Yield Booster"
    },
    {
        id: 79,
        name: "Prime Fortisea",
        company: "Bioprime",
        price: "₹200",
        image: "primefortisea.png",
        category: "Yield Booster"
    },
    {
        id: 80,
        name: "Geolife Vigore",
        company: "Geolife Agritech India",
        price: "₹480",
        image: "vigore.png",
        category: "Yield Booster"
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

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Change website name from "Farming Products" to "Agrify"
  const logoElement = document.querySelector('.logo');
  if (logoElement) {
    logoElement.textContent = 'Agrify';
  }
  
  // Change title in hero section if it exists
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle && heroTitle.textContent === "Premium Farming Solutions") {
    heroTitle.textContent = "Premium Agrify Solutions";
  }
  
  // Change document title
  document.title = "Agrify";
  
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
});