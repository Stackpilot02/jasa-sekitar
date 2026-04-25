import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'CONSUMER'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await axios.post('http://localhost:3000/api/auth/register', formData);
      navigate('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat pendaftaran');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-black text-primary tracking-tight font-inter">Buat Akun</h1>
          <p className="mt-2 text-on-surface-variant font-body-md">Gabung dan temukan jasa terbaik di sekitar Anda</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          {/* Role Selector */}
          <div className="flex bg-surface-container-low p-1 rounded-2xl mb-8">
            <button
              onClick={() => setFormData({ ...formData, role: 'CONSUMER' })}
              className={`flex-1 py-2 rounded-xl text-label-md font-bold transition-all ${formData.role === 'CONSUMER' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant'}`}
            >
              Konsumen
            </button>
            <button
              onClick={() => setFormData({ ...formData, role: 'PROVIDER' })}
              className={`flex-1 py-2 rounded-xl text-label-md font-bold transition-all ${formData.role === 'PROVIDER' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant'}`}
            >
              Penyedia Jasa
            </button>
          </div>

          <form className="space-y-5" onSubmit={handleRegister}>
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium border border-red-100">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-label-md font-bold text-on-surface ml-1">Nama Lengkap</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1">
              <label className="text-label-md font-bold text-on-surface ml-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-label-md font-bold text-on-surface ml-1">No. Handphone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="0812xxxxxxx"
              />
            </div>

            <div className="space-y-1">
              <label className="text-label-md font-bold text-on-surface ml-1">Password</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="Min. 8 karakter"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 mt-4 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                'Daftar Sekarang'
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-50 text-center">
            <p className="text-on-surface-variant font-body-md">
              Sudah punya akun?{' '}
              <Link to="/login" className="text-primary font-bold hover:underline">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
