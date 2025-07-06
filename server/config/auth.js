const Usuario = require('../models/usuario.model');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const userId = await Usuario.create(req.body);
    res.status(201).json({ success: true, userId });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

exports.login = async (req, res) => {
  const { correo, contraseña } = req.body;
  
  const usuario = await Usuario.findByEmail(correo);
  if (!usuario) return res.status(401).json({ error: 'Credenciales inválidas' });

  const isValid = await bcrypt.compare(contraseña, usuario.contraseña);
  if (!isValid) return res.status(401).json({ error: 'Credenciales inválidas' });

  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
  res.json({ token, usuario: { nombre: usuario.nombre, correo: usuario.correo } });
};