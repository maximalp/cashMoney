import axios from "axios";

export default {
  get: function(query) {
    return axios.get(query);
  },
  // breed: function(query) {
  //   return axios.get(SEARCHURL + query + breed);
  // },
};
