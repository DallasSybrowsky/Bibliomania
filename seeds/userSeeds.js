const { User } = require('../models');
const sequelize = require('../config/connection');
const userData = [
  {
    username: "AnaBanana",
    password: "12341234",
    email: "anabennett77@gmail.com"
  },
  {
    username: "JoeDirt",
    password: "12341234",
    email: "brigantinojoe71@gmail.com"
  },
  {
    username: "ivsir",
    password: "12341234",
    email: "ivsirqerat@gmail.com"
  },
  {
    username: "TriscuitAverse",
    password: "12341234",
    email: "dallas.sybrowsky@gmail.com"
  },
];

seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;