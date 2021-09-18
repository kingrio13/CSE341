const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminData = require('./prove02routes/admin');
const shopRoutes = require('./prove02routes/shop');

app
.set('view engine', 'ejs')
.set('views', 'prove02views')
.use(bodyParser.urlencoded({ extended: false }))
.use(express.static(path.join(__dirname, 'prove02public')));


app
.use('/admin', adminData.routes)
.use(shopRoutes)
.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path:path });
});

app.listen(3000);
