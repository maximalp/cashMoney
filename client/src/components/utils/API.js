import axios from "axios";

export default {
  get: function(query) {
    return axios.get(query)
  },
  post: function(param, data) {
    return axios.post("/api/invoices/"+param, data);
  },
  put: function(data) {
    return axios.put('/api/invoice/favorite', data);
  }
};
