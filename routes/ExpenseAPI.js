var Expenses = require("../models/expense");

// Includes Routing and Controller for now...

module.exports = function(app) {
  app.post("/api/expenses", function(req, res) {
    const expenseData = req.body
    // console.log(req)
    console.log(req.body)
      Expenses
        .create(expenseData)
        .then(dbModel => console.log(res.json(dbModel)))
        .catch(err => console.log(err));
  }),
  app.get("/api/expenses", function(req,res) {
    Expenses
    .find({})
    .then(dbModel => {
      console.log(dbModel)
      res.json(dbModel)
    })
    .catch(err => console.log(err));
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
