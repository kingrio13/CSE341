const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const errorController = require('../../controllers/prove03/error');

const adminRoutes = require('./prove03/admin');
const shopRoutes = require('./prove03/shop');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static(path.join(__dirname, 'public')));

router.use('/admin', adminRoutes);
router.use(shopRoutes);




module.exports = router;

