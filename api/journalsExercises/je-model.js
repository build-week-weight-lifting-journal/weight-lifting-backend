const db = require('../../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}

function find() {
    return db('journalsExercises')
    .join('exercises', 'exercises.id', 'journalsExercises.exerciseId')
    .select('journalsExercises.*', 'exercises.name');
}

// NOT WORKING YET, UNSURE WHY
function findBy(filter) {
    return db('journalsExercises')
    .where({filter});
}

function findById(id) {
    return db('journalsExercises')
    .join('exercises', 'exercises.id', 'journalsExercises.exerciseId')
    .where('journalsExercises.id', id)
    .select('journalsExercises.*', 'exercises.name')
    .first();
}

function add(exercise) {
    return db('journalsExercises')
    .insert(exercise)
    .then(ids => {
        const [id] = ids;
        return db('journalsExercises')
        .join('exercises', 'exercises.id', 'journalsExercises.exerciseId')
        .where('journalsExercises.id', id)
        .select('journalsExercises.*', 'exercises.name')
        .first();
    })
}

function update(id, changes) {
    return db('journalsExercises')
    .where('id', id)
    .update(changes)
    .then(() => {
        return db('journalsExercises')
        .join('exercises', 'exercises.id', 'journalsExercises.exerciseId')
        .where('journalsExercises.id', id)
        .select('journalsExercises.*', 'exercises.name')
        .first();
    })
}

function remove(id) {
    return db('journalsExercises')
    .where({id})
    .delete();
}