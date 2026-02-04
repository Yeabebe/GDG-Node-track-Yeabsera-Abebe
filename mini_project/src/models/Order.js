import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: Array,
  total: Number,
  customerInfo: Object,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
