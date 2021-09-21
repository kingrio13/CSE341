const routes = require('express').Router();


const prove01 = require('./prove01');
const prove02 = require('./prove02');


routes.use('/prove01', prove01);
routes.use('/prove02', prove02);

module.exports = routes;