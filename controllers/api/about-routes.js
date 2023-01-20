const router = require("express").Router();

router.get("/about", async (req, res) => {
  res.render("about");
});

module.exports = router;