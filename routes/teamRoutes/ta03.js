//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const ta03Controller= require('../../controllers/ta03/admin')


router.get('/',ta03Controller.fetchall);
router.get('/find/:name',ta03Controller.getData);

module.exports = router;
