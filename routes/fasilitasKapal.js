const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Route to fetch company values
router.get("/", (req, res) => {
  db.query("SELECT * FROM kapal_list", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch car list" });
    }
    res.json(results);
  });
});

module.exports = router;
