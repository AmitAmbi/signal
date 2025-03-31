const mongoose = require('mongoose');

const SignalSchema = new mongoose.Schema({
  activeSide: { type: String, required: true, enum: ['North', 'South', 'East', 'West'] },
  vehicles: {
    North: { type: Number, default: 0 },
    South: { type: Number, default: 0 },
    East: { type: Number, default: 0 },
    West: { type: Number, default: 0 }
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Signal', SignalSchema);
