const mongoose = require('mongoose');

const duesSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  semester: {
    type: String,
    enum: ['first', 'second'],
    unique: true,
  },
});

const Dues = mongoose.model('Dues', duesSchema);

module.exports = Dues;
