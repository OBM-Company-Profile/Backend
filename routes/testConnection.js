const express = require("express");
const router = express.Router();

// Test route to check server functionality
router.get("/", (req, res) => {
  res.send("API is running!");
});

module.exports = router;
