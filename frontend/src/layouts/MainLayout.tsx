import React from 'react';
import { NavLink } from 'react-router-dom';

const MainLayout: React.FC<{ children: React.ReactNode, title?: string, showBack?: boolean }> = ({ children, title, showBack }) => {
  return (
    <div className="bg-background text-on-background min-h-screen pb-20">
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-40 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm flex items-center px-4 h-14">
        {showBack ? (
          <button onClick={() => window.history.back()} className="mr-4 active:opacity-70 transition-all text-on-surface">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        ) : (
          <button className="mr-4 active:opacity-70 transition-all text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        )}
        <h1 className="font-inter text-sm font-semibold tracking-tight text-on-surface flex-1">
          {title || <span className="text-lg font-black text-blue-600 dark:text-blue-400">Jasa Sekitar Kamu</span>}
        </h1>
        <div className="flex items-center gap-1">
          <button className="active:opacity-70 transition-all hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-full">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">notifications</span>
          </button>
        </div>
      </header>

      <main>
        {children}
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 w-full z-50 rounded-t-xl border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex justify-around items-center h-16 pb-safe px-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
        <BottomNavItem to="/home" icon="home" label="Beranda" />
        <BottomNavItem to="/explore" icon="search" label="Eksplor" />
        <BottomNavItem to="/orders" icon="receipt_long" label="Pesanan" />
        <BottomNavItem to="/profile" icon="person" label="Profil" />
      </nav>
    </div>
  );
};

const BottomNavItem: React.FC<{ to: string, icon: string, label: string }> = ({ to, icon, label }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `flex flex-col items-center justify-center flex-1 h-full transition-all active:scale-95 duration-150 ${isActive ? 'text-blue-600 dark:text-blue-400 font-bold scale-105' : 'text-gray-400 dark:text-gray-500'} hover:text-blue-500`
    }
  >
    <span className="material-symbols-outlined">
      {icon}
    </span>
    <span className="font-inter text-[10px] font-medium">{label}</span>
  </NavLink>
);

export default MainLayout;
