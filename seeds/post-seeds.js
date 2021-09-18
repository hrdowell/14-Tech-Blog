const { Post } = require('../models');

const postData = [
    {
        title: "New Microsoft Office is coming: Release date, pricing and major changes",
        post_content: "Microsoft's new, flat-price version of its Office productivity software will arrive on Oct. 5 -- the same day Windows 11 begins rolling out, according to a company blog post Thursday. Microsoft previously emphasized that while its main focus remains in its subscription offering, Microsoft 365, it will release the one-time purchase Office 2021 for those who aren't ready to move to the cloud. (src: Alison DeNisco Rayome, CNET)",
        user_id: 3
    },
    {
        title: "An early look at SvelteKit",
        post_content: "The local zoo has received funding to build a new online catalog, and they've asked to create a web server for a front-end application they’re developing, called Zoo Keepr. This site’s data will be stored on the SvelteKit is the successor to Sapper, the full-stack, server-side prerendering application framework for Svelte, similar to Next.js for React. SvelteKit bears many similarities to Sapper, but adds some new and ambitious features. In particular, SvelteKit allows for targeting different production environments, including serverless environments. SvelteKit also adopts Vite as its dev-time tool, which leverages ES Modules for fast, fine-grained HMR (hot module replacement) during development.. This will allow animal enthusiasts to access the data from different locations and browsers without needing to download it to their device (src: Matthew Tyson, InfoWorld)",
        user_id: 1
    },
    {
        title: "The State of AI in 2019",
        post_content: "It’s a common psychological phenomenon: repeat any word enough times, and it eventually loses all meaning, disintegrating like soggy tissue into phonetic nothingness. For many of us, the phrase “artificial intelligence” fell apart in this way a long time ago. AI is everywhere in tech right now, said to be powering everything from your TV to your toothbrush, but never have the words themselves meant less.It shouldn’t be this way. While the phrase artificial intelligence is unquestionably, undoubtedly misused, the technology is doing more than ever — for both good and bad. It’s being deployed in health care and warfare; it’s helping people make music and books; it’s scrutinizing your resume, judging your creditworthiness, and tweaking the photos you take on your phone. In short, it’s making decisions that affect your life whether you like it or not.",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication (src: The Verge)",
        user_id: 5
    },
    {
        title: "Here’s How the New iPad Mini Compares to the Last-Gen Model",
        post_content: "With the announcement and impending release of the new iPad Mini and its revamped design, it might be all too easy to stan the new model and completely write off its predecessor. While the new model has a lot to offer — namely a larger screen, faster processor, refined design akin to the 2020 iPad Air, and a USB-C port — it also has a quality that is not so desirable: a higher introductory price. The iPad Mini line has been notoriously discount-immune over the years, possibly because of its specialized position in the market and lack of competition. The outgoing iPad Mini only recently started receiving significant discounts, falling to $300 soon before the new model was announced, but it started at $399 from the get-go. The new iPad Mini starts at $499 before you add anything further, like extra storage or 5G connectivity. (src: Antonio Benedetto, The Verge)",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;