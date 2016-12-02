const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const logger = require('morgan');





const routerEvents = require('./routes/events');
const routerEvent = require('./routes/event');
const routerUserviews = require('./routes/userviews');
const routerAuthLocal = require('./routes/auth/local')

const app = express();

const thereIsDotEnv = fs.existsSync('.env')
if ( thereIsDotEnv ) require('dotenv').load()


app.set('view engine', 'pug');
app.set('views', (path.join(__dirname, '../client/views')));
app.use( express.static( path.join(__dirname, '../client')));
app.use( cookieParser() );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use( session({ secret: 'supersecretworddonottelltoanyone'}) );
app.use( logger('dev') );

app.use( passport.initialize() );
app.use( passport.session() );
app.use( flash() );

const AUTH = 'local';


	var Account = require('./models/account');
	passport.use( new LocalStrategy( Account.authenticate() ) );
	passport.serializeUser( Account.serializeUser() );
	passport.deserializeUser( Account.deserializeUser() );

	app.use('/local', routerAuthLocal)



app.use('/api/events', routerEvents);
app.use('/api/event', routerEvent);

// app.use('/api/users', routerUsers)
// app.use('/api/user', routerUser)
app.use('/', routerUserviews)


module.exports = app;