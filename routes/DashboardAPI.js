var Invoices = require("../models/invoice");
var Expenses = require("../models/expense");

module.exports = function(app) {
  app.get("/api/dashboard/info", function(req, res) {
    Invoices.find({}).select('status lineTotal')
      .then(dbModelInvoices => {

        let sent = dbModelInvoices.filter((invoice) => {
          return invoice.status === 'Sent'
        })
        let sentTotal = sent.reduce((sum, amount) => {
          return sum + amount.lineTotal;
        }, 0)

        let paid = dbModelInvoices.filter((invoice) => {
          return invoice.status === 'Paid'
        })
        let paidTotal = paid.reduce((sum, amount) => {
          return sum + amount.lineTotal;
        }, 0)



        let invoiceAmounts = [{name: 'Total Invoices', sent:sentTotal, paid:paidTotal}]

        Expenses.find({}).select('total category')
          .then(dbModelExpense => {

            let expenseTotal = dbModelExpense.reduce((sum, amount) => {
              return sum + amount.total
            }, 0)

            let profitTotal = paidTotal - expenseTotal

            let profit = [{name: 'Profit', profit:profitTotal}]

            let categoryArray = dbModelExpense.map(expense => {
              return expense.category
            })

            // dbModelExpense = all the expense objects

            let uniqueCategoryObject = new Set(categoryArray);
            let uniqueCategoryArray = Array.from(uniqueCategoryObject);
            console.log(uniqueCategoryArray)

            let totalExpensesArray = [];

            for (let i = 0; i < uniqueCategoryArray.length; i++) {
              let category0 = uniqueCategoryArray[i];
              let amount = 0;

              for (let a = 0; a < dbModelExpense.length; a++) {

                if (category0 == dbModelExpense[a].category) {
                  console.log(dbModelExpense[a].category)
                  console.log('total', dbModelExpense[a].total)
                  let individualAmount = dbModelExpense[a].total;
                  amount += individualAmount;
                  console.log('amount', amount);
                }
              }
              totalExpensesArray.push(amount);
            }


            res.json({invoice:invoiceAmounts, expenseCategory: uniqueCategoryArray, expenseTotal:totalExpensesArray, profit:profit})
          })

          // Expenses.aggregate(
          //     { $group: {
          //         _id:'$_id',
          //         total: { $sum: "$total" },
          //     }}
          // ).then(dbModelAgg => {
          //   console.log('AGG', dbModelAgg)
          // })

        })
      .catch(err => {
        res.status(422).json(err);
      })

    // Dashboard.find({})
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
    // console.log("Hi there test")
  })

}
