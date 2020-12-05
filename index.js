const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const password = 'tamim107';

const uri = "mongodb+srv://tamimKarim:tamim107@cluster0.vvqgx.mongodb.net/organicDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
app.get('/', (req, res) => {
    res.send('hello I am working')
})


client.connect(err => {
  const collection = client.db("organicDb").collection("products ");
  // perform actions on the collection object
  client.close();
});


app.listen(3000);