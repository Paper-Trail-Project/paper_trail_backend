const express = require("express");
const app = express();

const knex = require("knex"); //package
//should give the config object for whichever environment we are in (development/production)
const config = require("./knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000);
