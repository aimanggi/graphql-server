const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    email: { type: String, index: true, unique: true },
    password: String,
    token: String,
},
{
    timestamps: true
})


const userModel = mongoose.model('User', UserSchema);

module.exports = userModel;