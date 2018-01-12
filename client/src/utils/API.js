import axios from "axios";

export default {
  // Gets all books
  getBlogPosts: function() {
    const activeAccessToken = sessionStorage.getItem("accessToken");
    return axios.get("/api/blog", {
      headers: { Authorization: activeAccessToken }
    });
  },
  // Gets the book with the given id
  getBlog: function(id) {
    const activeAccessToken = sessionStorage.getItem("accessToken");
    return axios.get("/api/BlogPosts/" + id);
  },
  // Deletes the book with the given id
  deleteBlogPost: function(id) {
    const activeAccessToken = sessionStorage.getItem("accessToken");
    return axios.delete("/api/BlogPosts/" + id);
  },
  // Saves a book to the database
  saveBlogPost: function(blogPostData) {
    return axios.post("/api/BlogPosts", blogPostData);
  }
};

  createBlogPost: function(blogPostData) {
    const activeAccessToken = sessionStorage.getItem("accessToken");
    return axios.post("/api/blog", blogPostData);