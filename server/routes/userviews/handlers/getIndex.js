function getIndex(req, res) {
	let title = "Marenostrum";
	res.render('index', {title})
}

module.exports = getIndex;