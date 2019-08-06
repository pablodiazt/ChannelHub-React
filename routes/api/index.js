const router = require("express").Router();
const bookRoutes = require("./videos");

// Book routes
router.use("/videos", bookRoutes);

module.exports = router;
