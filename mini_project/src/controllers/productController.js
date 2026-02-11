import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  let filter = {};
  if (category) filter.category = category;
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = minPrice;
    if (maxPrice) filter.price.$lte = maxPrice;
  }

  const products = await Product.find(filter);
  res.json(products);
};

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};
