import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Booking: React.FC = () => {
  return (
    <MainLayout title="Detail Pemesanan" showBack>
      <main className="max-w-3xl mx-auto px-container-margin py-stack-xl pb-32">
        <div className="space-y-stack-xl">
          {/* Service Summary Section */}
          <section className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant shadow-sm">
            <div className="flex gap-4">
              <img 
                alt="Service Image" 
                className="w-20 h-20 rounded-lg object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2PaH_KwQs-aL5f4JILttOHq8PTXErhDZk4jtLkyWvj_F6cjeBu3213tiXoCsgxCtvA5y5jeKUGgMKrm6ktzn4Pd_zqdQxw6p7QVtI1FMErp30YGmGExCVwj5TiYKHXfPkVlM__o0rSM5uA1UCrr6JPYA8jksdLggRqFssUjoOMMiRMSJ15JxaNyYdSJVxQxRIpaD53KrDm2qdtOd3OgLzsBOk31UxK__G3TiHIuKUG2kXQKLSnrJ7Trbq_WJGLcr5D13gF3buaY" 
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h2 className="font-h2 text-h2 text-on-surface">Servis AC Cuci & Tambah Freon</h2>
                  <span className="bg-surface-container text-primary font-label-sm px-2 py-1 rounded-full">Top Rated</span>
                </div>
                <p className="font-body-md text-on-surface-variant mt-1">Provider: Mitra Mandiri Teknik</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-md text-on-surface">4.9 (120+ Ulasan)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Date & Time Picker */}
          <section className="space-y-stack-md">
            <h3 className="font-h3 text-on-surface px-1">Pilih Waktu Kunjungan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-surface px-1 font-label-md text-outline">Tanggal</label>
                <div className="w-full flex items-center justify-between border border-outline p-stack-lg rounded-xl bg-surface-container-lowest">
                  <span className="font-body-lg">Senin, 24 Mei 2024</span>
                  <span className="material-symbols-outlined text-primary">calendar_month</span>
                </div>
              </div>
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-surface px-1 font-label-md text-outline">Waktu</label>
                <div className="w-full flex items-center justify-between border border-outline p-stack-lg rounded-xl bg-surface-container-lowest">
                  <span className="font-body-lg">10:00 - 11:00 WIB</span>
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="space-y-stack-md">
            <div className="flex justify-between items-center px-1">
              <h3 className="font-h3 text-on-surface">Lokasi Pengerjaan</h3>
              <button className="text-primary font-label-md">Ubah Alamat</button>
            </div>
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
              <div className="h-40 w-full bg-surface-container-highest relative">
                <img 
                  alt="Map snippet" 
                  className="w-full h-full object-cover opacity-50" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI-4VOAepp_dczmQyBaonhl_K2Nc38wGvzLSo4AOjEzaNKfdpc9Xeu3XbPpz0zMXDAdrSTsekMRFnafWo7Ucn3oSaB0ZAVaN7qfNC22lnC2ntVujg5_GOGVIEgzTRyvoCFpWPQ5_oIH1w-GCRYTrpDqRnubkpFTUAjAuCJ7a5yG-JcSZ84SiNguVw0ibE-IX70kFBnOHO3kMUoswNgrKllyuntH8Aer7DmYLLVqc8v2DVoPoRNWe0ZxSu6hKtgRTjf5TWXMK0zR1o" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
              </div>
              <div className="p-stack-lg flex gap-3">
                <span className="material-symbols-outlined text-outline">home</span>
                <div>
                  <p className="font-label-md font-bold text-on-surface">Rumah Utama</p>
                  <p className="font-body-md text-on-surface-variant">Jl. Kebon Jeruk No. 12, RT 05/RW 03, Jakarta Barat, 11530</p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method Section */}
          <section className="space-y-stack-md">
            <h3 className="font-h3 text-on-surface px-1">Metode Pembayaran</h3>
            <div className="space-y-stack-md">
              <PaymentOption id="gopay" label="GoPay" subtitle="Saldo: Rp 450.000" icon="account_balance_wallet" iconColor="text-primary" bgColor="bg-blue-50" checked />
              <PaymentOption id="ovo" label="OVO" subtitle="Saldo: Rp 12.500" icon="payments" iconColor="text-purple-600" bgColor="bg-purple-50" />
              <PaymentOption id="qris" label="QRIS" subtitle="Scan via aplikasi bank apa saja" icon="qr_code_2" iconColor="text-pink-600" bgColor="bg-pink-50" />
            </div>
          </section>

          {/* Cost Summary */}
          <section className="bg-surface-container-high p-stack-lg rounded-xl space-y-stack-md">
            <h3 className="font-label-md font-bold text-on-surface uppercase tracking-wider">Ringkasan Biaya</h3>
            <div className="space-y-stack-sm">
              <CostItem label="Biaya Servis (1 Unit)" value="Rp 75.000" />
              <CostItem label="Biaya Transportasi" value="Rp 15.000" />
              <CostItem label="Biaya Layanan" value="Rp 2.000" />
              <div className="pt-stack-md mt-stack-md border-t border-outline-variant flex justify-between items-center">
                <span className="font-label-md font-bold text-on-surface">Total Pembayaran</span>
                <span className="font-h2 text-primary">Rp 92.000</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Sticky Bottom Confirmation */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-4 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <div className="hidden md:block flex-1">
            <p className="font-label-sm text-on-surface-variant">Total Pembayaran</p>
            <p className="font-h2 text-primary">Rp 92.000</p>
          </div>
          <button className="flex-1 bg-primary text-on-primary font-label-md font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
            <span>Konfirmasi Pemesanan</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

const PaymentOption: React.FC<{ id: string, label: string, subtitle: string, icon: string, iconColor: string, bgColor: string, checked?: boolean }> = ({ id, label, subtitle, icon, iconColor, bgColor, checked }) => (
  <label className={`flex items-center justify-between p-stack-lg bg-surface-container-lowest border-2 ${checked ? 'border-primary' : 'border-outline-variant'} rounded-xl cursor-pointer hover:bg-surface-container-low transition-all`}>
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
        <span className={`material-symbols-outlined ${iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
      </div>
      <div>
        <p className="font-label-md font-bold text-on-surface">{label}</p>
        <p className="font-label-sm text-on-surface-variant">{subtitle}</p>
      </div>
    </div>
    <input checked={checked} readOnly className="text-primary focus:ring-primary w-5 h-5" name="payment" type="radio" value={id} />
  </label>
);

const CostItem: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between font-body-md text-on-surface-variant">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default Booking;
