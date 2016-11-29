const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const collection = 'events'

var eventSchema = new Schema({
	activity: String,
	date: Date,
	time: Date,
	experience: String,
	space: Number,
	notes: String,
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] 
});
module.exports = mongoose.model('Event', eventSchema);

