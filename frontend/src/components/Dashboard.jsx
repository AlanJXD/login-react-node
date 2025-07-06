import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#23243a] via-[#18192b] to-[#1a1b2e]">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#23243a] via-[#28294a] to-[#18192b] flex flex-col p-6 text-white min-h-screen shadow-2xl">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-widest bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">TaskFlow</span>
          <button onClick={handleLogout} className="ml-2 px-3 py-1 rounded bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-semibold shadow hover:from-pink-600 hover:to-orange-500 transition">Cerrar sesión</button>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#28294a] transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Tareas
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#28294a] transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8a9 9 0 1118 0z" /></svg>
                Mensajes
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#28294a] transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" /></svg>
                Favoritos
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#28294a] transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
                Equipos
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <div className="text-xs text-gray-400 mb-2">Categorías</div>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-[#28294a] text-sm">
                <span className="bg-orange-500 w-2 h-2 rounded-full inline-block"></span> Personales
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-[#28294a] text-sm">
                <span className="bg-blue-500 w-2 h-2 rounded-full inline-block"></span> Trabajo
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-[#23243a]/80 via-[#28294a]/60 to-[#1a1b2e]/80">
        {/* Token */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-400/20 via-blue-500/10 to-purple-500/20 border border-blue-500/30 text-xs text-blue-200 break-all shadow-lg">
          <span className="font-bold text-blue-300">Token de sesión:</span> {token}
        </div>
        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-400/30 via-[#28294a] to-blue-500/30 rounded-2xl p-6 text-white shadow flex flex-col justify-between">
            <div className="text-sm text-gray-300 mb-2">Tareas Completadas</div>
            <div className="text-3xl font-bold mb-1">24</div>
            <div className="text-green-300 text-xs">+4 esta semana</div>
          </div>
          <div className="bg-gradient-to-br from-orange-400/30 via-[#28294a] to-pink-500/30 rounded-2xl p-6 text-white shadow flex flex-col justify-between">
            <div className="text-sm text-gray-300 mb-2">Tareas Pendientes</div>
            <div className="text-3xl font-bold mb-1">8</div>
            <div className="text-red-300 text-xs">-2 esta semana</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/30 via-[#28294a] to-blue-500/30 rounded-2xl p-6 text-white shadow flex flex-col justify-between">
            <div className="text-sm text-gray-300 mb-2">Progreso</div>
            <div className="flex items-center gap-2">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-xs">75%</span>
            </div>
          </div>
        </div>
        {/* Actividad reciente */}
        <div className="bg-gradient-to-br from-[#28294a] via-[#23243a] to-[#18192b] rounded-2xl p-6 text-white shadow mb-8">
          <div className="flex items-center mb-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <div className="font-semibold">Alan Jhosel</div>
              <div className="text-xs text-gray-400">Hace 2 horas</div>
            </div>
          </div>
          <div className="mb-2">¡Bienvenido a tu panel de tareas! Aquí podrás ver el resumen de tu actividad y gestionar tus pendientes.</div>
          <div className="flex gap-2 mt-2">
            <span className="bg-orange-500 text-xs px-2 py-1 rounded-full">#tareas</span>
            <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">#productividad</span>
          </div>
        </div>
        {/* Sugerencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/20 via-[#28294a] to-purple-500/20 rounded-2xl p-6 text-white shadow flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-semibold">María Pérez</div>
              <div className="text-xs text-gray-300">Te ha asignado una nueva tarea</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-400/20 via-[#28294a] to-pink-500/20 rounded-2xl p-6 text-white shadow flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-semibold">Carlos Ruiz</div>
              <div className="text-xs text-gray-300">Comentó en tu tarea</div>
            </div>
          </div>
        </div>
      </main>
      {/* Panel derecho (opcional) */}
      <aside className="hidden lg:block w-72 bg-gradient-to-b from-[#23243a] via-[#28294a] to-[#18192b] p-6 text-white min-h-screen shadow-2xl">
        <div className="mb-8">
          <div className="text-xs text-gray-400 mb-2">Comunidades</div>
          <ul className="space-y-2">
            <li><span className="flex items-center gap-2"><span className="bg-purple-500 w-3 h-3 rounded-full"></span> Frontend</span></li>
            <li><span className="flex items-center gap-2"><span className="bg-blue-500 w-3 h-3 rounded-full"></span> Backend</span></li>
            <li><span className="flex items-center gap-2"><span className="bg-orange-500 w-3 h-3 rounded-full"></span> Productividad</span></li>
          </ul>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-2">Personas sugeridas</div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><img src="https://randomuser.me/api/portraits/men/46.jpg" className="w-6 h-6 rounded-full" alt="" /> <span>Juan López</span></li>
            <li className="flex items-center gap-2"><img src="https://randomuser.me/api/portraits/women/47.jpg" className="w-6 h-6 rounded-full" alt="" /> <span>Lucía Gómez</span></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard; 