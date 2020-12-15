const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: String,
    password: Number
});

const userModelVariable = mongoose.model('User', userSchema);

module.exports = userModelVariable;