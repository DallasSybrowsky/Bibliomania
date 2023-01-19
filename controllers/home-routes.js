const router = require("express").Router();
const { User, Books, History, Swipes } = require("../models");
const withAuth = require("../utils/auth");
const sequelize = require("../config/connection");

// Get all posts for homepage
router.get("/", async (req, res) => {
  res.render("login", { loggedIn: req.session.logged_in });
});

// Dashboard Route
router.get("/dashboard", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    try {
      const swipedBooks = await Swipes.findAll({
        where: {
          user_id: req.session.user_id,
        }
      });
      const swipes = swipedBooks.map((post) => post.get({ plain: true }));
      res.render("dashboard", {
        swipes,
        logged_in: req.session.logged_in,
        include: [{ model: Books }]
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/bookswipe', async (req, res) => {

  if (!req.session.logged_in) {
      res.redirect('/signup');
    } else {
      res.render("swipe", {
        logged_in: req.session.logged_in,
      });
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
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }
  console.log("Test");
  res.render("signup");
});

module.exports = router;
