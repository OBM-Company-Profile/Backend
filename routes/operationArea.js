const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Route to fetch management policies
router.get("/", (req, res) => {
  db.query("SELECT * FROM operation_area", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch operation area" });
    }
    res.json(results);
  });
});

module.exports = router;
