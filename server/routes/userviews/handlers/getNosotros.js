function getNosotros(req, res){
	let title = "Marenostrum - Nosotros";
	res.render('nosotros', {title});
}

module.exports = getNosotros;
