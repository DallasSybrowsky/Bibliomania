const router = require('express').Router();
const { Swipe } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/bookswipe', withAuth, async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/signup');
      } else {
    }
    res.render("swipe");
});

// Get one comment
router.post('/liked', withAuth, async (req, res) => {
    console.log(req.body.isbn);
    try {
        const swipeData = await Swipe.create({
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