import axios from "axios";

export default {
  get: function(query) {
    return axios.get(query)
  },
  post: function(data) {
    return axios.post("/api/invoices", data);
  }
};
