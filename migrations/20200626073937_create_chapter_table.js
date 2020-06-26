
exports.up = function(knex) {
    return knex.schema.createTable("chapters", chapters => {
        chapters.increments()
        chapters.string("title")
        chapters.string("summary")
      })
};

exports.down = function(knex) {
  //to reverse the above
  return knex.schema.dropTableIfExists("chapters")
};
