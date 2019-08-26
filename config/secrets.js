require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET || "Do tell me, how heavy are the dumbbells you left?"
}