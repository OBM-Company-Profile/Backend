const express = require("express");
const app = express();
const port = 3307; // Your server port

const cors = require("cors");
app.use(cors());

// Import the routes
const imageRoutes = require("./routes/images");
const managementPolicyRoutes = require("./routes/managementPolicy");
const companyValueRoutes = require("./routes/companyValue");

// Use the routes with specific base paths
app.use("/api/images", imageRoutes); // Routes for images
app.use("/api/image_carousel", imageRoutes);
app.use("/api/management_policy", managementPolicyRoutes); // Routes for management policies
app.use("/api/company_value", companyValueRoutes); // Routes for company values

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
