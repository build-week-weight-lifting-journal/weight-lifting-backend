exports.up = function(knex) {
    return knex.schema.createTable('exercises', exercises => {
        exercises.increments();

        exercises
        .string('name')
        .notNullable();

        exercises
        .string('region')
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('exercises')
};
