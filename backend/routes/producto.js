// Rutas para producto
const { Router } = require('express');


const productoController = require('../controllers/productoController');
const router=Router();
// api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);





module.exports = router;