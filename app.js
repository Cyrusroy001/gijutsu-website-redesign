const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const products = require("./routes/products");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use("/products", products);

app.get("/", function (req, res) {
    console.log("Request for HOME page received!");
    res.render("home");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server up and running on port 3000");
});