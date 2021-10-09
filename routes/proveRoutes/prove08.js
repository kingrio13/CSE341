//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const prove08Controller= require('../../controllers/prove08/admin')


router.get('/',prove08Controller.fetchall);
router.get('/find/:name',prove08Controller.getData);

module.exports = router;
