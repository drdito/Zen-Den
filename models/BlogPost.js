const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  synopsis: { type: String, required: true },
  accessToken: { type: String, required: true }
});

const BlogPost = mongoose.model("blogposts", blogPostSchema);

module.exports = BlogPost;
