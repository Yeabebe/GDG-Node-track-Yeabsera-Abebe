import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, min: 1 }
});

export default mongoose.model('Cart', cartSchema);
