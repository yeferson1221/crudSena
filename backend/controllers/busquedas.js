const { response } = require('express');

const Producto = require('../models/Producto');



const getTodo = async(req, res = response ) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i' );

    const [producto] = await Promise.all([
        Producto.find({ nombre: regex })
     
    ]);

    res.json({
        ok: true,
        producto,
      
    })

}




module.exports = {
    getTodo,
    
}

