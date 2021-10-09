const routes = require('express').Router();


const prove01 = require('./prove01');
const prove02 = require('./prove02');
const prove03 = require('./prove03');

const prove08 = require('./prove08');

routes.use('/prove01', prove01);
routes.use('/prove02', prove02);
routes.use('/prove03', prove03);
routes.use('/prove08', prove08);

module.exports = routes;