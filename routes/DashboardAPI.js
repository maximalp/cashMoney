// var Dashboard = require("../models/dashboard");

// Includes Routing and Controller for now...

module.exports = function(app) {
  app.get("/about", function(req, res) {
    // Dashboard.find({})
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
    // console.log("Hi there test")
  })

  app.get("/make", function(req,res) {
    var data = {
      title: "razer",
      author:"razerauthor",
      synopsis: "hi there"
    };

    // Dashboard.create(data)
    //   .then(function(doc) {
    //     console.log(doc);
    //     res.json(doc);
    //   })
    //   .catch(function(err) {
    //     console.log(err.message);
    //   })
  })
}
