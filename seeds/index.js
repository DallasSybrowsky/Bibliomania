const sequelize = require('../config/connection');
const seedBooks = require('./bookSeeds');
const seedUser = require('./userSeeds');
const seedReview = require('./reviewSeeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUser();
    console.log('--------------');
    await seedBooks();
    console.log('--------------');
    await seedReview();
    console.log('--------------');
    process.exit(0);
}

seedAll();