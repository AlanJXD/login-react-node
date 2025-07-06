const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');

router.post('/login', authController.autenticarUsuario);

module.exports = router;