const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;





const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  family: 4
};
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://kingrio13:mongodb@cluster0.mc5dh.mongodb.net/test?retryWrites=true&w=majority";


const mongoConnect = callback => {
  MongoClient.connect(
    //'mongodb+srv://kingrio13:mongodb1991@cluster0.mc5dh.mongodb.net/test?retryWrites=true&w=majority'
    MONGODB_URL, options
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
