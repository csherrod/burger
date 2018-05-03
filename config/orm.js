var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  create: function(tableInput, cb) {
      console.log(tableInput)
    var queryString = "INSERT INTO " + tableInput;
    connection.query(queryString, function(err, result) {
        console.log(result);
    });

  },

  update: function(tableInput, cb) {
    var queryString = "UPDATE " + tableInput;
    console.log(queryString);
  }
};

module.exports = orm;
