import { useEffect, useState } from 'react';
import { login, getUsuarios } from '../api/auth';

function TestConnection() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Prueba de endpoint público
    getUsuarios()
      .then(data => setUsers(data))
      .catch(() => setMessage('Error obteniendo usuarios'));

    // Prueba de autenticación (usa credenciales válidas)
    login('alan_jhosel@hotmail.com', 'reymis21')
      .then(data => setMessage(`Login exitoso. Token: ${data.token.substring(0, 15)}...`))
      .catch(() => setMessage('Error en login'));
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h2>Prueba de Conexión Backend</h2>
      <p><strong>Estado:</strong> {message}</p>
      <h3>Usuarios desde API:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.nombre} ({user.correo})</li>
        ))}
      </ul>
    </div>
  );
}

export default TestConnection;