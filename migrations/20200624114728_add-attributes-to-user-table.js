
exports.up = function(knex) {
    return knex.schema.table("users", users => {
       users.string("monster_img")
       users.decimal("money", 14, 2)
       users.integer("energy")
       users.specificType("inventory", 'text ARRAY')
      })
  
};

exports.down = function(knex) {
  //to reverse the above
  // return knex.schema.dropTableIfExists("users")
};
