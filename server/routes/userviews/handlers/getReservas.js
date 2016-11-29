const mongoose = require('mongoose');
const Event = mongoose.model('Event');


function getReservas(req, res){
	let title = "Marenostrum - Eventos";

	Event.find({})
		.then((events)=>res.render('events', {title, events}));

}

module.exports = getReservas;
