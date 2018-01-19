var Clients = require("../models/invoice");



module.exports = function(app) {

//Initial Client List---------------------------------
app.get("/api/pullInvoices", function(req, res) {
    Clients.find({})
    //.sort({dateOfIssue:-1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

};
