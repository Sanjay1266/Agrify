/**
 * Agrify Master Product Dataset & Query Utilities
 * 80 Verified Agricultural Products across 8 Categories
 */

const AGRIFY_PRODUCTS = [
  {
    "id": 1,
    "name": "Coragen Insecticide",
    "company": "FMC",
    "category": "Insecticide",
    "price": 167,
    "originalPrice": 204,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 45,
    "image": "assets/images/Coragen.webp",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Coragen Insecticide manufactured by FMC is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 2,
    "name": "Phoskill Insecticide",
    "company": "UPL",
    "category": "Insecticide",
    "price": 199,
    "originalPrice": 243,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 52,
    "image": "assets/images/Phoskill.avif",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Phoskill Insecticide manufactured by UPL is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 3,
    "name": "Exponus Insecticide",
    "company": "BASE F",
    "category": "Insecticide",
    "price": 582,
    "originalPrice": 710,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 59,
    "image": "assets/images/Exponus.avif",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Exponus Insecticide manufactured by BASE F is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 4,
    "name": "Alika Insecticide",
    "company": "Syngenta",
    "category": "Insecticide",
    "price": 116,
    "originalPrice": 142,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 66,
    "image": "assets/images/ampligo.avif",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Alika Insecticide manufactured by Syngenta is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 5,
    "name": "Jump Insecticide",
    "company": "Bayer",
    "category": "Insecticide",
    "price": 171,
    "originalPrice": 209,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 73,
    "image": "assets/images/Jump.webp",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Jump Insecticide manufactured by Bayer is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 6,
    "name": "Solomon Insecticide",
    "company": "Bayer",
    "category": "Insecticide",
    "price": 369,
    "originalPrice": 450,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 80,
    "image": "assets/images/Solomon.jpg",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Solomon Insecticide manufactured by Bayer is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 7,
    "name": "Rogor Insecticide",
    "company": "FMC",
    "category": "Insecticide",
    "price": 102,
    "originalPrice": 124,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 87,
    "image": "assets/images/Rogor.avif",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Rogor Insecticide manufactured by FMC is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 8,
    "name": "Actara Insecticide",
    "company": "Syngenta",
    "category": "Insecticide",
    "price": 250,
    "originalPrice": 305,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 94,
    "image": "assets/images/Actara.avif",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Actara Insecticide manufactured by Syngenta is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 9,
    "name": "Ekalux Insecticide",
    "company": "Syngenta",
    "category": "Insecticide",
    "price": 225,
    "originalPrice": 275,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 101,
    "image": "assets/images/Ekalux.avif",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Ekalux Insecticide manufactured by Syngenta is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 10,
    "name": "Ampligo Insecticide",
    "company": "Syngenta",
    "category": "Insecticide",
    "price": 233,
    "originalPrice": 284,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 108,
    "image": "assets/images/ampligo.avif",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Controls stem borer, leaf folder, aphids, thrips, and sucking pests.",
    "dosage": "1.5 - 2 ml per liter of water",
    "type": "Crop Protection / Insecticide",
    "description": "Ampligo Insecticide manufactured by Syngenta is an advanced agricultural formula designed for modern high-yield farming. Controls stem borer, leaf folder, aphids, thrips, and sucking pests. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 11,
    "name": "Saaf Fungicide",
    "company": "UPL",
    "category": "Fungicide",
    "price": 99,
    "originalPrice": 121,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 115,
    "image": "assets/images/Saaf.avif",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Saaf Fungicide manufactured by UPL is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 12,
    "name": "Indofil M-45 Fungicide",
    "company": "Indofil",
    "category": "Fungicide",
    "price": 169,
    "originalPrice": 206,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 122,
    "image": "assets/images/Indofil.webp",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Indofil M-45 Fungicide manufactured by Indofil is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 13,
    "name": "Nativo Fungicide",
    "company": "Bayer",
    "category": "Fungicide",
    "price": 412,
    "originalPrice": 503,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 129,
    "image": "assets/images/Nativo.jpg",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Nativo Fungicide manufactured by Bayer is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 14,
    "name": "Bavistin Fungicide",
    "company": "Crystal Crop Protection",
    "category": "Fungicide",
    "price": 276,
    "originalPrice": 337,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 136,
    "image": "assets/images/Bavistin.avif",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Bavistin Fungicide manufactured by Crystal Crop Protection is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 15,
    "name": "Antracol Fungicide",
    "company": "Bayer",
    "category": "Fungicide",
    "price": 286,
    "originalPrice": 349,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 143,
    "image": "assets/images/Antracol.webp",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Antracol Fungicide manufactured by Bayer is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 16,
    "name": "Ridomil Gold Fungicide",
    "company": "Syngenta",
    "category": "Fungicide",
    "price": 496,
    "originalPrice": 605,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 150,
    "image": "assets/images/Redomil.jpeg",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Ridomil Gold Fungicide manufactured by Syngenta is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 17,
    "name": "Amistar Top Fungicide",
    "company": "Syngenta",
    "category": "Fungicide",
    "price": 2222,
    "originalPrice": 2711,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 157,
    "image": "assets/images/Amistartop.jpg",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Amistar Top Fungicide manufactured by Syngenta is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 18,
    "name": "Blue Copper Fungicide",
    "company": "Crystal Crop Protection",
    "category": "Fungicide",
    "price": 440,
    "originalPrice": 537,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 164,
    "image": "assets/images/Bluecopper.jpg",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Blue Copper Fungicide manufactured by Crystal Crop Protection is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 19,
    "name": "Sprint Fungicide",
    "company": "Indofil",
    "category": "Fungicide",
    "price": 580,
    "originalPrice": 708,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 171,
    "image": "assets/images/Sprint.webp",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Sprint Fungicide manufactured by Indofil is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 20,
    "name": "Blitox Fungicide",
    "company": "Tata Rallis",
    "category": "Fungicide",
    "price": 496,
    "originalPrice": 605,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 178,
    "image": "assets/images/Biltox.webp",
    "inStock": true,
    "variants": [
      "100 g",
      "250 g",
      "500 g",
      "1 kg"
    ],
    "targetPests": "Broad spectrum protection against blast, blight, rust, and powdery mildew.",
    "dosage": "2 - 2.5 g/ml per liter of water",
    "type": "Crop Protection / Fungicide",
    "description": "Blitox Fungicide manufactured by Tata Rallis is an advanced agricultural formula designed for modern high-yield farming. Broad spectrum protection against blast, blight, rust, and powdery mildew. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 21,
    "name": "Roundup Herbicide",
    "company": "Monsanto",
    "category": "Herbicide",
    "price": 149,
    "originalPrice": 182,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 185,
    "image": "assets/images/roundup.jpeg",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "Roundup Herbicide manufactured by Monsanto is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 22,
    "name": "Excel Mera 71 Herbicide",
    "company": "Excel Crop Care",
    "category": "Herbicide",
    "price": 175,
    "originalPrice": 214,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 192,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "Excel Mera 71 Herbicide manufactured by Excel Crop Care is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 23,
    "name": "Nominee Gold Herbicide",
    "company": "PI Industries",
    "category": "Herbicide",
    "price": 450,
    "originalPrice": 549,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 199,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "Nominee Gold Herbicide manufactured by PI Industries is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 24,
    "name": "Atrazine Herbicide",
    "company": "UPL",
    "category": "Herbicide",
    "price": 320,
    "originalPrice": 390,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 206,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "Atrazine Herbicide manufactured by UPL is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 25,
    "name": "Glyphosate Herbicide",
    "company": "Bayer",
    "category": "Herbicide",
    "price": 235,
    "originalPrice": 287,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 213,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "Glyphosate Herbicide manufactured by Bayer is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 26,
    "name": "2,4-D Sodium Salt Herbicide",
    "company": "Crystal Crop Protection",
    "category": "Herbicide",
    "price": 180,
    "originalPrice": 220,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 220,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "2,4-D Sodium Salt Herbicide manufactured by Crystal Crop Protection is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 27,
    "name": "Targa Super Herbicide",
    "company": "Nissan Chemical",
    "category": "Herbicide",
    "price": 680,
    "originalPrice": 830,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 47,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "Targa Super Herbicide manufactured by Nissan Chemical is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 28,
    "name": "Pendimethalin Herbicide",
    "company": "BASF",
    "category": "Herbicide",
    "price": 520,
    "originalPrice": 634,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 54,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "Pendimethalin Herbicide manufactured by BASF is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 29,
    "name": "Pretilachlor Herbicide",
    "company": "Syngenta",
    "category": "Herbicide",
    "price": 410,
    "originalPrice": 500,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 61,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "Pretilachlor Herbicide manufactured by Syngenta is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 30,
    "name": "Butachlor Herbicide",
    "company": "Dhanuka",
    "category": "Herbicide",
    "price": 290,
    "originalPrice": 354,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 68,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Selective and non-selective weed control in field crops and orchards.",
    "dosage": "3 - 5 ml per liter of water",
    "type": "Crop Protection / Herbicide",
    "description": "Butachlor Herbicide manufactured by Dhanuka is an advanced agricultural formula designed for modern high-yield farming. Selective and non-selective weed control in field crops and orchards. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 31,
    "name": "Jivras Biostimulant",
    "company": "Multiplex",
    "category": "Humic Nutrient",
    "price": 295,
    "originalPrice": 360,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 75,
    "image": "assets/images/jivras.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "Jivras Biostimulant manufactured by Multiplex is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 32,
    "name": "Seahume",
    "company": "Atkotiya Agro",
    "category": "Humic Nutrient",
    "price": 294,
    "originalPrice": 359,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 82,
    "image": "assets/images/seahume.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "Seahume manufactured by Atkotiya Agro is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 33,
    "name": "Tapas Pushti",
    "company": "Vanproz",
    "category": "Humic Nutrient",
    "price": 243,
    "originalPrice": 296,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 89,
    "image": "assets/images/jivras.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "Tapas Pushti manufactured by Vanproz is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 34,
    "name": "Actosol Calcium",
    "company": "Actosol",
    "category": "Humic Nutrient",
    "price": 996,
    "originalPrice": 1215,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 96,
    "image": "assets/images/actosol.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "Actosol Calcium manufactured by Actosol is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 35,
    "name": "BCX Biohumic",
    "company": "BCX Bio Organics",
    "category": "Humic Nutrient",
    "price": 130,
    "originalPrice": 159,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 103,
    "image": "assets/images/BCX.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "BCX Biohumic manufactured by BCX Bio Organics is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 36,
    "name": "Zeal Humic Flakes",
    "company": "Zeal Biologicals",
    "category": "Humic Nutrient",
    "price": 516,
    "originalPrice": 630,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 110,
    "image": "assets/images/zealhumic.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "Zeal Humic Flakes manufactured by Zeal Biologicals is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 37,
    "name": "Humate H & F Spray",
    "company": "Humate India",
    "category": "Humic Nutrient",
    "price": 398,
    "originalPrice": 486,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 117,
    "image": "assets/images/humate.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "Humate H & F Spray manufactured by Humate India is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 38,
    "name": "Humi Pro 95 WSG",
    "company": "Hifield Organic",
    "category": "Humic Nutrient",
    "price": 267,
    "originalPrice": 326,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 124,
    "image": "assets/images/humipro.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "Humi Pro 95 WSG manufactured by Hifield Organic is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 39,
    "name": "Humesol Humic Acid",
    "company": "PI Industries",
    "category": "Humic Nutrient",
    "price": 204,
    "originalPrice": 249,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 131,
    "image": "assets/images/humesol.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "Humesol Humic Acid manufactured by PI Industries is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 40,
    "name": "Sun Bio Root",
    "company": "Sonkul",
    "category": "Humic Nutrient",
    "price": 340,
    "originalPrice": 415,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 138,
    "image": "assets/images/sunbioroot.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L",
      "5 L"
    ],
    "targetPests": "Improves root development, soil microbial activity, and nutrient absorption.",
    "dosage": "2 - 3 ml per liter of water or 1 L per acre for drip",
    "type": "Soil Nutrition & Biostimulant",
    "description": "Sun Bio Root manufactured by Sonkul is an advanced agricultural formula designed for modern high-yield farming. Improves root development, soil microbial activity, and nutrient absorption. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 41,
    "name": "Guardian N-Shield",
    "company": "BioHarvest",
    "category": "Nematicide",
    "price": 545,
    "originalPrice": 665,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 145,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "Guardian N-Shield manufactured by BioHarvest is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 42,
    "name": "NemaKill Pro",
    "company": "EcoAgro Solutions",
    "category": "Nematicide",
    "price": 720,
    "originalPrice": 878,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 152,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "NemaKill Pro manufactured by EcoAgro Solutions is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 43,
    "name": "RootGuard Plus",
    "company": "Agrivance",
    "category": "Nematicide",
    "price": 498,
    "originalPrice": 608,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 159,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "RootGuard Plus manufactured by Agrivance is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 44,
    "name": "NemaBlock Advanced",
    "company": "GreenField",
    "category": "Nematicide",
    "price": 630,
    "originalPrice": 769,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 166,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "NemaBlock Advanced manufactured by GreenField is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 45,
    "name": "Defender Soil Treatment",
    "company": "Crop Shield",
    "category": "Nematicide",
    "price": 860,
    "originalPrice": 1049,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 173,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "Defender Soil Treatment manufactured by Crop Shield is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 46,
    "name": "NemaStop Bio",
    "company": "OrganicLife",
    "category": "Nematicide",
    "price": 425,
    "originalPrice": 519,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 180,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "NemaStop Bio manufactured by OrganicLife is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 47,
    "name": "Vydate Root Protector",
    "company": "ProtectChem",
    "category": "Nematicide",
    "price": 795,
    "originalPrice": 970,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 187,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "Vydate Root Protector manufactured by ProtectChem is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 48,
    "name": "SoilShield Nema Control",
    "company": "TerraVita",
    "category": "Nematicide",
    "price": 585,
    "originalPrice": 714,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 194,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "SoilShield Nema Control manufactured by TerraVita is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 49,
    "name": "RootZone Nematicide",
    "company": "PlantDefenders",
    "category": "Nematicide",
    "price": 675,
    "originalPrice": 824,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 201,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "RootZone Nematicide manufactured by PlantDefenders is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 50,
    "name": "NemaGone Liquid",
    "company": "FarmTech Solutions",
    "category": "Nematicide",
    "price": 520,
    "originalPrice": 634,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 208,
    "image": "assets/images/default-user.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "10 kg"
    ],
    "targetPests": "Protects root systems against root-knot and cyst nematodes.",
    "dosage": "4 - 5 kg per acre soil application",
    "type": "Nematode Control",
    "description": "NemaGone Liquid manufactured by FarmTech Solutions is an advanced agricultural formula designed for modern high-yield farming. Protects root systems against root-knot and cyst nematodes. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 51,
    "name": "KATYAYANI NPK 19:19:19",
    "company": "Katyayani Organics",
    "category": "NPK Fertilizer",
    "price": 354,
    "originalPrice": 432,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 215,
    "image": "assets/images/KatanayaNPK19.webp",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "KATYAYANI NPK 19:19:19 manufactured by Katyayani Organics is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 52,
    "name": "KATYAYANI NPK 20:20:20",
    "company": "Katyayani Organics",
    "category": "NPK Fertilizer",
    "price": 495,
    "originalPrice": 604,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 222,
    "image": "assets/images/KatanayaNPK.webp",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "KATYAYANI NPK 20:20:20 manufactured by Katyayani Organics is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 53,
    "name": "Nano Fert 19:19:19",
    "company": "Geolife Agritech India Pvt Ltd.",
    "category": "NPK Fertilizer",
    "price": 799,
    "originalPrice": 975,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 49,
    "image": "assets/images/geonano.webp",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "Nano Fert 19:19:19 manufactured by Geolife Agritech India Pvt Ltd. is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 54,
    "name": "Nanofert 13:00:45 Fertilizer",
    "company": "Geolife Agritech India Pvt Ltd.",
    "category": "NPK Fertilizer",
    "price": 890,
    "originalPrice": 1086,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 56,
    "image": "assets/images/NPK13.webp",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "Nanofert 13:00:45 Fertilizer manufactured by Geolife Agritech India Pvt Ltd. is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 55,
    "name": "Nanofert 00:52:34 NPK Fertilizer",
    "company": "Geolife Agritech India Pvt Ltd.",
    "category": "NPK Fertilizer",
    "price": 1250,
    "originalPrice": 1525,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 63,
    "image": "assets/images/NPK00.webp",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "Nanofert 00:52:34 NPK Fertilizer manufactured by Geolife Agritech India Pvt Ltd. is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 56,
    "name": "Enhancer NPK",
    "company": "Loki.Labs",
    "category": "NPK Fertilizer",
    "price": 2000,
    "originalPrice": 2440,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 70,
    "image": "assets/images/Planten.jpg",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "Enhancer NPK manufactured by Loki.Labs is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 57,
    "name": "All purpose NPK",
    "company": "Loki.Labs",
    "category": "NPK Fertilizer",
    "price": 1170,
    "originalPrice": 1427,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 77,
    "image": "assets/images/NPK10.10.jpg",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "All purpose NPK manufactured by Loki.Labs is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 58,
    "name": "Notore 46:0:0 NPK",
    "company": "Notore Labs",
    "category": "NPK Fertilizer",
    "price": 2834,
    "originalPrice": 3457,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 84,
    "image": "assets/images/NPK46.png",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "Notore 46:0:0 NPK manufactured by Notore Labs is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 59,
    "name": "Powerpack 20-20-20 NPK Fertilizer",
    "company": "PowerPandi",
    "category": "NPK Fertilizer",
    "price": 560,
    "originalPrice": 683,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 91,
    "image": "assets/images/Powerpack20.jpg",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "Powerpack 20-20-20 NPK Fertilizer manufactured by PowerPandi is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 60,
    "name": "The Andereson NPK 10-10-10",
    "company": "The Andereson",
    "category": "NPK Fertilizer",
    "price": 699,
    "originalPrice": 853,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 98,
    "image": "assets/images/Andre10.jpg",
    "inStock": true,
    "variants": [
      "1 kg",
      "5 kg",
      "25 kg",
      "50 kg"
    ],
    "targetPests": "Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering.",
    "dosage": "5 - 10 g per liter of water for foliar or fertigation",
    "type": "Specialty Plant Nutrition",
    "description": "The Andereson NPK 10-10-10 manufactured by The Andereson is an advanced agricultural formula designed for modern high-yield farming. Balanced macronutrients (Nitrogen, Phosphorus, Potassium) for vegetative growth and flowering. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 61,
    "name": "Liquid Seaweed",
    "company": "Anand Agro Care",
    "category": "Plant Growth Promoter",
    "price": 539,
    "originalPrice": 658,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 105,
    "image": "assets/images/AnandAgroSeaRubyLiquidSeaweed.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "Liquid Seaweed manufactured by Anand Agro Care is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 62,
    "name": "Bhumi JET-100",
    "company": "Bhumi Agro Industries",
    "category": "Plant Growth Promoter",
    "price": 199,
    "originalPrice": 243,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 112,
    "image": "assets/images/BhumiJET-100.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "Bhumi JET-100 manufactured by Bhumi Agro Industries is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 63,
    "name": "Amino 17",
    "company": "West Coast Herbochem",
    "category": "Plant Growth Promoter",
    "price": 226,
    "originalPrice": 276,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 119,
    "image": "assets/images/Amino-17.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "Amino 17 manufactured by West Coast Herbochem is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 64,
    "name": "Amruth Alzyme",
    "company": "Amruth Organic",
    "category": "Plant Growth Promoter",
    "price": 503,
    "originalPrice": 614,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 126,
    "image": "assets/images/AmruthAlzyme.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "Amruth Alzyme manufactured by Amruth Organic is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 65,
    "name": "Falcon Growth Promoter",
    "company": "Multiplex",
    "category": "Plant Growth Promoter",
    "price": 130,
    "originalPrice": 159,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 133,
    "image": "assets/images/Falcon.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "Falcon Growth Promoter manufactured by Multiplex is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 66,
    "name": "V-Hume Promoter",
    "company": "Vanproz",
    "category": "Plant Growth Promoter",
    "price": 309,
    "originalPrice": 377,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 140,
    "image": "assets/images/V-hume.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "V-Hume Promoter manufactured by Vanproz is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 67,
    "name": "Planofix Promoter",
    "company": "Bayer",
    "category": "Plant Growth Promoter",
    "price": 117,
    "originalPrice": 143,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 147,
    "image": "assets/images/Planofix.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "Planofix Promoter manufactured by Bayer is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 68,
    "name": "Bahaar Promoter",
    "company": "Tata Rallis",
    "category": "Plant Growth Promoter",
    "price": 283,
    "originalPrice": 345,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 154,
    "image": "assets/images/Bahaar.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "Bahaar Promoter manufactured by Tata Rallis is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 69,
    "name": "Quantis Biostimulant",
    "company": "Syngenta",
    "category": "Plant Growth Promoter",
    "price": 120,
    "originalPrice": 146,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 161,
    "image": "assets/images/QuantisBiostimulant.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "Quantis Biostimulant manufactured by Syngenta is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 70,
    "name": "Allure Growth Promoter",
    "company": "Agrinos",
    "category": "Plant Growth Promoter",
    "price": 699,
    "originalPrice": 853,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 168,
    "image": "assets/images/Allure.png",
    "inStock": true,
    "variants": [
      "100 ml",
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Enhances cell division, branching, flowering, and stress tolerance.",
    "dosage": "1 - 1.5 ml per liter of water",
    "type": "Bio-stimulant / Hormonal Growth",
    "description": "Allure Growth Promoter manufactured by Agrinos is an advanced agricultural formula designed for modern high-yield farming. Enhances cell division, branching, flowering, and stress tolerance. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 71,
    "name": "Vibrant Growrich",
    "company": "Vibrant Life",
    "category": "Yield Booster",
    "price": 1000,
    "originalPrice": 1220,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 175,
    "image": "assets/images/VIBRANTGROWRICH.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Vibrant Growrich manufactured by Vibrant Life is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 72,
    "name": "Prime Aavirat",
    "company": "Bioprime",
    "category": "Yield Booster",
    "price": 678,
    "originalPrice": 827,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 182,
    "image": "assets/images/PRIMEAAVIRATGROWTHBOOSTER.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Prime Aavirat manufactured by Bioprime is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 73,
    "name": "Prime Chiron",
    "company": "Bioprime",
    "category": "Yield Booster",
    "price": 270,
    "originalPrice": 329,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 189,
    "image": "assets/images/primechiron.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Prime Chiron manufactured by Bioprime is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 74,
    "name": "Venus Proteinx 50",
    "company": "Venus Agro Chemicals",
    "category": "Yield Booster",
    "price": 200,
    "originalPrice": 244,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 196,
    "image": "assets/images/proteinx.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Venus Proteinx 50 manufactured by Venus Agro Chemicals is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 75,
    "name": "Godrej Double",
    "company": "Godrej Agrovet",
    "category": "Yield Booster",
    "price": 340,
    "originalPrice": 415,
    "discount": "18% off",
    "rating": "4.5",
    "reviewsCount": 203,
    "image": "assets/images/godrejdouble.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Godrej Double manufactured by Godrej Agrovet is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 76,
    "name": "Agroveer (vegetables)",
    "company": "Sethu Farmer Producer",
    "category": "Yield Booster",
    "price": 120,
    "originalPrice": 146,
    "discount": "18% off",
    "rating": "4.6",
    "reviewsCount": 210,
    "image": "assets/images/agroveer.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Agroveer (vegetables) manufactured by Sethu Farmer Producer is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 77,
    "name": "Agroveer (fruits)",
    "company": "Sethu Farmer Producer",
    "category": "Yield Booster",
    "price": 134,
    "originalPrice": 163,
    "discount": "18% off",
    "rating": "4.7",
    "reviewsCount": 217,
    "image": "assets/images/agroveerfruits.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Agroveer (fruits) manufactured by Sethu Farmer Producer is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 78,
    "name": "Bioprime Prime Fast 10",
    "company": "Bioprime",
    "category": "Yield Booster",
    "price": 230,
    "originalPrice": 281,
    "discount": "18% off",
    "rating": "4.8",
    "reviewsCount": 224,
    "image": "assets/images/fast10.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Bioprime Prime Fast 10 manufactured by Bioprime is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 79,
    "name": "Prime Fortisea",
    "company": "Bioprime",
    "category": "Yield Booster",
    "price": 200,
    "originalPrice": 244,
    "discount": "18% off",
    "rating": "4.3",
    "reviewsCount": 51,
    "image": "assets/images/primefortisea.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Prime Fortisea manufactured by Bioprime is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  },
  {
    "id": 80,
    "name": "Geolife Vigore",
    "company": "Geolife Agritech India",
    "category": "Yield Booster",
    "price": 480,
    "originalPrice": 586,
    "discount": "18% off",
    "rating": "4.4",
    "reviewsCount": 58,
    "image": "assets/images/vigore.png",
    "inStock": true,
    "variants": [
      "250 ml",
      "500 ml",
      "1 L"
    ],
    "targetPests": "Maximizes fruit sizing, grain filling, harvest weight, and crop quality.",
    "dosage": "2 ml per liter of water during fruiting/flowering",
    "type": "Yield Enhancer",
    "description": "Geolife Vigore manufactured by Geolife Agritech India is an advanced agricultural formula designed for modern high-yield farming. Maximizes fruit sizing, grain filling, harvest weight, and crop quality. It promotes resilient plant immunity and ensures maximum harvest potential."
  }
];

const AgrifyProducts = {
  getAll: function() {
    return [...AGRIFY_PRODUCTS];
  },
  
  getById: function(id) {
    const numId = parseInt(id, 10);
    return AGRIFY_PRODUCTS.find(p => p.id === numId) || null;
  },
  
  getByCategory: function(category) {
    if (!category || category.toLowerCase() === 'all' || category.toLowerCase() === 'all products') {
      return this.getAll();
    }
    return AGRIFY_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  },
  
  getCategories: function() {
    return [
      'All Products',
      'Insecticide',
      'Fungicide',
      'Herbicide',
      'NPK Fertilizer',
      'Humic Nutrient',
      'Nematicide',
      'Plant Growth Promoter',
      'Yield Booster'
    ];
  },
  
  getCompanies: function() {
    const companies = new Set(AGRIFY_PRODUCTS.map(p => p.company));
    return ['All Brands', ...Array.from(companies).sort()];
  },
  
  search: function(query, category, company) {
    let list = this.getAll();
    if (category && category !== 'All Products') {
      list = list.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (company && company !== 'All Brands') {
      list = list.filter(p => p.company.toLowerCase() === company.toLowerCase());
    }
    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.company.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.targetPests.toLowerCase().includes(q)
      );
    }
    return list;
  },
  
  getFeatured: function(limit) {
    const count = limit || 8;
    return AGRIFY_PRODUCTS.filter((_, i) => i % 8 === 0 || i % 10 === 0).slice(0, count);
  }
};

// Expose to window and Node
if (typeof window !== 'undefined') {
  window.AGRIFY_PRODUCTS = AGRIFY_PRODUCTS;
  window.AgrifyProducts = AgrifyProducts;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AGRIFY_PRODUCTS, AgrifyProducts };
}
