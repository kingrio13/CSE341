const routes = require('express').Router();
const ta01 = require('./ta01');
const ta02 = require('./ta02');
const ta03 = require('./ta03');
const ta04 = require('./ta04');


routes.use('/ta01', ta01);
routes.use('/ta02', ta02);
routes.use('/ta03', ta03);
routes.use('/ta04', ta04);

module.exports = routes;