const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
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
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one post
router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      attributes: ["id", "content", "title", "created_at"],
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
    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a post
router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create(req.body);
    Post.create({
      title: req.body.title,
      content: req.body.postContent,
      user_id: req.session.user_id,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.update(req.body);
    Post.update({
        title: req.body.title,
        content: req.body.post_content,
    }, {
        where: {
            id: req.params.id,
        },
    });
    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a post
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
        where: {
            id: req.params.id,
        },
        });
        if (!commentData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

module.exports = router;
