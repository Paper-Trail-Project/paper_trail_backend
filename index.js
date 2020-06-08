const express = require("express");
const app = express();

const knex = require("knex"); //package
//should give the config object for whichever environment we are in (development/production)
const config = require("./knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);

const bodyParser = require('body-parser')
app.use(bodyParser.json())
// this will allow us to parse the raw response to json 

const {hashPassword, login} = require('./authenticate')


app.get("/", (req, res) =>  {
res.send('API Status: Running')
})

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

app.post("/users",hashPassword, async (req,res) => {
  
})

app.post("/login", login, async (req, res) => {

})


app.listen(process.env.PORT || 8000);
