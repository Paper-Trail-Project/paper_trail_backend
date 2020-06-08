const knex = require("knex"); //package
const config = require("./knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
require("dotenv").config()

async function hashPassword (req, res){
    const { name, username, password } = req.body
    bcrypt.hash(password, 12).then(hashedPassword => {
        database("users")
            .insert({
                name, 
                username, 
                password: hashedPassword
            }).returning("*")
            .then(users => {
                res.status(201).json({ ...users[0]})
            })  
  })
} 

async function login (req, res){
    const { username, password} = req.body
    // Search in the user database where the username matches 
    const foundUser = await database("users")
      .select()
      .where("username", username )
      .first()
  
      // If no username is found, return unauthorized response 
    if(!foundUser){
      res.sendStatus(401)
    }

    //Compare the password from the body of the response to the encyrpted password for the user. 
    const isPasswordMatch = await bcrypt.compare(password, foundUser.password)

    //If the password does not match, return unauthorized response 
    if(!isPasswordMatch){
        res.sendStatus(401)
    }

    //If both password and username match, return a token created with the secret and then send it back 
    const token = jwt.sign(foundUser, process.env.SECRET)

    res.json({token})
}

module.exports = {
    hashPassword: hashPassword,
    login: login
}