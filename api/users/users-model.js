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
    return db('users')
    .select('id', 'firstName', 'lastName', 'email');
}

function findBy(filter) {
    return db('users')
    .where(filter);
}

function findById(id) {
    return db('users')
    .select('id', 'email', 'firstName', 'lastName')
    .where({id})
    .first();
}

function add(user) {
    return db('users')
    .insert(user)
    .then(ids => {
        const [id] = ids; 
        return db('users')
        .select('id', 'email', 'firstName', 'lastName')
        .where({id})
        .first();
    })
}

function update(id, changes) {
    return db('users')
    .where('id', id)
    .update(changes)
    .then(ids => {
        const [id] = ids;
        return db('users')
        .where({id})
        .first();
    })
}

function remove(id) {
    return db('users')
    .where({id})
    .delete();
}