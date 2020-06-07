const express = require("express");
const app = express();

const knex = require("knex"); //package
//should give the config object for whichever environment we are in (development/production)
const config = require("./knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);


app.get("/users", (req, res) => {
  database("users").select()
    .then(users => {
      res.json({ users })
    })
});

app.get("/users/:id", (req, res) => {
  database("users").select().where({ id: req.params.id }).first()
    .then(user => {
      res.json({ user })
    })
})

app.listen(8000);
