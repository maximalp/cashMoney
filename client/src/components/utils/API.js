import axios from "axios";

export default {
  get: function(query) {
    return axios.get(query)
  },
  post: function(param, data) {
    return axios.post("/api/invoices/"+param, data);
  },
  postExpense: function(data) {
    return axios.post("/api/expenses/", data);
  },
  put: function(data) {
    return axios.put('/api/invoice/favorite', data);
  },
  // Gets all expenses
  getExpenses: function() {
    return axios.get("/api/expenses");
  },
  // Gets the expense with the given id
  getExpense: function(id) {
    return axios.get("/api/expenses/" + id);
  },
  // Deletes the expense with the given id
  deleteExpense: function(id) {
    return axios.delete("/api/expenses/" + id);
  },
  // Saves a expense to the database
  saveExpense: function(expenseData) {
    return axios.post("/api/expenses", expenseData);
  }
};
