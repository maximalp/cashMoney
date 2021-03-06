const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  vendor: { type: String, required: true },
  description: { type: String, required: true },
  total: { type: Number, required: true }
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
