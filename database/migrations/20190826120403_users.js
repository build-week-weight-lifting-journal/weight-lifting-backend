exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();
      users
      .string('email', 255)
      .notNullable()
      .unique();
      users
      .string('password')
      .notNullable();
      users
      .string('firstName', 255)
      .notNullable();
      users
      .string('lastName', 255)
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
