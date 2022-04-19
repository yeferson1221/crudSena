const { Router } = require('express');
const {getTodo} = require('../controllers/busquedas');
const router=Router();

//rutas de busqueda
router.get('/:busqueda', getTodo );

module.exports = router;