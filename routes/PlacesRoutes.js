
const express = require('express');
const router = express.Router();
const place = require('../controllers/PlacesController');

router.get("/", (req, res) => {
    res.json({ message: "Hello This Places Path" });
});

router.post("/create", place.create);


router.get("/get/car", place.findCar);

router.get("/get/motorcycle", place.findMotorcycle);

router.get("/get/bicycle", place.findBicycle)

module.exports = router;