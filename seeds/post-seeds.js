const { Post } = require('../models');

const postData = [
    {
        title: "New Microsoft Office is coming: Release date, pricing and major changes",
        post_content: "Microsoft's new, flat-price version of its Office productivity software will arrive on Oct. 5 -- the same day Windows 11 begins rolling out, according to a company blog post Thursday. Microsoft previously emphasized that while its main focus remains in its subscription offering, Microsoft 365, it will release the one-time purchase Office 2021 for those who aren't ready to move to the cloud.",
        user_id: 3
    },
    {
        title: "Zoo Keepr reaches 1 million subscribers!",
        post_content: "The local zoo has received funding to build a new online catalog, and they've asked to create a web server for a front-end application they’re developing, called Zoo Keepr. This site’s data will be stored on the server. This will allow animal enthusiasts to access the data from different locations and browsers without needing to download it to their device",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;