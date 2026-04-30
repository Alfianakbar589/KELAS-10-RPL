import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, Eye, EyeOff, User, Hexagon, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setErrors({});
    setLoading(true);
    try {
      await register(name, email, password, passwordConfirm);
      navigate('/dashboard');
    } catch (err) {
      if (err.response?.data?.errors) setErrors(err.response.data.errors);
      else setError(err.response?.data?.message || 'Registrasi gagal.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all";

  return (
    <div className="min-h-screen bg-darker flex items-center justify-center px-4 relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-darker to-black -z-50"></div>
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '3s' }}></div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-md my-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/30">
              <Hexagon className="w-7 h-7 text-primary" strokeWidth={2.5} />
            </div>
            <span className="text-3xl font-black tracking-widest text-white">FAN<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">TECH</span></span>
          </Link>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">Buat Akun Baru</h1>
            <p className="text-gray-400 text-sm">Daftar untuk mengakses dashboard</p>
          </div>

          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nama</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input id="register-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama lengkap" required className={inputCls} />
              </div>
              {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name[0]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input id="register-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" required className={inputCls} />
              </div>
              {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email[0]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input id="register-password" type={showPw ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimal 6 karakter" required className="w-full pl-11 pr-12 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                  {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-red-400 text-xs">{errors.password[0]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Konfirmasi Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input id="register-password-confirm" type={showPw ? 'text' : 'password'} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="Ulangi password" required className={inputCls} />
              </div>
            </div>

            <button id="register-submit" type="submit" disabled={loading} className="w-full py-3 px-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 mt-2">
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <><UserPlus className="w-5 h-5" />Daftar</>}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">Sudah punya akun? <Link to="/login" className="text-primary hover:text-cyan-400 font-medium">Masuk disini</Link></p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-gray-500 hover:text-gray-300 text-sm">← Kembali ke Portfolio</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
