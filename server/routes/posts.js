const router = require("express").Router();
const User = require("../models/User");
// const Post = require("../models/Post");
const Post = require("../models/Post");

// //CREATE POST
//CREATE POST
router.post("/:id", async (req, res) => {
  try {
    // check if user is an admin
    if (req.body.role === "admin") {
      const newPost = new Post(req.body);
      try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You must be an admin to create a post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});



//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      if (req.body.role === "admin") {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You must be an admin to update this post!");
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      if (req.body.role === "admin") {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You must be an admin to delete this post!");
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ALL POSTS

router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username }).sort({ createdAt: -1 });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      }).sort({ createdAt: -1 });
    } else {
      posts = await Post.find().sort({ createdAt: -1 });
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});



// //SEARCH
// router.get("/posts/search", async (req, res) => {
//   // Get the search query from the request
//   const query = req.query.query;

//   try {
//     // Use the $text operator in a Post.find() query to search for posts that match the search query
//     const posts = await Post.find(
//       { $text: { $search: query } },
//       { score: { $meta: "textScore" } }
//     ).sort({ score: { $meta: "textScore" } });

//     // Return the search results
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

// router.post("/", async (req, res) => {
//   const newPost = new Post(req.body);
//   try {
//     const savedPost = await newPost.save();
//     res.status(200).json(savedPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

