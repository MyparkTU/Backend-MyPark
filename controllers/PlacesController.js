const Places = require('../models/PlaceModel');

// create place
exports.create = async (req, res) => {
    const newplace = new Places ({
        name : req.body.name,
        latitude : req.body.latitude,
        longtitude : req.body.longtitude,
        status : req.body.status,
        quantity : req.body.quantity,
        type : req.body.type,
        description : req.body.description,
        review : req.body.review
    })
    console.log(newplace);
    newplace.save();
    res.send(newplace);
}

// get all place data
exports.findAll = async (req, res) => {
    Places.find((err, data) => {
        if (err) {
            return next(err)
        } else {
            console.log(data);
            res.send(data)
        }
    })
}

// get all for car
exports.findCar = async (req, res) => {
    Places.find({ type : 'car' }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            console.log(data);
            res.send(data)
        }
    })
}

// get all for motorcycle
exports.findMotorcycle = async (req, res) => {
    Places.find({ type : 'motorcycle' }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            console.log(data);
            res.send(data)
        }
    })
}

// get all for bicycle
exports.findBicycle = async (req, res) => {
    Places.find({ type : 'bicycle' }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            console.log(data);
            res.send(data)
        }
    })
}