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

// router
//     .route('/')
//     .get(BlogPostController.findAll)
//     .post(BlogPostController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(BlogPostController.findById)
//   .put(BlogPostController.update)
//   .delete(BlogPostController.remove);

const db = require("../../models");

router.get("/", (req, res) => {
  console.log("req.user");
    console.log(req.user.accessToken);
  db.BlogPost.find({ accessToken: req.user.accessToken })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.post("/", (req, res) => {
  const title = req.body.title;
  const date = req.body.date;
  const synopsis = req.body.synopsis;
  const accessToken = req.get("Authorization");

  db.BlogPost.create({
    title: title,
    date: date,
    synopsis: synopsis,
    accessToken: accessToken
  });
});

module.exports = router;
