# Bookstore API

This project is a Book Inventory REST API built with Node.js and Express.
It demonstrates professional project structure, layered architecture, request validation using Joi, proper routing, middleware usage, and correct HTTP status codes.

📁 Project Structure
```
task3/
└── src/
    ├── controllers/     # Business logic
    │   └── bookController.js
    │
    ├── routes/          # Route definitions
    │   └── bookRoutes.js
    │
    ├── middleware/      # Custom & third-party middleware
    │   └── logger.js
    │
    ├── utils/           # Validation schemas
    │   └── validationSchema.js
    │
    ├── app.js           # Express app setup
    └── server.js        # Server entry point
```
## 🛠 Technologies Used
- Node.js
- Express (ES6 Modules)
- Joi (Data validation)
- Morgan (HTTP request logging)
- Postman (API testing)

## 📦 Required Dependencies
```
npm install express joi morgan
```

Optional (development only):
```
npm install --save-dev nodemon
```
## Setup Instructions

Clone the repository

git clone https://github.com/Yeabebe/GDG-Node-track-Yeabsera-Abebe/tree/main/task3

cd task3


Install dependencies
```
npm install
```

Start the server
```
npm start
```

The server runs on:
```
http://localhost:3000
```
## API Endpoints
GET /books
Returns all books.
Status: 200 OK

### GET /books/search
Routing precedence test.
Response:
You are on the search page
Status: 200 OK

### GET /books/:id
Returns a single book by ID.
If found: 200 OK
If not found: 404 Not Found

### POST /books
Creates a new book.
Validation Rules (Joi)
- title: string, minimum 5 characters, required
- author: string, minimum 3 characters, required
- price: number, minimum 0, required

Success Example
```
{
  "title": "Clean Architecture",
  "author": "Robert Martin",
  "price": 45
}
```
Status: 201 Created
Validation Failure Example
```
{
  "title": "JS",
  "author": "Bob",
  "price": 10
}
```
Status: 400 Bad Request
Returns Joi validation error message.

### DELETE /books/:id
Deletes a book by ID.
- If successful: 200 OK
- If not found: 404 Not Found

## Testing (Postman)
All endpoints were tested using Postman against the local server.
Verified cases:
- Successful POST request returns 201 Created
- Validation failure returns 400 Bad Request with Joi message
-  Routing precedence ensures /books/search is not treated as /books/:id

## Server Requirements
- Runs on Port 3000
- Uses ES6 module syntax
- Uses layered architecture
- Applies global middleware (Morgan)
- Uses in-memory data storage

## 👤 Author
Yeabsera Abebe
