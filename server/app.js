const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routerEvents = require('./routes/events');
const routerEvent = require('./routes/event');
const routerUsers = require('./routes/users');
const routerUser = require('./routes/user');
const routerUserviews = require('./routes/userviews');

const app = express();

app.set('view engine', 'pug');
app.set('views', (path.join(__dirname, '../client/views')));
app.use( express.static( path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(app.router);

app.use('/api/events', routerEvents)
app.use('/api/event', routerEvent)
app.use('/api/users', routerUsers)
app.use('/api/user', routerUser)
app.use('/', routerUserviews)



module.exports = app;