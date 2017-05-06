var express    = require('express'); 

var burgerRouter  = express.Router(); 

var db = require("../models");

burgerRouter.get("/", function(req, res) {
//*********** */
    db.Burger.findAll({
        where: {
        devoured: false,
        }
    }).then(function(dbAvailableBurgers) {
        var hbsObject = {
            availableBurgers: dbAvailableBurgers
        };
        db.Burger.findAll({
            where: {
                devoured: true,
            }
        }).then(function(dbDevouredBurgers) {
            hbsObject.devouredBurgers = dbDevouredBurgers
            res.render("index", hbsObject);
        });
    });
});

burgerRouter.post("/", function(req, res) {
    // console.log(req.body)
    db.Burger.create(req.body).then(function(dbPost) {
        res.redirect("/");
    });
});


burgerRouter.put("/:id", function(req, res) {
    db.Burger.update({
            devoured: true
        },
        {
            where: 
            {
            id: req.body.id
            }
    }).then(function(dbPost) {
            res.redirect("/");
        })
});




// Export routes for server.js to use.
module.exports = burgerRouter;


