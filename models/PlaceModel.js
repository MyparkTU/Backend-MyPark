const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({

    places_id : {
        type : String
    },

    name : {
        type : String,
        required: [true, "Please enter a name."],
        unique: [true, "Name has already been used."],
    },

    latitude : {
        type : String,
        required: [true, "Please enter latitude."],
        unique: [true, "latitude is already exist."],
    },

    longtitude : {
        type : String,
        required: [true, "Please enter longtitude."],
        unique: [true, "longtitude is already exist."],
    },
    
    status : {
        type : String
    },

    quantity : {
        type : Number
    },

    type : {
        type : String,
        required: [true, "Please enter type."]
    },

    description : {
        type : String,
        required: [true, "Please enter description."]
    },

    review : {
        type : Number
    }

})

module.exports = mongoose.model.Places || mongoose.model('Places', PlaceSchema)