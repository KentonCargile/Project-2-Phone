const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema ({
    name: String,
    price: Number,
    color: String,
    image: String,
    brand: String
});

const phoneModelVariable = mongoose.model('Phone', phoneSchema);

module.exports = phoneModelVariable;