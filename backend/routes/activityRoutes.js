const express = require("express");
const { getActivityLogs } = require("../controllers/activityController");

const router = express.Router();

router.get("/", getActivityLogs);

module.exports = router;
