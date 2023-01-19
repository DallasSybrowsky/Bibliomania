const router = require('express').Router();
const { Swipe } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/bookswipe', async (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/signup');
      } else {
        res.render("swipe");
      }
});

// Get one comment
router.post('/', withAuth, async (req, res) => {
    try {
        const swipeData = await Swipe.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;