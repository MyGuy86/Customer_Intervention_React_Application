require('dotenv').config()
const config = {
    db: {
      host: "localhost",
      user: process.env.USERNAME1,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
  };
  module.exports = config;