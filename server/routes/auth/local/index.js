const express = require('express');
const passport = require('passport');
const Account = require('../../../models/account');

const router = express.Router();

router.get('/register', function(req, res) {
    res.render('register', { });
});


router.post('/register', function(req, res) {

  const { username, password } = req.body;

  Account.register( new Account({ username }), password, (err, account) => {
      if (err) return res.render('register', { account : account });
      passport.authenticate('local')(req, res, () =>  res.redirect('/') );
  });

});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login',
   passport.authenticate('local', { successRedirect: '/admin',
                                     failureRedirect: '/admin',
                                     failureFlash: "Usuario o contraseña incorrectos" })
);

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router