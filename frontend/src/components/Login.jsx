import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credencial, setCredencial] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(true);
  const usuarioRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioRef.current) {
      usuarioRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setMostrarAlerta(true);
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        credencial,
        contraseña,
      });
      if (res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
        setMensaje("¡Login exitoso!");
        setCredencial("");
        setContraseña("");
        setTimeout(() => {
          navigate('/dashboard');
        }, 800);
      } else {
        setMensaje("No se recibió un token válido");
      }
    } catch {
      setMensaje("Usuario o contraseña incorrectos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-400">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        {/* Panel Izquierdo: Login */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <div className="mb-8">
            <span className="inline-block w-8 h-8 bg-gradient-to-tr from-pink-400 to-orange-400 rounded-full mb-4"></span>
            <h2 className="text-3xl font-bold text-white mb-2">Bienvenido de nuevo</h2>
            <p className="text-white/80">Por favor, ingrese sus datos de cuenta</p>
          </div>
          {mensaje && mostrarAlerta && (
            <div
              className={`flex items-center text-sm font-bold px-4 py-3 mb-4 rounded shadow
                ${mensaje.includes('exitoso')
                  ? 'bg-green-400 text-white'
                  : 'bg-red-400 text-white'}`}
              role="alert"
            >
              {mensaje.includes('exitoso') ? (
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m5 2A9 9 0 11 1 10a9 9 0 0118 0z"/></svg>
              ) : (
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.364 17.364A9 9 0 112.636 1.636 9 9 0 0118.364 17.364zM10 14a1 1 0 100-2 1 1 0 000 2zm1-8H9v6h2V6z"/></svg>
              )}
              <p>{mensaje}</p>
              <span
                className="ml-auto cursor-pointer"
                onClick={() => setMostrarAlerta(false)}
              >
                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Cerrar</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white/80 mb-1">Usuario o Correo</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-full bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Usuario o correo electrónico"
                value={credencial}
                onChange={e => setCredencial(e.target.value)}
                required
                ref={usuarioRef}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    passRef.current && passRef.current.focus();
                  }
                }}
              />
            </div>
            <div>
              <label className="block text-white/80 mb-1">Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-full bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="••••••••"
                value={contraseña}
                onChange={e => setContraseña(e.target.value)}
                required
                ref={passRef}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    e.target.form && e.target.form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                  }
                }}
              />
            </div>
            <div className="flex items-center justify-between text-sm text-white/80">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Mantenerme conectado
              </label>
              <a href="#" className="hover:underline">¿Ovidaste la contraseña?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold text-lg shadow-lg hover:from-pink-500 hover:to-orange-500 transition"
              disabled={loading}
            >
              {loading ? "Ingresando..." : "Iniciar Sesión"}
            </button>
          </form>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-white rounded-full p-2 shadow hover:scale-110 transition"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-6 h-6" /></button>
            <button className="bg-white rounded-full p-2 shadow hover:scale-110 transition"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" /></button>
            <button className="bg-white rounded-full p-2 shadow hover:scale-110 transition"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-6 h-6" /></button>
          </div>
        </div>
        {/* Panel Derecho: Testimonio */}
        <div className="hidden md:flex flex-col justify-between bg-black/80 text-white p-10 w-96 relative">
          <div>
            <h3 className="text-2xl font-bold mb-4">Historias que inspiran</h3>
            <span className="text-5xl leading-none">“</span>
            <p className="mb-6 mt-2 text-white/80">
              "Estoy emocionado por aprender React y Express.js, este es mi primer proyecto con React y Express.js!"
            </p>
            <div className="mb-8">
              <span className="font-semibold">Alan Jhosel</span>
              <div className="text-xs text-white/60">Desarrollador Full Stack en StartUpX</div>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 bg-white/20 rounded-2xl p-4 w-64">
            <div className="font-bold text-black mb-1">¡Da el siguiente paso en tu carrera!</div>
            <div className="text-xs text-black/70 mb-2">Únete a miles de personas que ya encontraron su empleo ideal. ¿Qué esperas para postularte?</div>
            <div className="flex items-center">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" className="w-6 h-6 rounded-full border-2 border-white -ml-2" alt="user1" />
              <img src="https://randomuser.me/api/portraits/men/44.jpg" className="w-6 h-6 rounded-full border-2 border-white -ml-2" alt="user2" />
              <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-6 h-6 rounded-full border-2 border-white -ml-2" alt="user3" />
              <span className="ml-2 text-xs text-black/80">+5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 