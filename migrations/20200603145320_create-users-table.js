
exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    //auto incrementing id field
    users.increments()
    users.string("name")
    users.string("username")
    users.string("password")
  })
};

exports.down = function(knex) {
  //to reverse the above
  // return knex.schema.dropTableIfExists("users")
};
