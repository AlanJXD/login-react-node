const pool = require("../config/db");
const bcrypt = require('bcryptjs');

class Usuario {
  static async obtenerUsuarios() {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    return rows;
  }

  static async obtenerUsuarioPorId(id) {
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [
      id,
    ]);
    return rows;
  }

  static async autenticar(credencial, contraseña) {
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE nombre = ? OR correo = ?",
      [credencial, credencial]
    );

    if (rows.length === 0) {
      return null; 
    }

    const usuario = rows[0];

    const contraseñaValida = await bcrypt.compare(
      contraseña,
      usuario.contraseña
    );

    if (!contraseñaValida) {
      return null; 
    }
    const { contraseña: _, ...usuarioSinContraseña } = usuario;
    return usuarioSinContraseña;
  }
}

module.exports = Usuario;
