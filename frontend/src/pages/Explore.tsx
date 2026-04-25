import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Explore: React.FC = () => {
  return (
    <MainLayout>
      <main className="max-w-md mx-auto">
        <div className="px-4 pt-6 pb-4 bg-white dark:bg-gray-900">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-h2 text-on-surface">Hasil Pencarian</h2>
                <p className="font-body-md text-outline">Menampilkan 24 teknisi terbaik</p>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container text-primary active:scale-95 transition-transform">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              <FilterChip icon="star" label="Rating" active />
              <FilterChip icon="distance" label="Jarak" />
              <FilterChip icon="payments" label="Harga" />
              <FilterChip icon="verified" label="Terverifikasi" />
            </div>
          </div>
        </div>

        <div className="px-4 space-y-4 py-4">
          <ProviderCard 
            name="Budi - Specialist AC" 
            rating="4.8" 
            distance="1.2km" 
            price="Rp75.000" 
            verified 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA-UGmBjPQFnThTB53-AFwcdnz7bo7sjl7kxGxWntFX4Sbb8lxeZ9RsW1NmXFoINYW35thanS4FR_2CJmFWyuWbA03-RXOfhk7KQ3bYv-ajTUbuoa0goQ34JqdEVmHTenLeBi4YflVt96WaFT8smwZNcDR_GWfoCm-f-sGNb6B4jGZA2erL2bok2RTwuRKgwY4yeZSqLzNO2WGms_gvShGrgMOywpx0Jr2-3c04u7aXoXLBbUjgV7jNxa6UV-AGntSTZjsnPp6NhOY"
          />
          <ProviderCard 
            name="Agus Service Listrik" 
            rating="4.9" 
            distance="2.4km" 
            price="Rp120.000" 
            verified 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAmIywCE4NWQI8-4PbFj7PYtZIAzrJeYuSqXS-CT7J89Or-ElChqPKn-n9n5BwIzyPifeMfSSDvkp2gFNpWNq7unuW7zP5XJkkQ5hsy4kKioABJQNvBFoRFFTV55OHMXkJn83zscTINN7AG4pIyNn2iqU-iY1m5RPWjRe2_CS_HoSqN223pSYog3cYwt-jqrvZyfVyW5E01ezZeMr-1w63xfWD0wbIsvt8o080NYYZ7047WS1owws0K8TsJ7laZyNGWZJp7bFLWZig"
          />
          <ProviderCard 
            name="Rian - Ahli Pompa Air" 
            rating="4.5" 
            distance="3.1km" 
            price="Rp90.000" 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCq_3MdaWGgdd9WXM-SJ8AvL3Jbr4d0Uft17ZLTPLtTUqOEH6b_zPFvmAq51OOo6-rZ8utTA0L1JilrxgAsuthGoLiZG5V_s7RI07_yHNaCjh8ll9XMVfRgzhqIhzu6p94DLZYPSOTk3nMJlLAs3qmkYIvy5etc7IRDeLqQTYbIb8JRahZNsbXgouP_8fWLbJWR1W3FQidH4x7wxsFbXScSH9yYlnQuKTs5N2xqIgJDxIv2RYy8kzbumXoatN1FEwKgb3xY_qzLEOc"
          />
          <ProviderCard 
            name="Indra Cleaning Service" 
            rating="4.7" 
            distance="0.8km" 
            price="Rp50.000" 
            verified 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBFUzzn2MV9XPigfYHuRu38KdxMAuoN7WwppuK3xOs6P_QUVacbueZPc78ka4ne983KQkeQCKsHWiKRF492tQoQFio23MkaBjE2ohlGyFaM40N4zqdni-9e9VAXDu3psWzlcMr3YFHKcoDxl3OcziDp_u1fMABv_FP1tdF-rKiNj9uk9Bufi9NpKoEnkrRxbv7eQnGUftWJcFqWtlKP3S8VMDakgsy1y_t_sZX78t4PyxYIbWPUfGxFzsVjd38lZXxizbW-e8ESDRU"
          />
        </div>
      </main>
    </MainLayout>
  );
};

const FilterChip: React.FC<{ icon: string, label: string, active?: boolean }> = ({ icon, label, active }) => (
  <button className={`flex items-center gap-1.5 px-4 py-2 rounded-full border ${active ? 'bg-blue-50 border-primary text-primary' : 'bg-surface-container-low border-outline-variant text-on-surface-variant'} font-label-md whitespace-nowrap`}>
    <span className="material-symbols-outlined text-[18px]" style={active ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
    {label}
  </button>
);

const ProviderCard: React.FC<{ name: string, rating: string, distance: string, price: string, image: string, verified?: boolean }> = ({ name, rating, distance, price, image, verified }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
    <div className="relative flex-shrink-0">
      <img className="w-20 h-20 rounded-lg object-cover bg-surface-container" alt={name} src={image} />
      {verified && (
        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-2 border-white">
          <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
        </div>
      )}
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-h3 text-on-surface">{name}</h3>
          <div className="flex items-center gap-0.5 text-orange-500">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-md font-bold">{rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1">
          {verified && <span className="font-label-md px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] uppercase font-bold">Verifikasi KTP</span>}
          <div className="flex items-center gap-1 text-outline">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            <span className="text-[12px]">{distance}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end mt-2">
        <div className="flex flex-col">
          <span className="text-[11px] text-outline leading-tight">Estimasi Mulai</span>
          <span className="font-h2 text-primary">{price}</span>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-label-md active:scale-95 transition-transform">
          Pesan
        </button>
      </div>
    </div>
  </div>
);

export default Explore;
