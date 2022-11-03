
const express = require('express');
const router = express.Router();
const place = require('../controllers/PlacesController');

router.get("/", (req, res) => {
    res.json({ message: "Hello This Places Path" });
});

// for create newPlace to db
router.post("/create", place.create);

// get all data
router.get("/all", place.findAll);

// get all for cars
router.get("/car", place.findCar);

// get all for motorcycles
router.get("/motorcycle", place.findMotorcycle);

// get all for bicycles
router.get("/bicycle", place.findBicycle)

// get the specific one
router.get("/place_id/:place_id", place.findByplace_id)

router.delete("/delete/:id", place.delete)

module.exports = router;