const express = require("express");
const router = express.Router();
const db = require("../models");
// module.exports = (app) => {
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.status(400);
    });
});
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne({
        _id: req.params.id,
    }, {
        $push: {
            exercises: req.body,
        },
    }).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.status(400);
    });
});
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.status(400);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.status(400);
    });
});
// };
module.exports = router;