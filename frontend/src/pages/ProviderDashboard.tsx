import React from 'react';
import MainLayout from '../layouts/MainLayout';

const ProviderDashboard: React.FC = () => {
  return (
    <MainLayout title="Dashboard Provider">
      <main className="px-4 pt-6 pb-24 space-y-6">
        {/* Earnings Card */}
        <section className="bg-primary text-white rounded-2xl p-6 shadow-lg shadow-primary/20">
          <p className="text-label-md opacity-80 uppercase tracking-wider">Total Pendapatan (Bulan Ini)</p>
          <h2 className="text-3xl font-black mt-1">Rp 4.250.000</h2>
          <div className="mt-4 flex gap-4 border-t border-white/20 pt-4">
            <div className="flex-1">
              <p className="text-[10px] opacity-70 uppercase">Pekerjaan Selesai</p>
              <p className="font-bold text-lg">24</p>
            </div>
            <div className="flex-1">
              <p className="text-[10px] opacity-70 uppercase">Rating Rata-rata</p>
              <div className="flex items-center gap-1">
                <p className="font-bold text-lg">4.9</p>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
          </div>
        </section>

        {/* Status Toggle */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-on-surface">Status: Online</span>
          </div>
          <button className="bg-gray-100 text-on-surface-variant px-4 py-2 rounded-lg font-label-md">
            Ubah
          </button>
        </div>

        {/* Active Order Section */}
        <section>
          <h3 className="font-h2 text-on-surface mb-3">Pesanan Aktif</h3>
          <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-primary font-bold text-label-sm uppercase">Sedang Berangkat</p>
                <h4 className="font-h3 text-on-surface">Servis AC Cuci Standard</h4>
              </div>
              <span className="text-on-surface-variant font-bold">Rp 75k</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant text-body-md mb-4">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>Jl. Kebon Jeruk No. 12 (1.2km)</span>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold shadow-md active:scale-95 transition-transform">
              Buka Navigasi
            </button>
          </div>
        </section>

        {/* Incoming Requests */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-h2 text-on-surface">Permintaan Baru</h3>
            <span className="text-primary font-bold text-label-md">Lihat Semua</span>
          </div>
          <div className="space-y-3">
            <IncomingOrderCard title="Perbaikan Kulkas" customer="Siti Aminah" distance="0.8km" price="Rp 120k" />
            <IncomingOrderCard title="Instalasi Lampu" customer="Budi Rejeki" distance="3.4km" price="Rp 50k" />
          </div>
        </section>
      </main>

      {/* Provider Nav Bar */}
      <nav className="fixed bottom-0 w-full z-50 rounded-t-xl border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex justify-around items-center h-16 pb-safe px-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
        <ProviderNavItem to="/provider/dashboard" icon="dashboard" label="Dashboard" active />
        <ProviderNavItem to="/provider/orders" icon="assignment" label="Pesanan" />
        <ProviderNavItem to="/provider/earnings" icon="payments" label="Pendapatan" />
        <ProviderNavItem to="/provider/profile" icon="person" label="Profil" />
      </nav>
    </MainLayout>
  );
};

const IncomingOrderCard: React.FC<{ title: string, customer: string, distance: string, price: string }> = ({ title, customer, distance, price }) => (
  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex justify-between items-center">
    <div>
      <h4 className="font-bold text-on-surface">{title}</h4>
      <p className="text-body-md text-on-surface-variant">{customer} • {distance}</p>
    </div>
    <div className="text-right">
      <p className="font-bold text-primary">{price}</p>
      <button className="mt-1 text-[10px] font-black text-green-600 uppercase border border-green-200 px-2 py-1 rounded">Terima</button>
    </div>
  </div>
);

const ProviderNavItem: React.FC<{ to: string, icon: string, label: string, active?: boolean }> = ({ to, icon, label, active }) => (
  <a className={`flex flex-col items-center justify-center flex-1 h-full transition-all active:scale-95 duration-150 ${active ? 'text-blue-600 font-bold scale-105' : 'text-gray-400'} hover:text-blue-50`} href="#">
    <span className="material-symbols-outlined">{icon}</span>
    <span className="font-inter text-[10px] font-medium">{label}</span>
  </a>
);

export default ProviderDashboard;
