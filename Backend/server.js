const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const routers = require("./routes/routes");
const pool = require('../Backend/config/dbconfig');


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

pool.query("SELECT NOW()", (err, res) => {
    if (err) {
      console.error("Error connecting to the database", err);
    } else {
      console.log("Successfully connected to the database");
    }
  
  });
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
app.use("/", routers);

