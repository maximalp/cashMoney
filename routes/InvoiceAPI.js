var Invoices = require("../models/invoice");

// Includes Routing and Controller for now...

module.exports = function(app) {

  const searchSwitches = {
      clientCompanyNameOrinvoiceId:true,
      issuedDateDesc:true,
      dueDateDesc: true,
      AmountOrStatus: true
    }

  const searchFields = {
      clientCompanyNameOrinvoiceId:'invoiceId',
      issuedDateDesc:'dateOfIssue',
      dueDateDesc: 'dueDate',
      AmountOrStatus: 'lineTotal'
    }
    //
    // const s = {
    //     clientCompanyNameOrinvoiceId: {switch:true, field:'invoiceId'},
    //     issuedDateDesc:{switch:true, field: 'dateOfIssue'},
    //     dueDateDesc: {switch:true, field: 'dueDate'},
    //     AmountOrStatus: {switch:true, field: 'lineTotal'}
    //   }

  //Initial Pull for Invoices----------------------------------
  app.get("/api/pullInvoices", function(req, res) {
      Invoices.find({})
      .sort({dateOfIssue:-1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }),

  // Refactored Sort Function----------------------------------
  app.get("/api/invoice/filter/:command", function(req,res) {
    let command = req.params.command;

    Invoices.find({})
    .sort(searchSwitches[command] ? ({[searchFields[command]]:-1}) : ({[searchFields[command]]:1}))
    .then(dbModel => {
      res.json(dbModel)
      searchSwitches[command] = !searchSwitches[command];
    })
    .catch(err => res.status(422).json(err))
  }),
  //
  // // Sort functions----------------------------------
  // app.get("/api/filter/clientSwitch", function(req, res) {
  //   // (issuedDateDesc)
  //   Invoices.find({})
  //   .sort((searchSwitches.clientCompanyNameOrinvoiceId) ? {invoiceId:-1} : {invoiceId:1})
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  //   searchSwitches.clientCompanyNameOrinvoiceId  = !searchSwitches.clientCompanyNameOrinvoiceId;
  // }),
  //
  // app.get("/api/filter/issuedDateSwitch", function(req, res) {
  //   // (dueDateDesc)
  //   Invoices.find({})
  //   .sort((searchSwitches.issuedDateDesc) ? {dateOfIssue:-1} : {dateOfIssue:1})
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  //   searchSwitches.issuedDateDesc  = !searchSwitches.issuedDateDesc;
  // }),
  //
  // app.get("/api/filter/dueDateSwitch", function(req, res) {
  //   // (AmountOrStatus)
  //   Invoices.find({})
  //   .sort((searchSwitches.dueDateDesc) ? {dueDate:-1} : {dueDate:1})
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  //   searchSwitches.dueDateDesc  = !searchSwitches.dueDateDesc;
  // }),
  //
  // app.get("/api/filter/amountSwitch", function(req, res) {
  //   Invoices.find({})
  //   .sort((searchSwitches.AmountOrStatus) ? {lineTotal:-1} : {lineTotal:1})
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  //   searchSwitches.AmountOrStatus  = !searchSwitches.AmountOrStatus;
  // }),

  // Create new invoice-------------------------------
  app.post('/api/invoices', function(req,res) {
    console.log(req.body);
    const invoiceData = req.body;

    Invoices.create(invoiceData)
      .then(function(doc) {
        console.log(doc);
        res.json(doc);
      })
      .catch(function(err) {
        console.log(err.message)
      });
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
