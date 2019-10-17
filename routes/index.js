const path = require("path");
const router = require("express").Router();
const reactapp = require("../client/src");

// serve react app on '/'
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

//router.use('/', reactapp);

module.exports = router;
