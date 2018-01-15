var Invoices = require("../models/invoice");

// Includes Routing and Controller for now...

module.exports = function(app) {
  app.get("/about", function(req, res) {
    Invoices.find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    console.log("Hi there test")
  })

  app.get("/make", function(req,res) {
    var data = {
      title: "razer",
      author:"razerauthor",
      synopsis: "hi there"
    };

    Invoices.create(data)
      .then(function(doc) {
        console.log(doc);
        res.json(doc);
      })
      .catch(function(err) {
        console.log(err.message);
      })
  })
}

// // Matches with "/api/invoice"
// router.route("/")
//   .get(invoiceController.findAll)
//   .post(invoiceController.create);
//
// // Matches with "/api/invoice/:id"
// router
//   .route("/:id")
//   .get(invoiceController.findById)
//   .put(invoiceController.update)
//   .delete(invoiceController.remove);
//
// module.exports = router;
