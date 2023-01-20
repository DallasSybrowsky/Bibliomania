const User = require("./User");
const Review = require("./Review");
const Swipes = require("./Swipe");


User.hasMany(Review, {
  foreignKey: "user_id",
});

// User.hasMany(Swipe, {
//   foreignKey: "user_id",
// });

Review.belongsTo(User, {
  foreignKey:"user_id",
});

// Swipe.belongsTo(User,{
//   foreignKey: "user_id"
// })

module.exports = {
  User,
  Review,
  Swipes
};