const Invoices = require("../models/invoice");

// Defining methods for the booksController
const model = {
  findAll: function(req, res) {
    return (
    Invoices
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    )
  },
  findById: function(req, res) {
    return (
    Invoices
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    )
  },
  create: function(req, res) {
    return (
    Invoices
      .create(req)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err))
    )
  },
  update: function(req, res) {
    return (
    Invoices
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    )
  },
  remove: function(req, res) {
    return (
    Invoices
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    )
  }
};

module.exports = model;
