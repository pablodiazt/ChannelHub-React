const router = require("express").Router();
const videoRoutes = require("./videos");

// Book routes
router.use("/videos", videoRoutes);

module.exports = router;