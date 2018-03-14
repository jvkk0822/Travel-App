
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the comments
  app.get("/api/comments", function(req, res) {
    var query = {};
   // find all of them
    db.Comment.findAll({
      where: query, 
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // Get rotue to get all comments on that city
  app.get("/api/comments/:city", function(req, res) {
   
    db.Comment.findAll({
      where: { 
        city: req.params.city
      },
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // POST route for saving a new comment
  app.post("/api/comments", function(req, res) {
   
    db.Comment.create({ // all the info of the new comment
      person: req.body.person,
      city: req.body.city,
      country: req.body.country,
      body: req.body.body
    }).then(function(dbComment) {
     // res.json(dbComment);
       res.json(dbComment.insertId);
    })// if an error happends catch it
    .catch(function(err) { // then throw some json
      res.json(err);
    });
  });

};
