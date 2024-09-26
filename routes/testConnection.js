const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Route to fetch company values
router.get("/", (req, res) => {
  res.status(200).json({
    message: "API v1 ready to use",
    status: "Success",
  });
});

module.exports = router;
