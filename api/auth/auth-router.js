const router = require('express').Router();

const bcrypt = require('bcryptjs');

const tokenMaker = require('../../middleware/token-maker.js');
const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;
    if (!user.firstName) {
        res.status(422).json({message: "Missing fields: first name"})
    }
    if (!user.lastName) {
        res.status(422).json({message: "Missing fields: last name"})
    }
    if (!user.email) {
        res.status(422).json({message: "Missing fields: email"})
    }
    if (!user.password) {
        res.status(422).json({message: "Missing fields: password"})
    }
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash

    Users.add(user)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.post('/login', (req, res) => {
    let {email, password} = req.body;
    Users.findBy({email})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = tokenMaker.generateToken(user);
            const id = user.id;
            res.status(200).json({
                message: `Welcome ${user.firstName} ${user.lastName}!`,
                token,
                id
            })
        } else {
            res.status(401).json({message: "Credentials are invalid"});
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
})

module.exports = router;