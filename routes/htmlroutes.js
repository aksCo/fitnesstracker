var path = require("path");
var express = require("express");
module.exports = (app => {
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/stats.html"));

    });
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/exercise.html"));
    });
});