var connection  = require("./connection.js");

var burgers = {
    selectByDevoured: function(devoured, callback) {
        var queryString = "SELECT * FROM burgers where devoured = ?;";
        connection.query(queryString, devoured, function(err, result) {
        if (err) {
            throw err;
        }
        callback(result);
    });
    },
    create: function(burger, callback) {
        var queryString = "INSERT INTO burgers (burger_name) values (?);";
        connection.query(queryString, burger, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });    
    },


    update: function(id, callback) {
        var queryString = "UPDATE burgers set devoured = 1 where id = ?;";
        connection.query(queryString, id.id, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}

module.exports = burgers;
