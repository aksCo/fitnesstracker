const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiroutes = require("./routes/apiroutes.js");
const htmlroutes = require("./routes/htmlroutes.js");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(htmlroutes);
//htmlroutes(app);
app.use(apiroutes);
//apiroutes(app);

app.listen(PORT, () => {
    console.log(`APP runs on PORT ${PORT}!`);
});