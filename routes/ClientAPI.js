var Clients = require("../models/client");



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
    //.sort({dateOfIssue:-1})
    .then(dbModel => {
      console.log(dbModel)
      res.json(dbModel)
    })
    .catch(err => res.status(422).json(err));
})

};
