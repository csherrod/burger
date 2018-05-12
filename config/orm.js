var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  create: function(tableInput, cols, vals, cb) {
      console.log(tableInput)
    var queryString = "INSERT INTO " + tableInput + " (" + cols.toString() + ") VALUES ('" + vals[0] + "','" + vals[1] + "');";
    console.log(queryString);
    connection.query(queryString, [vals], function(err, result) {
        console.log(result);
        if (err) throw err;
        cb(result);
    });
  }, //INSERT INTO burgers(burger_name, devoured) VALUES (?, ?)

  update: function(tableInput, cb) {
    var queryString = "UPDATE " + tableInput;
    console.log(queryString);
  }
};

module.exports = orm;
