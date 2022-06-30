const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", routes);

app.listen(process.env.PORT || 3000, function() {
    console.log("Server up and running on port 3000");
});