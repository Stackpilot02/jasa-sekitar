import React from 'react';
import MainLayout from '../layouts/MainLayout';

const ProviderProfile: React.FC = () => {
  return (
    <MainLayout title="Detail Teknisi" showBack>
      <main className="pb-32">
        {/* Profile Header Section */}
        <section className="bg-white px-4 pt-6 pb-8 border-b border-gray-100">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img 
                alt="Provider Profile" 
                className="w-24 h-24 rounded-full object-cover border-4 border-surface-container shadow-md" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv6kSlGEJEu0cunc5_076NKCFvy8fSwG15jRlU1gvAjTRgr_w9RRvMDr6XoY7oy_o9m8QN39X-qXL9AqMpCu3uXtKG9kzC-aXVQyQasX6gG-Os3frW2UybkIMGE4ghZZFthGKIMYZMapq5p5hg7u8XZxt-ZhkO_STj7_5c8qdhGWYhgJMEGXB3agFKe-w3J5d7m2qMczTTVwIF4ku8fPQGAnLRx2VOdfIXLXplIs-EDtLVE8sIwtGKnLFvQG8f3E0cMT-AKJ8_8GE" 
              />
              <div className="absolute bottom-1 right-1 bg-primary p-1 rounded-full border-2 border-white">
                <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <h2 className="font-h1 text-h1 mt-4 text-center">Budi Santoso</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-orange-500 font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                4.9
              </span>
              <span className="text-on-surface-variant text-label-md">(124 Ulasan)</span>
              <span className="text-gray-300">•</span>
              <span className="text-secondary font-semibold text-label-md">Terverifikasi</span>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="bg-surface-container text-primary px-3 py-1 rounded-full text-label-sm font-bold uppercase">Spesialis Elektronik</span>
              <span className="bg-surface-container text-primary px-3 py-1 rounded-full text-label-sm font-bold uppercase">10+ Tahun</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 mt-8 border-t border-gray-50 pt-6">
            <div className="text-center border-r border-gray-100">
              <p className="text-h3 font-h3 text-primary">2.4k</p>
              <p className="text-on-surface-variant text-label-md">Selesai</p>
            </div>
            <div className="text-center border-r border-gray-100">
              <p className="text-h3 font-h3 text-primary">98%</p>
              <p className="text-on-surface-variant text-label-md">Puas</p>
            </div>
            <div className="text-center">
              <p className="text-h3 font-h3 text-primary">15m</p>
              <p className="text-on-surface-variant text-label-md">Respon</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-6 px-4">
          <h3 className="font-h2 text-h2 mb-2">Tentang</h3>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Ahli perbaikan peralatan rumah tangga dengan pengalaman lebih dari 10 tahun. Spesialis dalam perbaikan AC, Kulkas, dan Mesin Cuci semua merk. Mengutamakan kejujuran, ketepatan waktu, dan garansi pengerjaan.
          </p>
        </section>

        {/* Expertise Chips */}
        <section className="mt-8 px-4">
          <h3 className="font-h2 text-h2 mb-3">Keahlian Utama</h3>
          <div className="flex flex-wrap gap-2">
            <ExpertiseChip icon="ac_unit" label="Service AC" />
            <ExpertiseChip icon="kitchen" label="Perbaikan Kulkas" />
            <ExpertiseChip icon="local_laundry_service" label="Mesin Cuci" />
            <ExpertiseChip icon="electrical_services" label="Instalasi Listrik" />
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="mt-10 px-4">
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-h2 text-h2">Portofolio Pengerjaan</h3>
            <span className="text-primary font-semibold text-label-md cursor-pointer">Lihat Semua</span>
          </div>
          <div className="grid grid-cols-2 gap-3 h-64">
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img className="w-full h-full object-cover" alt="Portfolio 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr6VSKcSWaCKJX7C90diRbJJxyzE54EtZQCQnIftvDa5_4l-eIb1imUKAHBaXwLZLbVoeoLR79HvKDwlbOrPQQLK5xTjKIj_avqbscAvNSX1FN0uw6OUIDA_RiG_7bVJsnhSSz24DiJ9B59lTnRFmFOxkxLK8WOBH1jGH-8Fq4Q1d0XJrDO_CI3P9WZHpbgw5SdFR93Iv9BAbowJ38Y_WMQUgqm3H6P77ujJz7YZZXg_at-7r77lfP3MoIkp0y6Q2j-e0a0zoeIRA" />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img className="w-full h-full object-cover" alt="Portfolio 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJR9WKRgX0cSP8zQioDi30lcu8MLp1HSgp7sfGb4Xsi9HbbGjoxHBLnbb7RNtnvZx_ytqCZAFVeNzL36Tios08QyhF8pdHJntwUEefBShMc4h9UjF1sDLps6Y7z8zHHuqaSjz_taSkFiPl0uwtkg6oPq2NvUjWBvgnt0z7Y_s9odvVLMjFneAfAqk-OoIs4wgwQ38ts2TFPrwKGZfeoxcIKIshX_QUvRwwvFaUWeEQ6J8LUkWq9MvpMOuqgtpIFlmVUMhWKEYrNEQ" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm relative">
                <img className="w-full h-full object-cover" alt="Portfolio 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFSLjAgp614d_BhkLXndLgnu9nXyTxB-Ibf7s8d4J_BhfHLiiusGB-ryLvRey-Gt-hRGoDiMB2cPxT3VVvZS4PqRvNbpWY0XvUKCej9ZlLDpGYqBm6lE9G1j-TcEIVNoM_nloiKFJb0fOk1SD9K3W7TcRVGNjdfxP97Y0FaP9R7JZEu-cbA9KAwV40FoQj1kW6fvIveJOYeMv5cLLoEkhiodDO42jYmfvGnsYM-XU3y4Xe9tdhKV7hlHNvfokNP1DKpMHskycd7zo" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold">+12 Foto</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mt-10 px-4">
          <h3 className="font-h2 text-h2 mb-4">Ulasan Teratas</h3>
          <div className="space-y-4">
            <ReviewCard name="Andi Nugraha" time="2 hari yang lalu" rating={5} text="Pak Budi sangat profesional. AC saya yang tadinya berisik sekarang jadi dingin dan halus suaranya. Sangat direkomendasikan!" initials="AN" />
            <ReviewCard name="Siti Pratama" time="1 minggu yang lalu" rating={5} text="Datang tepat waktu, pengerjaan rapi sekali. Mesin cuci langsung beres dalam 1 jam." initials="SP" />
          </div>
          <button className="w-full mt-4 py-3 border border-outline-variant rounded-xl text-primary font-bold text-label-md active:bg-gray-50 transition-colors">
            Tampilkan Semua Ulasan
          </button>
        </section>
      </main>

      {/* Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 z-50 flex items-center gap-4">
        <div className="flex-shrink-0">
          <p className="text-label-sm text-on-surface-variant font-medium">Estimasi Biaya</p>
          <p className="text-h3 font-h3 text-on-surface">Rp 50rb<span className="text-label-md font-normal text-on-surface-variant">/jam</span></p>
        </div>
        <button className="flex-grow bg-primary text-white font-bold h-14 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-all">
          <span className="material-symbols-outlined">calendar_today</span>
          Pesan Sekarang
        </button>
      </div>
    </MainLayout>
  );
};

const ExpertiseChip: React.FC<{ icon: string, label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white border border-outline-variant px-4 py-2 rounded-xl">
    <span className="material-symbols-outlined text-primary">{icon}</span>
    <span className="text-body-md font-medium">{label}</span>
  </div>
);

const ReviewCard: React.FC<{ name: string, time: string, rating: number, text: string, initials: string }> = ({ name, time, rating, text, initials }) => (
  <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center font-bold text-primary">{initials}</div>
        <div>
          <p className="font-bold text-body-md">{name}</p>
          <p className="text-label-md text-on-surface-variant">{time}</p>
        </div>
      </div>
      <div className="flex text-orange-500">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        ))}
      </div>
    </div>
    <p className="mt-3 text-body-md text-on-surface-variant leading-relaxed italic">
      "{text}"
    </p>
  </div>
);

export default ProviderProfile;
