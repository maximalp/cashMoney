var Invoices = require("../models/invoice");
var Clients = require("../models/client");

// Includes Routing and Controller for now...

module.exports = function(app) {

  // const filterCommands = {
  //   searchSwitches: {
  //       clientCompanyNameOrinvoiceId:true,
  //       issuedDateDesc:true,
  //       dueDateDesc: true,
  //       AmountOrStatus: true
  //     },
  //   searchFields: {
  //       clientCompanyNameOrinvoiceId:'invoiceId',
  //       issuedDateDesc:'dateOfIssue',
  //       dueDateDesc: 'dueDate',
  //       AmountOrStatus: 'lineTotal'
  //     }
  // }

  const filterCommands = {
        clientCompanyNameOrinvoiceId:{switch:true, field:'invoiceId'},
        issuedDateDesc:{switch:true, field:'dateOfIssue'},
        dueDateDesc: {switch:true, field:'dueDate'},
        AmountOrStatus: {switch:true, field:'lineTotal'}
  }

  app.get("/api/pullInvoicesSimple", function(req, res) {
      Invoices.find({})
      .sort({dateOfIssue:-1})
      .then(dbModelAll => {

        res.json(dbModelAll)

      })
      .catch(err => res.status(422).json(err));
  }),


  //Initial Pull for Invoices----------------------------------
  app.get("/api/pullInvoices", function(req, res) {
      Invoices.find({})
      .sort({dateOfIssue:-1})
      .then(dbModelAll => {
        Invoices.find({favorite:true})
        .then(dbModelFave =>
          {
            // console.log('dbModelAll', dbModelAll)
            // console.log('dbmodelfave', dbModelFave)
            (dbModelFave.length > 0) ? res.json({all:dbModelAll, favorite:dbModelFave}) : res.json({all:dbModelAll, favorite:[{invoiceId:"No favorite invoices!", _id:"off", key:1}]})
            // (dbModelFav.length > 0) ? res.json("hi") : res.json("hi")
          })
        .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }),

  //Favorite Pull for Invoices---------------------------------
  app.get("/api/invoice/favorite", function(req, res) {
    Invoices.find({favorite:true})
    .then(dbModel =>
      {
        // console.log(dbModel);
        (dbModel.length > 0) ? res.json(dbModel) : res.json([{invoiceId:"No favorite invoices!", _id:'off'}])

      })
    .catch(err => res.status(422).json(err));
  }),

 //pull for client list
  app.get("/api/invoices/dropdown", function(req, res) {
    Clients.find({})
    .then(dbModel =>
      {
        // console.log(dbModel);
        (dbModel.length > 0) ? res.json({clients:dbModel}) : res.json({client:{companyName:"Please add client in client page"}})

      })
    .catch(err => res.status(422).json(err));
  }),
  //Individual Invoice-----------------------------------------
  app.get("/api/invoice/:id", function(req, res) {
    Invoices.find({_id:req.params.id})
    .then(dbModel =>
      {
        // console.log(dbModel);
        (dbModel.length > 0) ? res.json(dbModel) : res.json([{invoiceId:"No favorite invoices!", key:1}])

      })
    .catch(err => res.status(422).json(err));
  }),

  //PUT, favorite an Invoice!----------------------------------
  app.put('/api/invoice/favorite', function(req,res) {
    console.log(req.body.id);
    let id = req.body.id;

    // Finds invoice by Id, flips boolean, saves, sends back as json
    Invoices.findById(id)
    .then(dbModelChanged => {
      dbModelChanged.favorite = !dbModelChanged.favorite;
      dbModelChanged.save(function(err) {
        if(err) {
          console.log('error');
        }
        Invoices.find({favorite:true})
        .then(dbModelFavorite =>
          {
            // console.log(dbModelFavorite);
            (dbModelFavorite.length > 0) ? res.json({favorite:dbModelFavorite, changed:dbModelChanged}) : res.json({favorite:[{ _id:'off', invoiceId:"No favorite invoices!"}], changed:dbModelChanged, key:1})

          })
        .catch(err => res.status(422).json(err));
        //
        //
        // res.json(dbModelChanged)
      })
      .catch(err => res.status(422).json(err));
    })


  }),


  // Updates invoice status from 'Sent' to 'Paid'
  app.put('/api/invoice/:id', function(req,res) {
    let id = req.params.id;
    // Finds invoice by Id, flips boolean, saves, sends back as json
    Invoices.findById(id)
    .then(dbModelChanged => {
      dbModelChanged.status = 'Paid';
      dbModelChanged.save(function(err) {
        if(err) {
          console.log('error');
        }
        res.json(dbModelChanged)
      })
      .catch(err => res.status(422).json(err));
    })


  }),

  // Refactored Sort Function----------------------------------
  app.get("/api/invoice/filter/:command", function(req,res) {
    // grabs filtercommands from paramsid
    let command = req.params.command;
    // Bracket notation to find
    Invoices.find({})
    .sort(filterCommands[command]['switch'] ? ({[filterCommands[command]['field']]:-1}) : ({[filterCommands[command]['field']]:1}))
    .then(dbModel => {
      res.json(dbModel)
      //Flips switch
      filterCommands[command]['switch'] = !filterCommands[command]['switch'];
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
  app.post('/api/invoices/:id', function(req,res) {
    console.log(req.body);
    const invoiceData = req.body;

    Invoices.create(invoiceData)
      .then(function(doc) {

        return Clients.findOneAndUpdate({_id: req.params.id}, { $push : { invoices: doc._id}}, { new: true});

      })
      .then(function(dbClients) {
        res.json(dbClients)
      })
      .catch(function(err) {
        console.log(err.message)
      });
  }),


// app.post("/submit", function(req, res) {
//   // Create a new invoice in the database
//   db.invoice
//     .create(req.body)
//     .then(function(dbinvoice) {
//       // If a invoice was created successfully, find one Clients (there's only one) and push the new invoice's _id to the Clients's `invoices` array
//       // { new: true } tells the query that we want it to return the updated Clients -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.Clients.findOneAndUpdate({}, { $push: { invoices: dbinvoice._id } }, { new: true });
//     })
//     .then(function(dbClients) {
//       // If the Clients was updated successfully, send it back to the client
//       res.json(dbClients);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });
  // -----------------------------------------------------


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
