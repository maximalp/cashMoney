var Clients = require("../models/client");
var Invoices = require("../models/invoice");


module.exports = function(app) {

// posting new client entry to database
  app.post('/api/clients', function(req,res) {
    console.log(req.body);
    const clientData = req.body;

    Clients.create(clientData)
      .then(function(doc) {
        console.log(doc);
        res.json(doc);
      })
      .catch(function(err) {
        console.log(err.message)
      });
  }),


//Initial Client List---------------------------------
app.get("/api/clients", function(req, res) {
    Clients.find({})
    .populate("invoices")
    .sort({dateOfIssue:-1})
    .then(dbModelAll => {
      // res.json({invoices: dbModelAll});

      Invoices.find({status:'Sent'})
      .then(dbModelSent => {
        console.log(dbModelSent)
        // res.json({invoices:dbModelAll, draft: dbModelSent})
        Invoices.find({status:'Paid'})
        .then((dbModelPaid) => {

          res.json({invoices:dbModelAll, sent: dbModelSent, paid:dbModelPaid})

        })
        .catch(err => res.status(422).json(err));

      })
      .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
})

};
