
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const User = require('./models/prove04/user');
const Product = require('./models/prove04/product');


const mongoose = require('mongoose');



const app = express();

// Route setup. You can implement more in the future!
// const ta01Routes = require('./routes/ta01');






const routes = require('./routes');
app.use((req, res, next) => {
  User.findById('6152b121af45fb60f843e89d')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});



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






const cors = require('cors') // Place this with other requires (like 'path' and 'express')

const corsOptions = {
    origin: "https://cse341projectrio.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    family: 4
};




const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://kingrio13:UxBxg6zdjTsTy334@cluster0.mc5dh.mongodb.net/test?retryWrites=true&w=majority";





mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'rio',
          email: 'rio@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });


