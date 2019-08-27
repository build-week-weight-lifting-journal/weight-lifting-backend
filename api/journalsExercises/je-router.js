const router = require('express').Router();

const Jouexe = require('./je-model.js');
const restricted = require('../../middleware/authentication.js');

router.get('/', restricted, (req, res) => {
    Jouexe.find()
    .then(item => {
        res.status(200).json(item)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', restricted, (req, res) => {
    Jouexe.findById(req.params.id)
    .then(item => {
        res.status(200).json(item)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// NOT WORKING YET, UNSURE WHY
router.get('/:region', restricted, (req, res) => {
    const {region} = req.params
    Jouexe.findBy(region)
    .then(item => {
        res.status(200).json(item)
    })
    .catch(err => {
        res.status(500).json(err)
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
    Jouexe.update(id, changes)
    .then(updated => {
        if (updated) {
            res.status(200).json({success: true, updated})
        } else {
            res.status(404).json({message: "This item could not be updated"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', restricted, (req, res) => {
    Jouexe.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This item has been removed from the database"})
        } else {
            res.status(404).json({message: "This item does not exist"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;