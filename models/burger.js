
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  notDevoured: function(cb) {
    orm.selectByDevoured(0, function(res) {
      cb(res);
    });
  },
  devoured: function(cb) {
    orm.selectByDevoured(1, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burger, cb) {
    orm.create(burger, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update(id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
