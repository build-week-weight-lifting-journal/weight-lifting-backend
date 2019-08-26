const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || "Welcome to the server!"
    res.send(`<h1>${messageOfTheDay}</h1>`)
})

module.exports = server;