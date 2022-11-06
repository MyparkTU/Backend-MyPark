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

router.get('/status', (req, res) => res.send('OK'));

router.get('/', async (req, res) => {
    const snapshot = await db.collection(colletion).get();
    const entities = []
    snapshot.forEach((doc) => {
        entities.push(doc.data());
    });
    res.json({
        results: entities,
    });
});

router.post('/', async (req, res) => {
    const data = {...req.body};
    const addRequest = await db.collection(colletion).add(data);
    console.log(addRequest);
    res.json({
        status: 'OK',
        data: {
            ...data,
            id: addRequest.id
        }
    });
});

router.put('/:id', async (req, res) => {
    const {
        params
    } = req;
    const {
        id
    } = params;

    const data = {...req.body};
    const docRef = await db.collection(colletion).doc(id);
    const updateRequest = await docRef.update({...data});
    const doc = await docRef.get()
    res.json({
        status: 'OK',
        data: doc.data()
    });
    
});

router.delete('/:id', async (req, res) => {
    const {
        params
    } = req;
    const {
        id
    } = params;

    const data = {...req.body};

    const docRef = await db.collection(colletion).doc(id);
    const updateRequest = await docRef.delete();
    res.sendStatus(204);
});

module.exports = router;