# 🌱 Agrify — Modern Agricultural Solutions & Smart Farming Platform

[![Version](https://img.shields.io/badge/version-2.0.0-emerald.svg)](package.json)
[![Platform](https://img.shields.io/badge/platform-Web-forestgreen.svg)](index.html)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](package.json)

Welcome to **Agrify**, an end-to-end agricultural eCommerce and crop advisory platform designed to empower modern farmers across India. Agrify bridges the gap between traditional cultivation practices and modern biotechnology, providing verified crop protection formulations, specialty plant nutrition, interactive disease diagnostics, and doorstep rural delivery.

---

## 🌟 Key Highlights & Features

### 🛒 1. Comprehensive Agricultural Marketplace
- **80+ Verified Products** across 8 core agricultural categories:
  - **Insecticides**: Coragen, Phoskill, Exponus, Alika, Jump, Solomon, Rogor, Actara, Ampligo, etc.
  - **Fungicides**: Saaf, Indofil M-45, Nativo, Bavistin, Antracol, Ridomil Gold, Amistar Top, Blue Copper, etc.
  - **Herbicides**: Roundup, Excel Mera 71, Nominee Gold, Atrazine, Glyphosate, etc.
  - **NPK Fertilizers**: Balanced water-soluble grades (19:19:19, 10:26:26, 00:00:50, etc.).
  - **Humic Nutrients & Biostimulants**: Jivras, Seahume, Actosol Calcium, BCX Biohumic, Zeal Humic, etc.
  - **Nematicides**: Specialized root protection against cyst and root-knot nematodes.
  - **Plant Growth Promoters**: Cell-division enhancers and flowering promoters.
  - **Yield Boosters**: Fruit sizing, harvest weight boosters, and foliar spray nutrients.
- **Instant Search & Multi-Level Filtering**: Search in real-time by crop, pest, brand, or active chemical. Filter with interactive category pills and manufacturer dropdowns.
- **Quick-View Modal**: Instant previews of dosage, active ingredients, and pack size selections directly from any page.

### 🩺 2. Interactive Crop Doctor & Farming Guide
- Complete crop cultivation guidelines for major agricultural cash crops:
  - **Banana (*Vazhai*)** — Sucker planting, vegetative growth, bunch shooting, Sigatoka leaf spot, and Panama wilt remedies.
  - **Turmeric (*Manjal*)** — Rhizome treatment, tillering, earthing up, and rhizome rot solutions.
  - **Tomato (*Thakkali*)** — Trellising, fruit setting, early/late blight, and fruit borer controls.
  - **Rice / Paddy (*Nel*)** — Puddling, tillering, stem borer controls, and blast prevention.
  - **Cotton (*Paruthi*)** — Square formation, bollworm defense, and whitefly management.
  - **Cauliflower & Cabbage** — Curd sizing, black rot treatment, and diamondback moth controls.

### 🛍️ 3. Persistent Shopping Cart & Streamlined Checkout
- Fully reactive cart powered by `localStorage`.
- Real-time badge counter on navigation across all subpages.
- Interactive coupon code engine supporting:
  - `AGRI20` — 20% off entire order
  - `WELCOME10` — 10% welcome discount
  - `FARMER50` — ₹50 flat order deduction
- Free shipping threshold for orders above ₹500.
- Multi-payment support: UPI / QR Pay (Google Pay, PhonePe, Paytm), Cash on Delivery (COD), Cards, and Net Banking.
- Generates downloadable order receipts with tracking IDs.

### 👤 4. Farmer Profile & Order History
- Member dashboard displaying recent order history, delivery timeline, and order status.
- Farm profiling (acreage, soil classification, primary crops) to receive customized seasonal guidance.
- Direct member helpline connection.

### ⚡ 5. Decoupled Backend with Graceful Offline Fallback
- Production-ready Node.js, Express, MongoDB, and JWT authentication.
- Smart client fallback: if the backend server is offline, the client seamlessly handles authentication and cart operations locally for smooth testing and demonstration without disruption.

---

## 📁 Project Architecture & Directory Structure

```text
Agrify/
├── index.html                     # Flagship modern storefront landing page
├── package.json                   # Project metadata, dependencies, and npm scripts
├── README.md                      # Comprehensive project documentation
├── .gitignore                     # Git ignore rules for node_modules and temp files
│
├── assets/                        # Static assets and modular source code
│   ├── css/                       # Modular CSS design system
│   │   ├── main.css               # Core design tokens, global reset, navbar, footer, toast & modals
│   │   ├── store.css              # Marketplace catalog, filter pills, and product card grid
│   │   ├── product-details.css    # Dynamic product detail layout, specifications, and tabs
│   │   ├── farming-guide.css      # Crop doctor layout, growth timelines, and diagnostic cards
│   │   ├── checkout.css           # Cart summary, coupon inputs, and checkout forms
│   │   └── auth.css               # Login, signup, and farmer profile dashboard
│   ├── js/                        # Modular frontend JavaScript controllers
│   │   ├── products-data.js       # Master dataset of 80 verified agricultural products and query API
│   │   ├── cart.js                # Persistent shopping cart state, coupons, and order processing
│   │   ├── main.js                # Global header behavior, active link indicator, toasts, and quick view
│   │   ├── store.js               # Search debouncing, category pills, brand filter, and pagination
│   │   ├── product-details.js     # Dynamic product renderer, pack size selector, and related items
│   │   ├── farming-guide.js       # Crop tab switcher, search filter, and anchor linking
│   │   ├── checkout.js            # Checkout form validation, payment toggles, and receipt generator
│   │   └── auth.js                # JWT handling, API authentication, and profile loader
│   └── images/                    # Product imagery, logos, and crop photography
│
├── pages/                         # Core application pages
│   ├── store.html                 # Complete 80-product agricultural catalog
│   ├── product-details.html       # Dynamic product detail view with dosage directions
│   ├── farming-guide.html         # Interactive crop doctor and farming handbook
│   ├── checkout.html              # Shopping basket, coupon application, and shipping checkout
│   ├── about.html                 # Company mission, story, and leadership team
│   ├── contact.html               # Contact form, farmer helpline numbers, and office locations
│   ├── login.html                 # Farmer account sign-in
│   ├── signup.html                # Farmer registration
│   └── profile.html               # User dashboard and order history
│
└── server/                        # Backend REST API
    ├── index.js                   # Express, MongoDB, bcrypt, JWT authentication server
    └── .env.example               # Environment variable configuration template
```

---

## 🚀 Getting Started & Local Setup

### Prerequisites
- Modern web browser (Chrome, Edge, Firefox, Safari)
- [Node.js](https://nodejs.org/) (v16+ recommended)
- *(Optional)* [MongoDB](https://www.mongodb.com/) (running locally or via MongoDB Atlas)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Sanjay1266/Agrify.git
cd Agrify
npm install
```

### 2. Configure Environment Variables
Copy the sample environment file in `server/`:
```bash
cp server/.env.example server/.env
```
Configure your MongoDB URI and JWT secret in `server/.env`:
```env
PORT=3001
MONGO_URI=mongodb://127.0.0.1:27017/agrify
JWT_SECRET=agrify_super_secret_production_key_2026
```

### 3. Launching the Backend Server
Start the Express API server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```
The server will start listening on `http://localhost:3001`.

### 4. Viewing the Application
You can open `index.html` directly in any browser, or serve it using any HTTP server:
```bash
npx serve .
# or with Python:
python -m http.server 8080
```
Open `http://localhost:8080` in your web browser.

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Health check endpoint | No |
| `POST` | `/register` | Register new farmer account | No |
| `POST` | `/login` | Authenticate user and receive JWT token | No |
| `GET` | `/profile` | Retrieve logged-in user profile | Yes (`Bearer <token>`) |

---

## 👥 Core Leadership & Agronomy Team

- **Shri Nanthana R P** — Head of R&D & Bio-stimulants
- **Sanjay Sundaram** — Head of Product Development & Agricultural Engineering
- **Elakiya** — Agricultural Specialist & Integrated Pest Management

---

## 📄 License
This project is licensed under the ISC License.
