const mongoose= require('mongoose');
const event = require('../models/event')
const user = require('../models/account')

mongoose.Promise = global.Promise;

const dbURI= 'mongodb://localhost:27017/marenostrum'
const db = mongoose.connection;


db.on('error', (err)=>{
	console.log(`Mongoose connection error: ${err}`);
});

db.on('disconnected', ()=>{
	console.log(`Mongoose connection disconnected`);
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

db.on('connected', () => console.log(`Mongoose default connection open to ${dbURI}`));



module.exports = db;