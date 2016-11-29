const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const collection = 'users'

const userSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	username: {type: String, required: true},
	name: {
		first: {type: String, trim: true},
		last: {type: String, trim: true}
	},
	phone: Number
}, { collection });

userSchema.plugin( passportLocalMongoose );

module.exports = mongoose.model('User', userSchema);