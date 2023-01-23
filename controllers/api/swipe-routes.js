const router = require('express').Router();
const { Swipes } = require('../../models');
const withAuth = require('../../utils/auth');

//  Get all posts  and include the username of the poster
router.get('/bookswipe', withAuth, async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/signup');
      } else {
    }
    res.render("swipe");
});

//  Get a single post  and include the username of the poster
router.post('/liked', withAuth, async (req, res) => {
    console.log(req.body.isbn);
    try {
        const swipeData = await Swipes.create({
          isbn: req.body.isbn,
          user_id: req.session.user_id,
        });
        res.status(200).json(swipeData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;