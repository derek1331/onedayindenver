const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    rating: {type: Number, required: true},
    time: {type: Number, required: true},
    drive: {type: Number, required: true},
    address: {type: String, required: true},
    lat: {type: Number, required: true},
    long: {type: Number, required: true},
    attributes: {type: Array, required: true},
    url: {type: String, required: true},
    advice: String,
    img: String,
    description: {type: String, required: true},
    date: Date
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;