require('dotenv').config();

const {Pool} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MyBlogPersonalProject',
  password: process.env.POSTGRES_PASS,
  port: process.env.PORT,
})
module.exports = pool
// Pool.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });