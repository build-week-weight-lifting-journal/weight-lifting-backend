const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstName: 'Mack', lastName: 'Weber', password: bcrypt.hashSync('pass', 10), email: 'mack@wlj.to'},
        {firstName: 'May', lastName: 'Ng', password: bcrypt.hashSync('pass', 10), email: 'may@wlj.to'},
        {firstName: 'Charles', lastName: 'Wang', password: bcrypt.hashSync('pass', 10), email: 'charles@wlj.to'},
        {firstName: "Ya'Kuana", lastName: 'Davis', password: bcrypt.hashSync('pass', 10), email: 'yakuana@wlj.to'},
        {firstName: 'Dan', lastName: 'Hamraj', password: bcrypt.hashSync('pass', 10), email: 'dan@wlj.to'},
        {firstName: 'Elijah', lastName: 'Foster', password: bcrypt.hashSync('pass', 10), email: 'elijah@wlj.to'},
        {firstName: 'Leighton', lastName: 'Fritze', password: bcrypt.hashSync('pass', 10), email: 'leighton@wlj.to'},
        {firstName: 'Joshua', lastName: 'Shockley', password: bcrypt.hashSync('pass', 10), email: 'joshua@wlj.to'},
        {firstName: 'Dom', lastName: 'Eccleston', password: bcrypt.hashSync('pass', 10), email: 'dom@wlj.to'},
        {firstName: 'Connor', lastName: 'Holly', password: bcrypt.hashSync('pass', 10), email: 'connor@wlj.to'}
      ]);
    });
};
