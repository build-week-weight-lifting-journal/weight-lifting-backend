
exports.up = function(knex) {
  return knex.schema.createTable('journalsExercises', joined => {
      joined.increments();

      joined
      .string('weight', 128)
      .notNullable();

      joined
      .integer('reps')
      .notNullable();

      joined
      .integer('sets')
      .notNullable();

      joined
      .integer('journalId')
      .references('id')
      .inTable('journals')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

      joined
      .integer('exerciseId')
      .references('id')
      .inTable('exercises')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('journalsExercises')
};
