const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const password = 'tamim107';

const uri = "mongodb+srv://tamimKarim:tamim107@cluster0.vvqgx.mongodb.net/organicDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})


client.connect(err => {
  const productCollection = client.db("organicDb").collection("products");


  app.post("/addProduct", (req, res) => {
    const product = req.body;
    console.log(product);
    productCollection.insertOne(product)
    .then(result => {
      console.log('data added successfully');
      res.send('Data added');
    })
  })


  // console.log('database connected');

  // client.close();
});


app.listen(3000);