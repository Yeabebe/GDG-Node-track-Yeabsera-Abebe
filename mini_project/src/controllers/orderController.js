import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

/**
 * POST /orders
 * Create order from cart
 */
export const createOrder = async (req, res) => {
  const cartItems = await Cart.find().populate('productId');

  if (cartItems.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  let total = 0;
  const orderItems = [];

  for (const item of cartItems) {
    const product = item.productId;

    if (product.stock < item.quantity) {
      return res.status(400).json({
        message: `Insufficient stock for ${product.name}`
      });
    }

    product.stock -= item.quantity;
    await product.save();

    total += product.price * item.quantity;

    orderItems.push({
      productId: product._id,
      name: product.name,
      quantity: item.quantity,
      price: product.price
    });
  }

  const order = await Order.create({
    items: orderItems,
    total,
    customerInfo: req.body.customerInfo || {}
  });

  await Cart.deleteMany(); // clear cart

  res.status(201).json({
    message: 'Order placed successfully',
    order
  });
};

/**
 * GET /orders
 * List all orders
 */
export const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
};

/**
 * GET /orders/:id
 * View order details
 */
export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.status(200).json(order);
};
