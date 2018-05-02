var express = require("express");

var router = express.Router();

//Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//Create routes and set up logic within routes where required
// Use 17.catsController as model
router.get("/", function(req, res) {
    burger.all(function)
});

router.post("/api/burger")

burger.update(
    {
      sleepy: req.body.sleepy // need to change
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;