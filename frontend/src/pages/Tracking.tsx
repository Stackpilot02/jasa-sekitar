import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Tracking: React.FC = () => {
  return (
    <MainLayout title="Tracking Booking" showBack>
      <main className="relative h-[calc(100vh-56px)] overflow-hidden">
        {/* Mock Map Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCR8uqzJuLpavevCBh-7QFYbzBiV5i9FLBsXXVVf2wi3MVqz2ZF9gfVFVco09-T3Xx-PNeSLZoHZ5-ndu8bM5yVDvCuBxUK7_QVS9bvOwVUR8ZGVXwF_L5VPdu6KpIzRBykF1VC0LoBoED6UPlrFyvOMBL7u9KLMA51JiFm7VIgzPNne8DCS3DC3ZiQQudXcF6PAkjxuzEFhxzrxBrihg5vMD-yvktcFMhksAzHSWadrXzUjRuRdume3Qpz5f_0nzj_xrXjV3k56BQ')" }}
        >
          {/* SVG Route Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 800">
            <path className="route-line" d="M 100 200 Q 150 350 300 500" fill="none" opacity="0.8" stroke="#2563EB" strokeLinecap="round" strokeWidth="6" style={{ strokeDasharray: '8' }} />
          </svg>

          {/* User Location Pin */}
          <div className="absolute top-[180px] left-[80px] flex flex-col items-center">
            <div className="w-10 h-10 bg-white rounded-full border-2 border-blue-600 shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-600">person_pin_circle</span>
            </div>
            <div className="bg-white px-2 py-1 rounded-lg shadow-md mt-1 border border-slate-100">
              <p className="text-[10px] font-bold text-on-surface">Lokasi Anda</p>
            </div>
          </div>

          {/* Provider Location Pin */}
          <div className="absolute top-[480px] left-[280px] flex flex-col items-center animate-pulse">
            <div className="w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white">electric_moped</span>
            </div>
            <div className="bg-blue-600 px-3 py-1 rounded-lg shadow-md mt-1">
              <p className="text-[10px] font-bold text-white">Budi Santoso</p>
            </div>
          </div>
        </div>

        {/* Floating Actions */}
        <div className="fixed top-20 right-container-margin flex flex-col gap-2 z-30">
          <button className="w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-on-surface-variant active:scale-90 transition-transform">
            <span className="material-symbols-outlined">my_location</span>
          </button>
          <button className="w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-on-surface-variant active:scale-90 transition-transform">
            <span className="material-symbols-outlined">layers</span>
          </button>
        </div>

        {/* Tracking Card */}
        <section className="fixed bottom-0 left-0 w-full px-container-margin pb-8 z-40">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-[0_-4px_24px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
            <div className="p-stack-lg border-b border-slate-50">
              <div className="flex items-center justify-between mb-stack-md">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                  <span className="font-label-md text-secondary">Teknisi sedang dalam perjalanan</span>
                </div>
                <div className="bg-surface-container-low px-2 py-1 rounded-lg">
                  <span className="font-label-md text-primary font-bold">12 Menit</span>
                </div>
              </div>
              
              <div className="flex items-center gap-stack-lg py-stack-md">
                <div className="relative">
                  <img 
                    alt="Budi Santoso" 
                    className="w-14 h-14 rounded-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6u414W9jAz23oFAr1d4QcDDs8WYJjoiNvvP_j8EaOVMr5_aMyTjWR3nGyTJvJIXMUJ6dbKXby0cgIMIeRqEH1GqxoJD1R7tturiJBOcdnIaU-0cXoqrGB4KbgxzisZcvDfafvTOhziF5yH4j3qiResPAAmbjA8BQAqL8djnhNv4hpreff5aEACtRrWLWFad888uwvNc883N0ctnzqTkycjT2oa6dshVqHS7jkDivwEtpujRr8mGoxYpuwQAT9wyD7Xx8SRR7jOS0" 
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
                    <div className="bg-secondary p-1 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-h3 text-on-surface">Budi Santoso</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-surface-container text-on-surface-variant font-label-sm px-2 py-0.5 rounded uppercase">B 1234 ABC</span>
                    <div className="flex items-center gap-0.5 text-secondary">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-sm">4.9</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-primary active:scale-90 transition-transform hover:bg-slate-50">
                    <span className="material-symbols-outlined">chat_bubble</span>
                  </button>
                  <button className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-primary active:scale-90 transition-transform hover:bg-slate-50">
                    <span className="material-symbols-outlined">call</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-stack-lg bg-surface-container-lowest">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400 mt-0.5">home_repair_service</span>
                  <div>
                    <p className="font-label-sm text-slate-500 uppercase">Layanan</p>
                    <p className="font-body-md font-semibold text-on-surface">Perbaikan AC - Cuci AC Standard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Tracking;
