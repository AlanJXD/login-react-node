const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/auth.middleware');
const usuariosController = require('../controllers/usuario.controller');

// GET /api/usuarios
router.get('/', usuariosController.obtenerUsuarios);

// GET /api/usuarios/:id
router.get('/:id', usuariosController.obtenerUsuarioPorId);

module.exports = router;