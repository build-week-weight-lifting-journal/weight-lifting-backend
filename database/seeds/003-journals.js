
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('journals').del()
    .then(function () {
      // Inserts seed entries
      return knex('journals').insert([
        {userId: 1, date: 'June 28th, 2012', name: 'Test'},
        {userId: 1, date: 'June 28th, 2012', name: 'Example'},
        {userId: 2, date: 'June 28th, 2012', name: 'Test'},
        {userId: 2, date: 'June 28th, 2012', name: 'Example'},
        {userId: 3, date: 'June 28th, 2012', name: 'Test'},
        {userId: 3, date: 'June 28th, 2012', name: 'Example'},
        {userId: 4, date: 'June 28th, 2012', name: 'Test'},
        {userId: 4, date: 'June 28th, 2012', name: 'Example'},
        {userId: 5, date: 'June 28th, 2012', name: 'Test'},
        {userId: 5, date: 'June 28th, 2012', name: 'Example'},
        {userId: 6, date: 'June 28th, 2012', name: 'Test'},
        {userId: 6, date: 'June 28th, 2012', name: 'Example'},
        {userId: 7, date: 'June 28th, 2012', name: 'Test'},
        {userId: 7, date: 'June 28th, 2012', name: 'Example'},
        {userId: 8, date: 'June 28th, 2012', name: 'Test'},
        {userId: 8, date: 'June 28th, 2012', name: 'Example'},
        {userId: 9, date: 'June 28th, 2012', name: 'Test'},
        {userId: 9, date: 'June 28th, 2012', name: 'Example'},
        {userId: 10, date: 'June 28th, 2012', name: 'Test'},
        {userId: 10, date: 'June 28th, 2012', name: 'Example'},
      ]);
    });
};
