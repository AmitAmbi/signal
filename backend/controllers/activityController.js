const ActivityLog = require("../models/ActivityLog");


const getActivityLogs = async (req, res) => {
  try {
    const logs = await ActivityLog.find().sort({ timestamp: -1 }).limit(10);
    res.json(logs);
  } catch (error) {
    console.error("❌ Error fetching activity logs:", error);
    res.status(500).json({ error: "Error fetching activity logs" });
  }
};

module.exports = { getActivityLogs };
