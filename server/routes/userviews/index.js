const express = require('express');
const passport = require('passport');
const router = express.Router();

const getIndex = require('./handlers/getIndex');
const getNosotros = require('./handlers/getNosotros');
const getReservas = require('./handlers/getReservas');
const getAdmin = require('./handlers/getAdmin');


// User routes
router.get('/',								getIndex);
router.get('/nosotros',						getNosotros);
router.get('/reservas',						getReservas);

// Admin routes
router.get('/admin*', /*adminAuth,*/ getAdmin);



module.exports = router;
