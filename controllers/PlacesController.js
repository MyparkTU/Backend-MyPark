const Places = require('../models/PlaceModel');

// create place
exports.create = async (req, res) => {
    const newplace = new Places({
        place_id: req.body.place_id,
        name: req.body.name,
        latitude: req.body.latitude,
        longtitude: req.body.longtitude,
        status: req.body.status,
        quantity: req.body.quantity,
        type: req.body.type,
        description: req.body.description,
        review: req.body.review,
        img: req.body.img
    })
    console.log(`DATA FROM : /create \n ${newplace}`);
    newplace.save();
    res.status(201).json(newplace);
}

// get all place data
exports.findAll = async (req, res) => {
    Places.find((err, data) => {
        if (err) {
            return next(err)
        } else {
            console.log(`DATA FROM : /getAll \n ${data}`);
            res.json(data);
        }
    })
}

// get all for car
exports.findCar = async (req, res) => {
    Places.find({ type: 'car' }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            console.log(`DATA FROM : /get/car \n ${data}`);
            res.json(data)
        }
    })
}

// get all for motorcycle
exports.findMotorcycle = async (req, res) => {
    Places.find({ type: 'motorcycle' }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            console.log(`DATA FROM : /get/mortocycle \n ${data}`);
            res.json(data)
        }
    })
}

// get all for bicycle
exports.findBicycle = async (req, res) => {
    Places.find({ type: 'bicycle' }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            console.log(`DATA FROM : /get/bicycle \n ${data}`);
            res.json(data)
        }
    })
}

// get one by place_id
exports.findByplace_id = async (req, res) => {
    Places.findOne({ place_id: parseInt(req.params.place_id) }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            console.log(`DATA FROM : /get/place_id \n ${data}`);
            res.json(data);
        }
    })
}

exports.update = async (req, res) => {
    const { id } =  {report_id :req.params};
    await Report.updateOne({ id }, req.body);
    const updatedDoc = await Report.findOne(id);
    return res.status(200).json(updatedDoc);
}

exports.delete = async (req,res)=>{
    const { id } = { place_id : req.params};
    const deletedDog = await Places.deleteOne(id);
    return res.status(200).json(deletedDog);
}