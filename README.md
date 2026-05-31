# 👟 The Shoee Storiee - Full-Stack E-Commerce Application

A premium, full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application designed for a seamless shoe shopping experience. Features a customer storefront with real-time cart synchronization, user authentication, and a complete admin management console.

---

## 📸 Project Showcase

![The Shoee Storiee Homepage](assets/homepage.png)

---

## 🚀 Key Features

### 🛍️ Client Storefront (`/frontend`)
*   **Dynamic Landing Page:** Clean hero layout featuring new collection announcements and popular categories.
*   **Structured Catalog Navigation:** Dedicated pages for categories including **Men**, **Women**, **Boys**, and **Girls** with brand filters (Nike, Adidas, etc.).
*   **Authentication & Profile Management:** Safe Login and Signup flow using JSON Web Token (JWT) storage.
*   **Persistent Shopping Cart:** Live cart sync where items are linked directly to the user's account in MongoDB.
*   **Interactive Search:** Real-time search functionality across the shoe inventory.

### ⚙️ Admin Console (`/admin`)
*   **Interactive Dashboard:** Streamlined portal to manage product catalogs.
*   **Add Product Form:** Rich form interface to submit product details including:
    *   Dynamic image uploads via file selector.
    *   Product metadata (Name, Description, Brand, Category, Sizes, Old & New Prices).
*   **Product List & Deletion:** View current products in the catalog and delete items in one click.

### 🖥️ API Backend (`/backend`)
*   **Robust Express Server:** High-performance RESTful API structure.
*   **Database Connectivity:** Integration with MongoDB for storing products, user credentials, and cart statuses.
*   **Security Middleware:** Custom verification logic protecting authenticated cart requests using JWT.
*   **Image Storage Engine:** Local disk storage integration using Multer to handle high-resolution image uploads.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend & Admin** | React.js, React Router DOM, Custom Vanilla CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Auth & Files** | JWT (jsonwebtoken), Multer, CORS, dotenv |

---

## 📁 Repository Structure

```text
Full_Stack_Ecommerce/
├── assets/                  # Public assets & screenshots
│   └── homepage.png         # Storefront landing page screenshot
├── admin/                   # React-based admin management dashboard
│   ├── public/
│   └── src/
├── backend/                 # Node/Express API with mongoose models
│   ├── config/              # DB connection config
│   ├── models/              # MongoDB Schemas (Product, User)
│   ├── upload/              # Local storage folder for product images
│   └── index.js             # Entrypoint & API routing
└── frontend/                # React-based customer storefront
    ├── public/
    └── src/
```

---

## 🏁 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (v16.x or higher)
*   [MongoDB](https://www.mongodb.com/) (running locally on port `27017` or configured as a replica cluster)

### Setup Instructions

#### 1. Start the Database
Ensure your MongoDB instance/cluster is active and listening on port `27017` or update the connection URL in `backend/config/dbconnection.js`.

#### 2. Start the Backend API
Navigate to the backend directory, install dependencies, and start the node server:
```bash
cd backend
npm install
npm start
```
*The backend server will run at **`http://localhost:4000`**.*

#### 3. Start the Admin Console
Navigate to the admin folder, install dependencies, and launch the portal:
```bash
cd admin
npm install
$env:PORT=3001; npm start   # Windows PowerShell
# OR
PORT=3001 npm start          # macOS / Linux
```
*The admin interface will be available at **`http://localhost:3001`**.*

#### 4. Start the Storefront Application
Navigate to the frontend folder, install dependencies, and launch the customer application:
```bash
cd frontend
npm install
$env:PORT=3002; npm start   # Windows PowerShell
# OR
PORT=3002 npm start          # macOS / Linux
```
*The main customer storefront will open at **`http://localhost:3002`**.*

---

## 📡 API Endpoints Overview

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **POST** | `/signup` | User registration & returns auth token | No |
| **POST** | `/login` | User login & returns auth token | No |
| **POST** | `/addproduct` | Save a new shoe product (Admin only) | No |
| **POST** | `/removeproduct` | Remove a product by ID (Admin only) | No |
| **GET** | `/allproducts` | Retrieve all items | No |
| **GET** | `/newcollections` | Fetch the latest 8 added items | No |
| **GET** | `/popularinwomen` | Fetch popular items in category 'women' | No |
| **POST** | `/addtocart` | Add a product item to user's cart | **Yes** (JWT) |
| **POST** | `/removefromcart` | Decrease an item count in user's cart | **Yes** (JWT) |
| **POST** | `/getcart` | Retrieve the active user's cart structure | **Yes** (JWT) |
| **POST** | `/upload` | Upload a product image to storage | No |
