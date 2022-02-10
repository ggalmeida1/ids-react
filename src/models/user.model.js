const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { number } = require('yargs');

const DataSchema = new mongoose.Schema({
    name_user: String,
    email_user: String,
    type_user: { type:Number, default:1},
    password_user: String,
}, {
    timestamps:true, //createdAt and updatedAt
})

DataSchema.pre('save', function (next) {
    //before the password to be saved we need to cryptograph it
    if(!this.isModified("password_user")) {
        return next();
    }
    //this.password_user = bcrypt.hashSync(this.password_user, 10); //this is not workin :(
    next();

});

const users = mongoose.model('Users',DataSchema);

module.exports = users;