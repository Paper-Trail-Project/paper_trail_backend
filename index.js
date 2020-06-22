const express = require("express");
const app = express();
const knex = require("knex"); //package
//should give the config object for whichever environment we are in (development/production)
const config = require("./knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);
const cors = require('cors')
app.use(cors())


const bodyParser = require('body-parser')
app.use(bodyParser.json())
// this will allow us to parse the raw response to json 

const {authenticate} = require('./authenticate')
const {login} = require('./controllers/loginController')
const {hashPassword, getAllUsers, getUser} = require('./controllers/userController')


app.get("/", (req, res) =>  {
res.send('API Status: Running')
})

app.get("/users", getAllUsers)
app.get("/users/:id", getUser)
app.post("/users",hashPassword)
app.post("/login", login)

// We now have a authenticare function that we can use on an endpoint, which wil authenticate the token and make sure it is a valid token 
app.get("/example", authenticate, async (req, res) => {
  res.json({
    secretInfo: "Here you go! This endpoint is authenticated"
})
})

app.listen(process.env.PORT || 8000);
