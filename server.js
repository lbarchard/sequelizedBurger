//pretty sure this is done

var express        = require('express');
var methodOverride = require('method-override');
var bodyParser     = require("body-parser");

var port = process.env.PORT || 8080;


var db = require("./models");


var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./routes/all-routes.js");

app.use("/", routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({  }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});