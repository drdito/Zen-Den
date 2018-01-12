var mongoose = require("mongoose");

const router = require("express").Router();
const BlogPostController = require("../../controllers/BlogPostController");

// Matches with "/api/books"
// router
//   .route("/")
//   .get(BlogPostController.findAll)
//   .post(BlogPostController.create);

// router.get('/', function(req, res, next) {
//     res.json([{
//         id: 1,
//         name: "carson"
//     }]);
// });

router
    .route('/')
    .get(BlogPostController.findAll)
    .post(BlogPostController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(BlogPostController.findById)
//   .put(BlogPostController.update)
//   .delete(BlogPostController.remove);

module.exports = router;
