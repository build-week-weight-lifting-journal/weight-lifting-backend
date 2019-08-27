exports.up = function(knex) {
    return knex.schema.createTable('exercises', exercises => {
        exercises.increments();

        exercises
        .string('name')
        .notNullable();

        exercises
        .string('region')
        .notNullable();

        exercises
        .integer('reps')
        .notNullable();

        exercises
        .integer('sets')
        .notNullable();

        exercises
        .string('weight', 128)
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('exercises')
};
