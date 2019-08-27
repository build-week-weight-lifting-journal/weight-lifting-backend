const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

// Auth router
const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

// Using the router
server.use('/api/auth', authRouter); 
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || "Welcome to the server!"
    res.send(`<h1>${messageOfTheDay}</h1>`)
})

module.exports = server;