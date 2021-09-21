
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup. You can implement more in the future!
// const ta01Routes = require('./routes/ta01');
const routes = require('./routes');






app
  .use('/', routes)
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(bodyParser({ extended: false })) 
  .get('/', (req, res, next) => {
    res.render('pages/index', {
      title: 'Welcome to my CSE341 repo',
      path: '/',
    });
  });





app
.use((req, res, next) => {
  // 404 page
  res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
});




  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
