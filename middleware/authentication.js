require('dotenv').config();

const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || "Do tell me, how heavy are the dumbbells you left?"

function authenticate (req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if (err) {
                return res.status(401).json(err)
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            error: "No token provided, must be set on the Authorization Header"
        })
    }
}

module.exports = authenticate;