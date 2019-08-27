
exports.up = function(knex) {
  return knex.schema.createTable('journals', journals => {
      journals.increments();

      journals
      .integer('userId')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      journals
      .string('date', 128)
      .notNullable();

      journals
      .string('name', 128)
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('journals')
};
