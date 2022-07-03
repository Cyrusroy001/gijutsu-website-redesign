// using router class
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    console.log("Request for HOME page received!");
    res.render("home");
});

router.get("/services", function (req, res) {
    console.log("Request for SERVICES page received!");
    res.render("services");
});

router.get("/about", function (req, res) {
    console.log("Request for ABOUT page received!");
    res.render("about");
});

module.exports = router;