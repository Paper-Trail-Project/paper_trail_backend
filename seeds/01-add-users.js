
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Meredith', username: 'mere@papertrail.com', password: '123'},
        {name: 'Miwha', username:'miwha@papertrail.com', password:'123'}
      ]);
    });
};
