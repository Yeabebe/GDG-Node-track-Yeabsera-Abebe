# 🛒 E-commerce Backend API

A simple E-commerce Backend REST API built with Node.js, Express, and MongoDB Atlas.
This project demonstrates REST principles, CRUD operations, layered architecture (MVC), and database integration using Mongoose.

## 📌 Project Overview

The API allows users to:
- View and manage products
- Add products to a cart
- Place orders from the cart
- Validate data and handle errors properly

All interactions are done via JSON APIs and tested using Postman.

## 🧱 Project Structure
```
ecommerce-backend/
│── .env
│── package.json
│── README.md
└── src/
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── Product.js
    │   ├── Cart.js
    │   └── Order.js
    ├── controllers/
    │   ├── productController.js
    │   ├── cartController.js
    │   └── orderController.js
    ├── routes/
    │   ├── productRoutes.js
    │   ├── cartRoutes.js
    │   └── orderRoutes.js
    ├── app.js
    └── server.js
```
## ⚙️ Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Nodemon
- Postman (for testing)

## 🚀 Installation & Setup
1️. Clone the repository
```
git clone <your-repo-url>
cd ecommerce-backend
```
2. Install dependencies
```
npm install
```
3️. Create .env file (root folder)
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce
PORT=3000
```
4️. Run the server
```
npm run dev
```


Server will start at:
```
http://localhost:3000
```

## 📈 Future Improvements
- Authentication (JWT)
- User accounts
- Payment integration
- Pagination
- Admin dashboard

## 👨‍💻 Author

Yeabsera Abebe

## 📄 License

This project is for educational purposes.
