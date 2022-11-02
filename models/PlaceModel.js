const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({

    places_id : {
        type : String
    },

    name : {
        type : String,
        required: [true, "Please enter a name."],
    },

    latitude : {
        type : String,
        required: [true, "Please enter latitude."],
    },

    longtitude : {
        type : String,
        required: [true, "Please enter longtitude."],
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

module.exports = mongoose.model.place || mongoose.model('Places', PlaceSchema)