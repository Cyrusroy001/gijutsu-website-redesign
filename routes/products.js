const products = require("express").Router();

products.get("/:product", function(req, res) {
    let pro = req.params.product;
    res.render("pages/products/" + pro);
});

module.exports = products;