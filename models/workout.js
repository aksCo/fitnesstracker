const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const options = { toJSON: { virtuals: true } };
const workoutDetails = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
        },
        duration: {
            type: Number,
            required: "Enter exercise duration in minutes"
        },
        distance: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        weight: {
            type: Number
        }
    }],
}, options);
workoutDetails.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", workoutDetails);
module.exports = Workout;