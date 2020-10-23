const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    amount: {
      type: Number,
      required: true,
    },
    semester: {
      type: String,
      enum: ['first', 'second'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
