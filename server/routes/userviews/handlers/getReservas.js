const mongoose = require('mongoose');
const Event = mongoose.model('Event');


function getReservas(req, res){
	let title = "Proximos eventos";
	
	Event.find({})
		.then((events)=>res.render('events', {
			title,
			events,
			isUserLoggued: res.locals.isUserLoggued
		}));

}

module.exports = getReservas;
