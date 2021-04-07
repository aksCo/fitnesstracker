var path = require("path");
var express = require("express");
const router = express.Router();
// module.exports = (app => {

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;
// });