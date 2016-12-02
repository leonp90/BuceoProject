const Account = require('../../../models/account');
const passport = require('passport');

function registerUser(req, res){
	const password = req.body.password;
	const admin = false;
	const { username, name, last, email, phone } = req.body
	

	 Account.register( new Account({ username, name, last, email, phone, admin }), password, (err, account) => {
      if (err) return res.render('register', { account : account });
      passport.authenticate('local')(req, res, () =>  res.redirect('/') );
  });
}

module.exports = registerUser;