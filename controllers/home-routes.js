const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Get all posts for homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["id", "post_text", "title", "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one post
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: ["id", "post_text", "title", "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    const post = postData.get({ plain: true });
    res.render("single-post", { post, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dashboard Route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "post_text", "title", "created_at"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Signup Route
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
