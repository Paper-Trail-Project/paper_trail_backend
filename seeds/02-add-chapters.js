
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chapters').del()
    .then(function () {
      // Inserts seed entries
      return knex('chapters').insert([
        {title: "Budgeting", summary: "Learn how to create, maintain and update a budget! "},
        {title: "Saving and Growing Your Money", summary: "Save money daily, monthly and for the long term"},
        {title: "Banking", summary: "Save money daily, monthly and for the long term"},
        {title: "Credit Cards", summary: "Understanding credit cards, types of credit cards, how to build credit, and more!"},
        {title: "Taxes", summary: "Understanding the IRS and how to file taxes electronically"},
        {title: "Insurance", summary: "Learn how to protect yourself financially in any situation"},
        {title: "Home Ownership", summary: "Learn to equipe yourself with tools for your home ownership future"},
        {title: "Wealth Management", summary: "Addressing the needs of affluent clients"},
        {title: "Retirement Planning", summary: "Learn what you need to plan for the future"},
      ]);
    });
};
