import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <main className="relative min-h-[calc(100vh-120px)] pb-24">
        {/* Interactive Map Background Section */}
        <div className="absolute inset-0 z-0 h-[574px]">
          <div className="w-full h-full relative overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale opacity-40" 
              alt="Map" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44Ove3N3l28Yk_i7ZvY4WTvpvY2H-XcmuFAWxBcromyYvGoxPz8r2sAONEunjwx8rsO7g169jVLmrHX1d2MmMeZdGYiKGgVts0JsHbmIe7GJRT-Kh72bR3fOPHEWXQu39x-0OR4HwCJywhTBLDDv6SoUhyWRt9akInOtdqXrGvB6nd_KN5vCwPDgjJSbXfilztV-ZJ4SJb4fj6dQpb6VlejwD5CZZOdm38vOdni2mm3On1VQaPmEKs_bvsbtUKOHmECpsDv9SlSY"
            />
            <div className="absolute inset-0 map-gradient-overlay pointer-events-none"></div>
            
            <div className="absolute top-1/4 left-1/3 animate-bounce">
              <div className="bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-secondary text-white p-2 rounded-full shadow-lg border-2 border-white">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>ac_unit</span>
              </div>
            </div>
            <div className="absolute top-1/3 right-1/4">
              <div className="bg-tertiary text-white p-2 rounded-full shadow-lg border-2 border-white">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>cleaning_services</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-4 pt-6">
          <div className="w-full max-w-md mx-auto mb-stack-xl">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline">search</span>
              </div>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-full py-4 pl-12 pr-4 shadow-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-on-surface" 
                placeholder="Cari 'Tukang Cat' atau 'Servis AC'..." 
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-end mb-stack-xl">
            <button className="bg-primary text-on-primary w-12 h-12 rounded-full shadow-[0_8px_24px_rgba(0,74,198,0.3)] flex items-center justify-center active:scale-95 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
            </button>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-stack-md">
              <h2 className="font-h2 text-on-surface">Kategori Layanan</h2>
              <button className="text-primary font-label-md hover:underline">Lihat Semua</button>
            </div>
            <div className="flex overflow-x-auto gap-4 hide-scrollbar py-2 -mx-4 px-4">
              <CategoryItem icon="ac_unit" label="Servis AC" color="primary" bgColor="bg-blue-50 dark:bg-blue-900/30" borderColor="border-blue-100 dark:border-blue-800" />
              <CategoryItem icon="cleaning_services" label="Cleaning" color="secondary" bgColor="bg-green-50 dark:bg-green-900/30" borderColor="border-green-100 dark:border-green-800" />
              <CategoryItem icon="plumbing" label="Plumbing" color="tertiary" bgColor="bg-orange-50 dark:bg-orange-900/30" borderColor="border-orange-100 dark:border-orange-800" />
              <CategoryItem icon="handyman" label="Handyman" color="purple-600" bgColor="bg-purple-50 dark:bg-purple-900/30" borderColor="border-purple-100 dark:border-purple-800" />
              <CategoryItem icon="format_paint" label="Tukang Cat" color="error" bgColor="bg-red-50 dark:bg-red-900/30" borderColor="border-red-100 dark:border-red-800" />
            </div>
          </div>

          <div className="mt-stack-xl">
            <div className="flex items-center justify-between mb-stack-lg">
              <h2 className="font-h2 text-on-surface">Layanan Terdekat</h2>
              <button className="text-primary font-label-md hover:underline">Lihat Semua</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ServiceCard 
                title="Servis AC Berkala" 
                price="Rp 150rb" 
                rating="4.8" 
                distance="1.2 km" 
                description="Teknisi berpengalaman, cuci AC & tambah freon."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDUU43bFU389OL7PUxPdlw38BwpWIvHWW_UfJfFnM0EumkKGO6e0vmtIyQG72SICaq6j00fQmiUNQn_u5FSKV3cLFqXELTpZgLqVxmah0Eue0Ailiop-v32YrvLvq2JEelLVYJnIa_dpPnfhxkXlU6GvQRtdSX7OD6-c0v6CKmtjGHcjzt4F06vCeVpgQnYR3zHXel6OPvYYYHNI67NV-6axdq19noL8z_OKc0V_1TjRJbVjvC-t74QGWU5UMOIuKh1T7XRVXipf64"
              />
              <ServiceCard 
                title="Pembersihan Rumah" 
                price="Rp 85rb" 
                rating="4.9" 
                distance="0.8 km" 
                description="Deep cleaning untuk apartemen & rumah minimalis."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAlXTFNwlim-X8nSBs6ne0HO0irzcYanvbyt_0L5q9uo7JcQFWf36y3sA88R-RuMsDCPZdZ5ZMo0YPMVN7gWEV8GxWX6UEuAGi2tg_LsH2do6BmK5DABp0nz91StbW5qYdDShaksmaXIj_T-ZsO6hee0TR-2hVRvhuVwQwBLMz1nBG-xIU_FFh0Rc8f9Wu_fNGKZ7bG71x-ZPBOVM-sy-VhsrQFW7m0Jwm7Wru-es8W2mRFlh6bwMDFnOep6zJicgj99Br6P_Kgfmc"
              />
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-20 right-4 z-40">
        <button className="bg-primary-container text-on-primary-container flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:brightness-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined">add</span>
          <span className="font-label-md">Pesan Sekarang</span>
        </button>
      </div>
    </MainLayout>
  );
};

const CategoryItem: React.FC<{ icon: string, label: string, color: string, bgColor: string, borderColor: string }> = ({ icon, label, color, bgColor, borderColor }) => (
  <div className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer">
    <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center border ${borderColor} group-hover:scale-105 transition-transform`}>
      <span className={`material-symbols-outlined text-${color} text-3xl`}>{icon}</span>
    </div>
    <span className="font-label-md text-on-surface-variant">{label}</span>
  </div>
);

const ServiceCard: React.FC<{ title: string, price: string, rating: string, distance: string, description: string, image: string }> = ({ title, price, rating, distance, description, image }) => (
  <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative h-40">
      <img className="w-full h-full object-cover" alt={title} src={image} />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
        <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="font-label-md text-on-surface">{rating}</span>
      </div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-h3 text-on-surface">{title}</h3>
        <span className="text-primary font-bold">{price}</span>
      </div>
      <p className="text-on-surface-variant text-body-md mb-3">{description}</p>
      <div className="flex items-center gap-2 text-outline text-label-md">
        <span className="material-symbols-outlined text-sm">near_me</span>
        <span>{distance} dari lokasi Anda</span>
      </div>
    </div>
  </div>
);

export default Home;
