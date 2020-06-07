const knex = require("knex"); //package
const config = require("./knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);
const bcrypt = require("bcrypt")

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

module.exports = {
    hashPassword: hashPassword
}