const {Router} = require('express');
const router = Router();

const { obtenerUsuarios, crearUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/index.controller')

router.get('/usuarios', obtenerUsuarios);
router.post('/usuarionuevo', crearUsuario);
router.put('/usuario/:id', actualizarUsuario);
router.delete('/usuario/:id', eliminarUsuario);
router.get('/usuario/:id', obtenerUsuario);

module.exports = router;