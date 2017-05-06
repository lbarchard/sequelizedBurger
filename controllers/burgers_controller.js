var express    = require('express'); 

var burgerRouter  = express.Router(); 

var burger  = require("../models/burger.js");

burgerRouter.get("/", function(req, res) {
    burger.notDevoured(function(data) {
        var hbsObject = {
        availableBurgers: data
        };
    
        burger.devoured(function(data) {
            hbsObject.devouredBurgers = data
            res.render("index", hbsObject);
        });
    });
});

burgerRouter.post("/", function(req, res) {
    burger.create(req.body.burger, function() {
        res.redirect("/");
    });
});

burgerRouter.put("/:id", function(req, res) {
    burger.update({
        id: req.params.id
    }, function() {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = burgerRouter;


