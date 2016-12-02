function userLogout(req, res){
	
	req.logout();
    res.redirect('/');

}

module.exports = userLogout;