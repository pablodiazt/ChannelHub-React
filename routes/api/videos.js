const router = require("express").Router();

const videosController = require("../../controlers/videosController");

console.log("------>>>>on routes api videos")
// Matches with "/api/videos"
router.route("/videos")
  .get(videosController.findAll)
  .post(videosController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(videosController.findById)
  .put(videosController.update)
  .delete(videosController.remove);

module.exports = router;