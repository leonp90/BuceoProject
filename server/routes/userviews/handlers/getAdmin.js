function getAdmin(req, res){
	let title = "Marenostrum - Admin";

	res.render('admin', {title});

}

module.exports = getAdmin;

	// res.render('admin', {title, root: path.join(__dirname, '../client')});
