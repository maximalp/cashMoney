var Expenses = require("../models/expense");

// Includes Routing and Controller for now...

module.exports = function(app) {
  app.get("/about", function(req, res) {
    Expenses.find({})
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

    Expenses.create(data)
      .then(function(doc) {
        console.log(doc);
        res.json(doc);
      })
      .catch(function(err) {
        console.log(err.message);
      })
  })
}

// // Matches with "/api/expense"
// router.route("/")
//   .get(expnseController.findAll)
//   .post(expenseController.create);
//
// // Matches with "/api/expense/:id"
// router
//   .route("/:id")
//   .get(expenseController.findById)
//   .put(expenseController.update)
//   .delete(expenseController.remove);
//
// module.exports = router;
