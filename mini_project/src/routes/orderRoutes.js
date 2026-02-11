import express from 'express';
import {
  createOrder,
  getOrders,
  getOrderById
} from '../controllers/orderController.js';

const router = express.Router();

// POST /orders → create order from cart
router.post('/', createOrder);

// GET /orders → list all orders
router.get('/', getOrders);

// GET /orders/:id → get order details
router.get('/:id', getOrderById);

export default router;
