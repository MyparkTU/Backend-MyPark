const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({

    place_id : {
        type : String,
        required : [true]
    },

    name : {
        type : String,
        required : [true]
    },

    latitude : {
        type : String,
        required: [true]
    },

    longtitude : {
        type : String,
        required: [true]
    },
    
    status : {
        type : String,
        required: [true]
    },

    quantity : {
        type : Number,
        required: [true]
    },

    type : {
        type : [String],
        required: [true]
    },

    description : {
        type : String,
        required: [true]
    },

    review : {
        type : Number, min : 0, max : 5
    },

    img : {
        type : [String],
        required : [true]
    }

})

module.exports = mongoose.model.place || mongoose.model('Places', PlaceSchema)