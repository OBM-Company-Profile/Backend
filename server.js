const express = require("express");
const app = express();
const port = process.env.PORT || 3307; // Use assigned port or fallback to 3307 for local dev

const cors = require("cors");
app.use(cors());

// Import the routes
const connectRoute = require("./routes/testConnection");
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
app.use("/", connectRoute);
app.use("/api/images", imageRoutes); // Routes for images
app.use("/api/image_carousel", imageRoutes);
app.use("/api/management_policy", managementPolicyRoutes); // Routes for management policies
app.use("/api/company_value", companyValueRoutes); // Routes for company values
app.use("/api/operation_area", operationAreaRoutes); // Routes for operation area
app.use("/api/contact_person", contactPersonRoutes); // Routes for contact person
app.use("/api/proyek", proyekRoutes);
app.use("/api/mobil_list", mobilRoutes);
app.use("/api/kapal_list", kapalRoutes);
app.use("/api/kantor_list", kantorRoutes);
app.use("/api/milestone", milestoneRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
