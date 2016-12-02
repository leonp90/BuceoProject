const passport = require('passport');
app.use( cookieParser() );
app.use( session({ secret: 'supersecretworddonottelltoanyone'}) );
app.use( passport.initialize() );
app.use( passport.session() );

function userAuth(req, res){
	
	    passport.authenticate('local', { successRedirect: '/events',
                                     failureRedirect: '/local/login',
                                     failureFlash: "Usuario o contraseña incorrectos" })

}

module.exports = userAuth;