import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Completion: React.FC = () => {
  return (
    <MainLayout title="Konfirmasi Selesai" showBack>
      <main className="pt-6 pb-32 px-container-margin max-w-2xl mx-auto space-y-6">
        {/* Success Header */}
        <section className="text-center space-y-stack-md py-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full mb-2">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h2 className="font-h1 text-h1">Pekerjaan Telah Selesai!</h2>
          <p className="font-body-md text-on-surface-variant">Pastikan semua pekerjaan telah dilakukan dengan baik sebelum melepas dana.</p>
        </section>

        {/* Provider Info Card */}
        <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-4">
          <img 
            alt="Provider Photo" 
            className="w-14 h-14 rounded-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtTdyqzqYow_4T1YcufrM4ax7Mv1tc98Mir7Xsh2JwzfaYRRBJo2Ec9Oy2OM455QvcI1JThCiPbaiK0bEA1c2y6lh6rsQoOB6_qRegBR3W3vkwl_Ez10VFYdoK7yo1f09j11DrawAAh697Q6dj0Ej5jjF-bpJLifiIN0myPJvbeyjxkKTHybvr5Rct0N5KiVVx6NyDb6ORUDGL48lWEyGGeHcFKtZ7-3jv7FKUgSa-XeJYSOenPw0nNR_Jz1LQnH4imwgvZd8frHo" 
          />
          <div className="flex-1">
            <h3 className="font-h3 text-h3 text-on-surface">Budi Santoso</h3>
            <p className="font-label-md text-on-surface-variant">Spesialis AC</p>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
            <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-sm text-on-surface">4.9</span>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 space-y-4">
          <h4 className="font-label-sm uppercase tracking-wider text-on-surface-variant">Ringkasan Layanan</h4>
          <div className="space-y-3">
            <SummaryItem icon="ac_unit" title="Servis AC Cuci & Tambah Freon" subtitle="2 Unit AC Split" />
            <SummaryItem icon="calendar_today" title="Senin, 24 Mei 2024" subtitle="10:00 WIB" />
            <SummaryItem icon="location_on" title="Jl. Sudirman No. 12" subtitle="Jakarta Selatan" />
          </div>
        </div>

        {/* Payment Box */}
        <div className="bg-primary-container text-on-primary-container rounded-xl p-5 shadow-lg flex justify-between items-center">
          <div>
            <p className="font-label-md opacity-90">Total Pembayaran</p>
            <p className="font-h1 text-h1">Rp 92.000</p>
          </div>
          <div className="text-right">
            <span className="material-symbols-outlined text-3xl opacity-50">account_balance_wallet</span>
            <p className="text-[10px] font-medium mt-1 uppercase tracking-tighter">Escrow Secured</p>
          </div>
        </div>

        {/* Rating Section */}
        <div className="bg-white rounded-xl p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 text-center space-y-4">
          <h4 className="font-h3">Bagaimana hasil pekerjaannya?</h4>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="material-symbols-outlined text-4xl text-yellow-500 cursor-pointer" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
            <span className="material-symbols-outlined text-4xl text-outline-variant cursor-pointer">star</span>
          </div>
          <div className="w-full">
            <textarea className="w-full bg-background border border-outline-variant rounded-lg p-3 font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50" placeholder="Tulis ulasan Anda (opsional)" rows={3}></textarea>
          </div>
        </div>

        {/* Tip Option */}
        <div className="space-y-3">
          <h4 className="font-label-sm uppercase tracking-wider text-on-surface-variant px-1">Berikan Tip (Opsional)</h4>
          <div className="flex flex-wrap gap-2">
            <TipButton label="Rp 5.000" />
            <TipButton label="Rp 10.000" active />
            <TipButton label="Rp 20.000" />
            <TipButton label="Lainnya" />
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 shadow-[0px_-4px_12px_rgba(0,0,0,0.05)]">
        <div className="max-w-2xl mx-auto">
          <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-h3 shadow-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            Selesaikan & Lepas Dana
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

const SummaryItem: React.FC<{ icon: string, title: string, subtitle: string }> = ({ icon, title, subtitle }) => (
  <div className="flex items-start gap-3">
    <span className="material-symbols-outlined text-primary">{icon}</span>
    <div>
      <p className="font-body-md font-semibold">{title}</p>
      <p className="font-label-md text-on-surface-variant">{subtitle}</p>
    </div>
  </div>
);

const TipButton: React.FC<{ label: string, active?: boolean }> = ({ label, active }) => (
  <button className={`px-4 py-2 rounded-full border ${active ? 'border-primary bg-primary-container/10 text-primary' : 'border-outline-variant bg-white text-on-surface'} font-label-md hover:border-primary hover:text-primary transition-colors`}>
    {label}
  </button>
);

export default Completion;
