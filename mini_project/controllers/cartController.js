import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

/**
 * GET /cart
 * View current cart
 */
export const getCart = async (req, res) => {
  const cartItems = await Cart.find().populate('productId');
  res.status(200).json(cartItems);
};

/**
 * POST /cart
 * Add item to cart
 * body: { productId, quantity }
 */
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity || quantity <= 0) {
    return res.status(400).json({ message: 'Invalid productId or quantity' });
  }

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  if (product.stock < quantity) {
    return res.status(400).json({ message: 'Insufficient stock' });
  }

  const existingItem = await Cart.findOne({ productId });

  if (existingItem) {
    existingItem.quantity += quantity;
    await existingItem.save();
    return res.status(200).json(existingItem);
  }

  const cartItem = await Cart.create({ productId, quantity });
  res.status(201).json(cartItem);
};

/**
 * PUT /cart
 * Update cart item quantity
 * body: { productId, quantity }
 */
export const updateCartItem = async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || quantity <= 0) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const cartItem = await Cart.findOne({ productId });
  if (!cartItem) {
    return res.status(404).json({ message: 'Cart item not found' });
  }

  const product = await Product.findById(productId);
  if (product.stock < quantity) {
    return res.status(400).json({ message: 'Insufficient stock' });
  }

  cartItem.quantity = quantity;
  await cartItem.save();

  res.status(200).json(cartItem);
};

/**
 * DELETE /cart/:productId
 * Remove item from cart
 */
export const removeCartItem = async (req, res) => {
  const { productId } = req.params;

  const deletedItem = await Cart.findOneAndDelete({ productId });

  if (!deletedItem) {
    return res.status(404).json({ message: 'Cart item not found' });
  }

  res.status(200).json({ message: 'Item removed from cart' });
};
