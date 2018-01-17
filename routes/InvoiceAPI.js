var Invoices = require("../models/invoice");

// Includes Routing and Controller for now...

module.exports = function(app) {
  app.get("/about", function(req, res) {
    Invoices.find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    console.log("Hi there test")
  }),

  app.post('/api/invoices', function(req,res) {
    console.log(req.body);
    // Invoices.create(req.body)
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  }),

  app.get("/make", function(req,res) {
    var data = {
      name:"Sam",
      phoneNumber:"1234",
      street:"1515 hillstar st",
      city:"vienna",
      USstate:"md",
      zip:"22132",
      clientFirstName: "Lionel",
      clientLastName: "Messi",
      clientCompanyName: "cashmoney",
      clientStreetAddress: "950 n glebe rd",
      clientCity: "barcelona",
      clientState: "va",
      clientZip: "22032",
      amountDue: "1000",
      lineDescription: "food",
      lineRate: "100",
      lineQty: "10",
      lineTotal: "1000"
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
