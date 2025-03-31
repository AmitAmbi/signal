const express = require("express");
const { getSignals, changeSignal, changeSignalManually, updateTrafficCount } = require("../controllers/signalController");

const router = express.Router();

// ✅ Define Routes Correctly
router.get("/signals", getSignals); // Ensure `getSignals` is imported properly
router.post("/change-signal", changeSignalManually); // Ensure `changeSignalManually` is imported
router.post("/update-traffic", updateTrafficCount); // Ensure `updateTrafficCount` is imported

module.exports = router;
