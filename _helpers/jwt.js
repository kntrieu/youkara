const expressJwt = require('express-jwt');
const config = require('../config/database');
const userService = require('../users/user.service');

module.exports = jwt;

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};