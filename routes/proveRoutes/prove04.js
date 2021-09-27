const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const errorController = require('../../controllers/prove04/error');

const User = require('../../models/prove04/user');

const adminRoutes = require('./prove04/admin');
const shopRoutes = require('./prove04/shop');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static(path.join(__dirname, 'public')));


router.use((req, res, next) => {
    User.findById('6151c3eb62e1e0c427fca707')
      .then(user => {
        req.user = new User(user.name, user.email, user.cart, user._id);
        next();
      })
      .catch(err => console.log(err));
  });



router.use('/admin', adminRoutes);
 router.use(shopRoutes);




module.exports = router;



