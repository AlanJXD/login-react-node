const Usuario = require('../models/usuario.model');

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ 
      error: 'Error al obtener los usuarios',
      detalles: error.message 
    });
  }
};

exports.obtenerUsuarioPorId = async (req, res) => {
    try {
      const usuarios = await Usuario.obtenerUsuarioPorId(req.params.id);
      res.json(usuarios);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ 
        error: 'Error al obtener los usuarios',
        detalles: error.message 
      });
    }
  };

  