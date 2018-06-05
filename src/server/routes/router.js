const routers = require('express').Router();
const users = require('./users');
const classes = require('./classes');
const reservations = require('./reservations');

routers.use('/users', users);
routers.use('/classes', classes);
routers.use('/reservations', reservations);

module.exports = routers;
