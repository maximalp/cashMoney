var Clients = require("../models/client");



// Defining methods for the booksController
const model = {
  findAll: function(req, res) {
    return (
    Clients
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    )
  },
  findById: function(req, res) {
    return (
    Clients
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    )
  },
  create: function(req, res) {
    return (
    Clients
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
    Clients
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    )
  },
  remove: function(req, res) {
    return (
    Clients
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    )
  }
};

module.exports = model;
