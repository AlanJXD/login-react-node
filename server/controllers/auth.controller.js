const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario.model');

exports.autenticarUsuario = async (req, res) => {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });
      }
  
      const { credencial = '', contraseña = '' } = req.body;
  
      if (!credencial.trim() || !contraseña.trim()) {
        return res.status(400).json({ 
          error: 'Credenciales incompletas',
          detalles: 'Se requieren ambos campos: credencial y contraseña' 
        });
      }
  
      const usuario = await Usuario.autenticar(credencial, contraseña);
  
      if (!usuario) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      const token = jwt.sign(
        { id: usuario.id, rol: usuario.rol },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
  
      res.json({ 
        mensaje: 'Autenticación exitosa',
        token,
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          correo: usuario.correo,
          rol: usuario.rol
        }
      });
  
    } catch (error) {
      console.error('Error en autenticación:', error);
      res.status(500).json({ 
        error: 'Error al autenticar usuario',
        detalles: error.message 
      });
    }
  };