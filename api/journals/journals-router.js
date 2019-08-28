const router = require('express').Router();

const Journals = require('./journals-model.js');
const restricted = require('../../middleware/authentication.js');

router.get('/', restricted, (req, res) => {
    Journals.find()
    .then(journal => {
        res.status(200).json(journal)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', restricted, (req, res) => {
    Journals.findById(req.params.id)
    .then(journal => {
        res.status(200).json(journal)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/users/:userId', restricted, (req, res) => {
    const {userId} = req.params
    Journals.findByUserId(userId)
    .then(journal => {
        if (journal) {
            res.status(200).json(journal)
        } else {
            res.status(404).json({message: "Could not retrieve specific journal by user"})
        }
    })
})

router.put('/:id', restricted, (req, res) => {
    const {id} = req.params
    let changes = req.body;
    if (!changes.name) {
        res.status(422).json({message: "Missing fields: name"})
    }
    if (!changes.region) {
        res.status(422).json({message: "Missing fields: region"})
    }
    Journals.update(id, changes)
    .then(updated => {
        if (updated) {
            res.status(200).json({success: true, updated})
        } else {
            res.status(404).json({message: "This journal could not be updated"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', restricted, (req, res) => {
    Journals.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This journal has been removed from the database"})
        } else {
            res.status(404).json({message: "This journal does not exist"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;