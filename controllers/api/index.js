const router = require("express").Router();
const userRoutes = require("./user-routes");
const reviewRoutes = require("./review-routes");
const swipeRoutes = require("./swipe-routes");


router.use("/users", userRoutes);
router.use("/review", reviewRoutes);
router.use("/swipe", swipeRoutes);

module.exports = router;