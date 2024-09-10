const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Route to fetch management policies
router.get("/", (req, res) => {
  db.query("SELECT * FROM contact_person", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch contact person" });
    }
    res.json(results);
  });
});

module.exports = router;
