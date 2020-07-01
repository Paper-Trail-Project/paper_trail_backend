
exports.up = function(knex) {
    // return knex.schema.createTable("chapter_sections", chapter_sections => {
    //     sections.increments()
    //     chapter_sections.integer('chapter_id').references('id').inTable('chapters');
    //     chapter_sections.integer('section_id').references('id').inTable('sections');
    //   })  
};

exports.down = function(knex) {
    // return knex.schema.dropTableIfExists("chapter_sections")
};
