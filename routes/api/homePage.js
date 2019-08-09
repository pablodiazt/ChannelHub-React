const router = require("express").Router();
const homePage = require("../../client/src");

console.log("------>>>>on routes api homePage")

router.use("/", homePage);

// Matches with "/api/"
// router.route("/")
//     .get(videosController.findAll)
//     .post(videosController.create);

// Video routes
// router.use("/videos", videoRoutes);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(videosController.findById)
//   .put(videosController.update)
//   .delete(videosController.remove);

module.exports = router;