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
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/exercises/:id/:userId', restricted, (req, res) => {
    const {id} = req.params
    const {userId} = req.params
    Journals.findExerciseByJournalByUserId(id, userId)
    .then(item => {
        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({message: "Could not retrieve specific exercises"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', restricted, (req, res) => {
    let newjournal = req.body;
    if (!newjournal.userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!newjournal.name) {
        res.status(422).json({message: "Missing fields: name"})
    }
    if (!newjournal.date) {
        res.status(422).json({message: "Missing fields: date"})
    }
    Journals.add(newjournal)
    .then(item => {
        res.status(201).json(item);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.put('/:id', restricted, (req, res) => {
    const {id} = req.params
    let changes = req.body;
    if (!changes.name) {
        res.status(422).json({message: "Missing fields: name"})
    }
    if (!changes.date) {
        res.status(422).json({message: "Missing fields: date"})
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