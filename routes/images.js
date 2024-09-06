const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Route to fetch images by category
router.get("/", (req, res) => {
  const category = req.query.category;

  db.query(
    "SELECT * FROM images WHERE category = ?",
    [category],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch images" });
      }
      res.json(results);
    }
  );
});

module.exports = router;
