function login(req, res){
	res.redirect('/')
	passport.authenticate('local', { successRedirect: '/events',
                                     failureRedirect: '/local/login',
                                     failureFlash: "Usuario o contraseña incorrectos" })

}

module.exports = login;