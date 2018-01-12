import axios from "axios";

export default {
  // Gets all books
  getBlogPosts: function() {
    return axios.get("/api/blog");
  },
  // Gets the book with the given id
  getBlog: function(id) {
    return axios.get("/api/BlogPosts/" + id);
  },
  // Deletes the book with the given id
  deleteBlogPost: function(id) {
    return axios.delete("/api/BlogPosts/" + id);
  },
  // Saves a book to the database
  createBlogPost: function(blogPostData) {
    alert(blogPostData.title);
    return axios.post("/api/blog", blogPostData);
  }
};
