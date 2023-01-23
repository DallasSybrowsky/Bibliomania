    //  This is the main API route file. It will be used to route all of the API routes.
const router = require("express").Router();
const userRoutes = require("./user-routes");
const reviewRoutes = require("./review-routes");
const swipeRoutes = require("./swipe-routes");

// Book routes for the API  routes  
router.use("/users", userRoutes);
router.use("/review", reviewRoutes);
router.use("/swipe", swipeRoutes);

module.exports = router;