const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const collection = 'accounts'

const Account = new Schema({
	username: String,
	password: String
}, { collection });

Account.plugin( passportLocalMongoose );

module.exports = mongoose.model('Account', Account);