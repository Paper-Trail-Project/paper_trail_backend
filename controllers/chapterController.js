const knex = require("knex"); //package
const config = require("../knexfile")[process.env.NODE_ENV || "development"]; //file
const database = knex(config);
const bcrypt = require("bcrypt")

function getAllChapters (req, res){
    database("chapters").select()
    .then(chapters => {
      res.json({ chapters })
    })
}

function getChapter (req, res){
    database("chapters").select().where({ id: req.params.id }).first()
    .then(chapter => {
      res.json({ chapter })
    })
}


function getAllSections (req, res){
    database("sections").select()
    .then(sections => {
      res.json({ sections })
    })
}

function getSection (req, res){
    database("sections").select().where({ id: req.params.id }).first()
    .then(section => {
      res.json({ section })
    })
}



module.exports = {
    getAllChapters: getAllChapters, 
    getChapter: getChapter,
    getAllSections: getAllSections,
    getSection: getSection
}