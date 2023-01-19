const router = require('express').Router();
const { Swipe } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Swipe.findAll({
        include: [{ model: User }],
        });
    res.status(200).json(swipeData);
    } catch (err) {
        res.status(500).json(err);
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