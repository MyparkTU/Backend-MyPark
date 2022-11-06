const functions = require('firebase-functions');
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router')
app.use(cors({ origin: true }));
app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', cors(), (req, res) => {
  console.log('Request from Firebase');
  res.send('Hello World! This is from express')
})

app.use('/router',cors(),  router)

exports.api = functions.https.onRequest(app);


