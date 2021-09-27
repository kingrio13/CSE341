
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoConnect = require('./util/database').mongoConnect;

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











// const mongodb = require('mongodb');
// const mongoose = mongodb.MongoClient;


  const cors = require('cors') // Place this with other requires (like 'path' and 'express')

const corsOptions = {
    origin: "https://cse341projectrio.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

//app.listen(PORT, () => console.log(`Listening on ${PORT}`));

mongoConnect(() => {
  app.listen(3000);
});

// const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://kingrio13:mongodb1991@cluster0.mc5dh.mongodb.net/test?retryWrites=true&w=majority";



// mongoose
//   .connect(
//     MONGODB_URL, options
//   )
//   .then(result => {
//     console.log(result);
//     app.listen(PORT);
//   })
//   .catch(err => {
//     console.log(err);
//   });



// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://kingrio13:mongodb1991@cluster0.mc5dh.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   //console.log(collection);
//   app.listen(PORT, () => console.log(`Listening on ${PORT}`));
//   console.log('connected');
//   // perform actions on the collection object
//   client.close();
// });

