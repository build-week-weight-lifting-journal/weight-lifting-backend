const router = require('express').Router();

const Exercises = require('./exercises-model.js');
const restricted = require('../../middleware/authentication.js');

router.get('/', restricted, (req, res) => {
    Exercises.find()
    .then(exercise => {
        res.status(200).json(exercise)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', restricted, (req, res) => {
    Exercises.findById(req.params.id)
    .then(exercise => {
        res.status(200).json(exercise)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/regions/:region', restricted, (req, res) => {
    const {region} = req.params
    Exercises.findByRegion(region)
    .then(exercise => {
        res.status(200).json(exercise)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/', restricted, (req, res) => {
    const newexercise = req.body
    if (!newexercise.name) {
        res.status(422).json({message: "Missing fields: name"})
    }
    if (!newexercise.region) {
        res.status(422).json({message: "Missing fields: region"})
    }
    Exercises.add(newexercise)
    .then(item => {
        res.status(201).json(item)
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
    Exercises.update(id, changes)
    .then(updated => {
        if (updated) {
            res.status(200).json({success: true, updated})
        } else {
            res.status(404).json({message: "This exercise could not be updated"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', restricted, (req, res) => {
    Exercises.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This exercise has been removed from the database"})
        } else {
            res.status(404).json({message: "This exercise does not exist"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;