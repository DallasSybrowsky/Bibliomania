const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");


// Create a user  route
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

//  
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    console.log(userData);
    console.log(req.body.password);
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }
    const validPassword = userData.checkPassword(req.body.password);
    
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password, please try again." });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      // req.session.username = userData.username;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });
    });
    
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Logout Route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;