const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    _id: new mongoose.Schema.ObjectId(),
    fname: String,
    lname: String,
    email: String,
    created_date: Date,});



module.exports = mongoose.model('Infos', infoSchema);
