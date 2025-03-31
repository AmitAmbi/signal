const mongoose = require('mongoose');

const ActivityLogSchema = new mongoose.Schema({
  activeSide: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ActivityLog', ActivityLogSchema);
