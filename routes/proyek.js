const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Route to fetch combined project and image data
router.get("/", (req, res) => {
  const projectsQuery = "SELECT * FROM portofolio";
  const imagesQuery = 'SELECT * FROM images WHERE category = "porto_proyek"';

  db.query(projectsQuery, (err, projects) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch project data" });
    }

    db.query(imagesQuery, (err, images) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch image data" });
      }

      // Combine projects with their corresponding images
      const combinedProjects = projects.map((project) => {
        const image = images.find((img) => img.id === project.id);
        return {
          ...project,
          imageSrc: image ? image.imageSrc : "",
          altImage: image ? image.altImage : "",
        };
      });

      res.json(combinedProjects);
    });
  });
});

module.exports = router;
