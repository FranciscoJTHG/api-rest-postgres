const { Router } = require('express');
const router = Router();

const { obtenerHora } = require('../controllers/index.controllers');

router.post('/hora', obtenerHora);

module.exports = router;