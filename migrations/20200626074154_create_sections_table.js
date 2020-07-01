
exports.up = function(knex) {
    return knex.schema.createTable("sections", sections => {
        sections.increments()
        sections.string("title")
        sections.text("content")
        sections.string("chapter")
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sections")
};
