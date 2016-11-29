const express = require('express');
const router = express.Router();

const getIndex = require('./handlers/getIndex');
const getNosotros = require('./handlers/getNosotros');
const getReservas = require('./handlers/getReservas');
const getAdmin = require('./handlers/getAdmin');

router.get('/', getIndex);
router.get('/nosotros', getNosotros);
router.get('/reservas', getReservas);
router.get('/admin', getAdmin);

module.exports = router;