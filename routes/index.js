// using router class
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    console.log("Request for HOME page received!");
    res.render("home");
});

router.get("/products", function (req, res) {
    console.log("Request for PRODUCTS page received!");
    res.render("products");
});

router.get("/services", function (req, res) {
    console.log("Request for SERVICES page received!");
    res.render("services");
});

router.get("/training", function (req, res) {
    console.log("Request for TRAINING page received!");
    res.render("training");
});

module.exports = router;