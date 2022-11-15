const axios = require("axios");
const express = require('express')
const admin = require('firebase-admin');

const router = express.Router();
const colletion = "devices";

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mypark-app-default-rtdb.firebaseio.com"
});
const db = admin.firestore();

exports.readall = async (req, res) => {

  const snapshot = await db.collection(colletion).get();
  const entities = []
  snapshot.forEach((doc) => {
    entities.push(doc.data());
  });
  res.json({
    results: entities,
  });

};

exports.findByid = async (req, res) => {


  const snapshot = await db.collection(colletion).get();
  const entities = []
  snapshot.forEach((doc) => {
    entities.push(doc.data());
  });
  console.log(entities[0].places_id)
  
  var data;

  for (i = 0; i < 2; i++) {
    if (parseInt(entities[i].places_id) == parseInt(req.params.id)) {
      data = entities[i]
    }
  }
  if (data) {
    res.send(data)
  } else {
    res.send({ message: "note found" })
  }

  
}