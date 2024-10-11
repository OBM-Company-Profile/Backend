const express = require("express");
const app = express();
const port = process.env.PORT || 3306; // Use .env or fallback to 3306 for local dev
const cors = require("cors");

require("dotenv").config(); // Load environment variables

// CORS options
const corsOptions = {
  origin: "https://orelabahari.co.id", // Only allow this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow credentials if needed
  optionsSuccessStatus: 204, // For legacy browser support
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Import the MySQL database connection
const db = require("./db/connection"); // Assuming 'connection.js' is in the same folder

// Import the routes
const imageRoutes = require("./routes/images");
const managementPolicyRoutes = require("./routes/managementPolicy");
const companyValueRoutes = require("./routes/companyValue");
const operationAreaRoutes = require("./routes/operationArea");
const contactPersonRoutes = require("./routes/contactPerson");
const proyekRoutes = require("./routes/proyek");
const mobilRoutes = require("./routes/fasilitasMobil");
const kapalRoutes = require("./routes/fasilitasKapal");
const kantorRoutes = require("./routes/fasilitasKantor");
const milestoneRoutes = require("./routes/milestone");

// Use the routes with specific base paths
app.use("/api/images", imageRoutes); // Routes for images
app.use("/api/image_carousel", imageRoutes); // Image carousel routes
app.use("/api/management_policy", managementPolicyRoutes); // Routes for management policies
app.use("/api/company_value", companyValueRoutes); // Routes for company values
app.use("/api/operation_area", operationAreaRoutes); // Routes for operation areas
app.use("/api/contact_person", contactPersonRoutes); // Routes for contact person
app.use("/api/proyek", proyekRoutes);
app.use("/api/mobil_list", mobilRoutes);
app.use("/api/kapal_list", kapalRoutes);
app.use("/api/kantor_list", kantorRoutes);
app.use("/api/milestone", milestoneRoutes);

// Test Database Connection Route
app.get("/test-db", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, result) => {
    if (err) {
      return res.status(500).send("Database query failed.");
    }
    res.send(`Database connection works! Result: ${result[0].result}`);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
