const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const password = 'tamim107';

const uri = "mongodb+srv://tamimKarim:tamim107@cluster0.vvqgx.mongodb.net/organicDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})


client.connect(err => {
  const productCollection = client.db("organicDb").collection("products ");
  app.post("/addProduct", (req, res) => {
    collection.insertOne()
      .then(res => {
        console.log('One product added');
      })
  })


  // console.log('database connected');

  // client.close();
});


app.listen(3000);