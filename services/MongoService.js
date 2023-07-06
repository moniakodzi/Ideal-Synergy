import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

client.connect(function(err) {
  if (err) {
    console.error('Error connecting to MongoDB', err);
  } else {
    console.log('Connected to MongoDB');
  }
});

const database = client.db("IdealSynergy")


export default database