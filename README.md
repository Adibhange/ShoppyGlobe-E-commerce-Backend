# ShoppyGlobe E-Commerce Backend

ShoppyGlobe is a backend API for an e-commerce platform that enables product management, user authentication, and a protected cart system. This application is built using **Node.js**, **Express**, **JWT**, **bcrypt**, and **Mongoose**.

---

## Features

### 1. **User Authentication**

- **Register**: Users can register with their name, email, and password. Passwords are securely hashed using **bcrypt**.
- **Login**: Users can log in using their email and password. A **JWT token** is issued upon successful login.

### 2. **Product Management**

- Add products with the following details:
  - **Name**: Name of the product.
  - **Price**: Cost of the product.
  - **Description**: Details about the product.
  - **Quantity**: Stock available.
  - **Image**: URL of the product image.

### 3. **Cart Management**

- Add products to the cart.
- Update product quantity in the cart.
- Delete product from cart.
- **Protected Routes**: Cart operations are accessible only to logged-in users (JWT authentication).

---

## Tech Stack

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB & Mongoose**: Database and object modeling.
- **bcrypt**: Password hashing for secure storage.
- **JWT (JSON Web Tokens)**: Authentication and authorization.
- **dotenv**: For managing environment variables.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Adibhange/ShoppyGlobe-E-commerce-Backend.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env File

Create a .env file in the root directory and add the following variables:

```bash
PORT = your-port
MONGO_URL = your-mongodb-url
JWT_SECRET = your-secret-key
```

### 4. Start the Server

```bash
npm run dev
```
