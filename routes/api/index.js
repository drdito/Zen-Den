const router = require("express").Router();
const blogRoutes = require("./BlogPosts");

// Book routes
router.use("/BlogPosts", blogRoutes);

module.exports = router;
