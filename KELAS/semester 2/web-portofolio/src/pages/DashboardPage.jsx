import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, User, Mail, Calendar, Shield, Home, Hexagon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const infoItems = [
    { icon: User, label: 'Nama', value: user?.name },
    { icon: Mail, label: 'Email', value: user?.email },
    { icon: Calendar, label: 'Bergabung', value: user?.created_at ? new Date(user.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '-' },
    { icon: Shield, label: 'Status', value: 'Aktif', color: 'text-green-400' },
  ];

  return (
    <div className="min-h-screen bg-darker relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-darker to-black -z-50"></div>
      <div className="absolute top-20 -left-32 w-72 h-72 bg-primary/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 -right-32 w-72 h-72 bg-cyan-400/8 rounded-full blur-[120px]"></div>

      {/* Top Bar */}
      <header className="glass border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/30 flex items-center justify-center">
              <Hexagon className="w-6 h-6 text-primary" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black tracking-widest text-white">FAN<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">TECH</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
              <Home className="w-4 h-4" /> Portfolio
            </Link>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Welcome */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Selamat datang, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">{user?.name || 'User'}</span>! 👋
            </h1>
            <p className="text-gray-400">Ini adalah dashboard pribadi kamu.</p>
          </div>

          {/* User Info Card */}
          <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> Informasi Akun
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoItems.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className={`text-sm font-medium ${item.color || 'text-white'}`}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-semibold text-white mb-4">Menu Cepat</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link to="/" className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-primary/40 hover:bg-slate-800/50 transition-all group">
                <Home className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Lihat Portfolio</span>
              </Link>
              <button onClick={handleLogout} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-red-500/40 hover:bg-red-500/5 transition-all group text-left">
                <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-red-300 transition-colors">Keluar dari Akun</span>
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardPage;
