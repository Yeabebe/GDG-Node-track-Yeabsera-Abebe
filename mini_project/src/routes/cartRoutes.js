import express from 'express';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem
} from '../controllers/cartController.js';

const router = express.Router();

// GET /cart → view current cart
router.get('/', getCart);

// POST /cart → add item to cart
// body: { productId, quantity }
router.post('/', addToCart);

// PUT /cart → update cart item quantity
// body: { productId, quantity }
router.put('/', updateCartItem);

// DELETE /cart/:productId → remove item from cart
router.delete('/:productId', removeCartItem);

export default router;
