const config  = require('../config/database');
const mongoose = require('mongoose');

//Connect to database
mongoose.connect(config.CONECTION_STRING);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../api/users/user.model')
};
