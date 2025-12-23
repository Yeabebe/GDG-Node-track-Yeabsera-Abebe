import { bookSchema } from '../utils/validationSchema.js';

let books = [];

// GET /books
export const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// GET /books/search
export const searchBooks = (req, res) => {
  res.status(200).send('You are on the search page');
};

// GET /books/:id
export const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
};

// POST /books
export const createBook = (req, res) => {
  const { error } = bookSchema.validate(req.body);

  // Joi validation BEFORE business logic
  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  const newBook = {
    id: books.length + 1,
    ...req.body
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

// DELETE /books/:id
export const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(index, 1);
  res.status(200).json({ message: 'Book deleted successfully' });
};
