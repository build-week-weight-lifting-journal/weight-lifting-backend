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
    return db('journals')
    .select('id', 'name', 'date', 'userId');
}

// NOT WORKING YET, UNSURE WHY
function findBy(filter) {
    return db('journals')
    .where({filter});
}

function findById(id) {
    return db('journals')
    .select('id', 'name', 'date', 'userId')
    .where({id})
    .first();
}

function add(journal) {
    return db('journals')
    .insert(journal)
    .then(ids => {
        const [id] = ids;
        return db('journals')
        .where({id})
        .first();
    })
}

function update(id, changes) {
    return db('journals')
    .where('id', id)
    .update(changes)
    .then(ids => {
        const [id] = ids;
        return db('journals')
        .where({id})
        .first();
    })
}

function remove(id) {
    return db('journals')
    .where({id})
    .delete();
}