const routes = require('express').Router();
const teamRoutes = require('./teamRoutes');
const proveRoutes = require('./proveRoutes');


routes.use('/teamactivities', teamRoutes);
routes.use('/proveactivities', proveRoutes);


module.exports = routes;