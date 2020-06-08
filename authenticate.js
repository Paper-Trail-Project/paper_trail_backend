const knex = require("knex"); //package
const config = require("./knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);
const jwt = require('jsonwebtoken')
require("dotenv").config()


async function authenticate (req, res, next){
    const token = req.headers.authorization.split(" ")[1]

    if(!token){
        res.status(401)
    }

    let id 
    try {
        id = jwt.verify(token, process.env.SECRET).id
    } catch(error){
        res.sendStatus(403)
    }
   
    const user = await database("users")
        .select()
        .where("id", id)
        .first()
    
    req.user = user
    next()
    
}

module.exports = {
    authenticate: authenticate
}