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


            res.json({invoice:invoiceAmounts, expense: dbModelExpense, profit:profit})
          })

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
