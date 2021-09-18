const { User } = require('../models');

const userData = [
    {
        username: "martin_bour",
        twitter: "martinb",
        github: "martinb",
        email: "martin_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_b",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shauna_c",
        twitter: "shauna",
        github: "shauna",
        email: "shauna_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lorelai_g",
        twitter: "lorelai_g123",
        github: "lorelai_g",
        email: "lorelai_g@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "hannah_d",
        twitter: "hd123",
        github: "hrdowell",
        email: "hannahrdowell@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "kathy_g",
        twitter: "kathyg123",
        github: "kathyg123",
        email: "kathyg123@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;