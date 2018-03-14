// Requiring our models
var db = require("../models");


module.exports = function(app) { // these routes currently do not work

  // GET route for getting all info for all countries
 app.get("/api/info", function(req, res) {
    var query = {};
   // find all of them
    db.Country.findAll({
      where: query, 
    }).then(function(dbCountry) {
      res.json(dbCountry);
    });
  });


  // Get rotue to get info on one country
  app.get("/api/info/:list_geopoliticalarea", function(req, res) {
   
    db.Country.findOne({
      where: { 
        list_geopoliticalarea: req.params.list_geopoliticalarea
      },
    }).then(function(dbCountry) {
      res.json(dbCountry);
    });
  });



};
