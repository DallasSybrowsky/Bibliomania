const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");
const withAuth = require("../utils/auth");


// Get all posts for homepage
// router.get('/', withAuth, async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             where: {
//                 user_id: req.session.user_id
//               },
//               attributes: [
//                 'id',
//                 'post_text',
//                 'title',
//                 'created_at',
//               ],
//               include: [
//                 {
//                   model: Comment,
//                   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                   include: {
//                     model: User,
//                     attributes: ['username']
//                   }
//                 },
//                 {
//                   model: User,
//                   attributes: ['username']
//                 }
//               ]
//             })
//         const posts = postData.map((post) => post.get({ plain: true }));
//          res.render('dashboard', { posts, loggedIn: true });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // Get one post
// router.get('/edit/:id', withAuth, async(req, res) =>{
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             attributes: [
//                 'id',
//                 'post_text',
//                 'title',
//                 'created_at',
//               ],
//               include: [
//                 {
//                   model: Comment,
//                   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                   include: {
//                     model: User,
//                     attributes: ['username']
//                   }
//                 },
//                 {
//                   model: User,
//                   attributes: ['username']
//                 }
//               ]
//             });
//         const post = postData.get({ plain: true });
//         res.render('edit-post', { post, loggedIn: true });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // Get new post
// router.get('/new', withAuth, async(req, res) =>{
//     try {
//         const postData = await Post.findAll({
//             attributes: { exclude: ['password'] },
//     where: {
//       id: req.session.user_id
//     }
//   })
//         const posts = postData.map((post) => post.get({ plain: true }));
//         res.render('new-post', { posts, loggedIn: true });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
