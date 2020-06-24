const knex = require("knex"); //package
const config = require("../knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);
const bcrypt = require("bcrypt")


function getAllUsers (req, res){
    database("users").select()
    .then(users => {
      res.json({ users })
    })
}

function getUser (req, res){
    database("users").select().where({ id: req.params.id }).first()
    .then(user => {
      res.json({ user })
    })
}

function updateMonster (req, res){
    database("users")
    .select()
    .where({id: req.params.id })
    .update(req.body)
    .returning('*')
    .then( data => {
        res.status(201).json(data)
    })
}

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
    getAllUsers: getAllUsers,
    getUser: getUser,
    hashPassword: hashPassword,
    updateMonster: updateMonster
}