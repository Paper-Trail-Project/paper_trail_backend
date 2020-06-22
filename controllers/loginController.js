const knex = require("knex"); //package
const config = require("../knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
require("dotenv").config()

async function login (req, res){
  console.log(req)
    const { username, password} = req.body
    const foundUser = await database("users")
      .select()
      .where("username", username )
      .first()
  
    if(!foundUser){
      res.sendStatus(401)
    }

    const isPasswordMatch = await bcrypt.compare(password, foundUser.password)

    if(!isPasswordMatch){
        res.sendStatus(401)
    }
    const token = jwt.sign({
        id: foundUser.id,
        username: foundUser.username
    }, process.env.SECRET)
    res.json({ token, foundUser })
}

module.exports = {
    login: login
}