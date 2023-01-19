const { Books } = require('../models');
const sequelize = require('../config/connection');
const bookData = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
    },
    {
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
    },
    {
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
    },
    {
        title: "The Return of the King",
        author: "J.R.R. Tolkien",
    },
    {
        title: "The Silmarillion",
        author: "J.R.R. Tolkien",
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
    },
    {
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
    },
    {
        title: "The Sun Also Rises",
        author: "Ernest Hemingway",
    },
    {
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
    },
    {
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
    },
];

seedBooks = () => Books.bulkCreate(bookData);   

module.exports = seedBooks;
