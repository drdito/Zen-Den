import axios from "axios";

export default {
  // Gets all user Data
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Saves a book to the database
  saveUsers: function(userData) {
    return axios.post("/api/users", userData);
  }
};
