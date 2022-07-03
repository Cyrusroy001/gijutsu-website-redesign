const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const products = require("./routes/products");
const routes = require("./routes/index");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", routes);
app.use("/products", products);

app.listen(process.env.PORT || 3000, function() {
    console.log("Server up and running on port 3000");
});