const Event = require('../../../models/event')

function createEvent(req, res) {

		// const {activity, date, time, experience, space, notes, users} = req.body;

		const newEvent = new Event(req.body);

		
			newEvent.save((err, event) =>{
				if(err) return (err)
					console.log("Event saved")
			})
			res.status(500)
}

module.exports = createEvent;