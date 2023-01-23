const router = require("express").Router();
const { User, Books, History, Swipes } = require("../models");
const withAuth = require("../utils/auth");
//  Get all posts  and include the username of the poster
router.get("/", async (req, res) => {
  console.log("login");
  res.render("login", { logged_in: req.session.logged_in });
});

//  Get a single post  and include the username of the poster
router.get("/dashboard", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    try {
      const swipedBooks = await Swipes.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
      const swipes = swipedBooks.map((post) => post.get({ plain: true }));
      res.render("dashboard", {
        swipes,
        logged_in: req.session.logged_in,
        include: [{ model: Books }],
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});
//  Get a single post  and include the username of the poster
router.get("/bookswipe", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/signup");
  } else {
    res.render("swipe", {
      logged_in: req.session.logged_in,
    });
  }
});

// Get a single post  and include the username of the poster
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Get a single post  and include the username of the poster
router.get("/signup", (req, res) => {
  console.log("Test");
  res.render("signup");
});

// Get a single post  and include the username of the poster
router.get("/library", withAuth, async (req, res) => {
  try {
    const likes = await Swipes.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["isbn"],
    });
    const finalLikes = likes.map((project) => project.get({ plain: true }));
    res.render("library", {
      finalLikes: finalLikes,
      logged_in: req.session.logged_in,
      background_none: true,
      swipesButton: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
