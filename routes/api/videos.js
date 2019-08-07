const router = require("express").Router();
// const videosController = require("../../controllers/videosController");
const videosController = require("../../controlers/videosController");


// Matches with "/api/videos"
router.route("/")
  .get(videosController.findAll)
  .post(videosController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(videosController.findById)
  .put(videosController.update)
  .delete(videosController.remove);

module.exports = router;