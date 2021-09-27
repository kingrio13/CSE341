const routes = require('express').Router();


const prove01 = require('./prove01');
const prove02 = require('./prove02');
const prove03 = require('./prove03');
const prove04 = require('./prove04');



routes.use('/prove01', prove01);
routes.use('/prove02', prove02);
routes.use('/prove03', prove03);
routes.use('/prove04', prove04);

module.exports = routes;