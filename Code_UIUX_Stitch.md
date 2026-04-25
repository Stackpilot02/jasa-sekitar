<!-- Jasa Sekitar Kamu - PRD -->
# Product Requirements Document: Jasa Sekitar Kamu — Hyperlocal Service Platform
**Version:** 1.0 | **Date:** April 2026 | **Status:** Draft

## 1. Executive Summary
- **Vision:** To be the trusted hyperlocal service platform connecting local providers with users in the nearest radius, like "Gojek for home services and local expertise."
- **Mission:** Empower local service workers to be easily found, verified, and earn more, while making it easy for people to get fast, reliable help.

## 2. Target Users
- **Consumers:** Active households, busy professionals, apartment residents, and the elderly.
- **Providers:** Construction/repair (handymen, painters, etc.), cleaning (housekeeping, laundry), technicians (AC, electronics), vehicle care, and personal care (haircuts, massage).

## 3. Core Features (Consumer)
- **F-C01: Search & Discovery:** GPS-based detection, 1-10km radius, interactive map, and service category filters.
- **F-C02: Fast Booking:** Instant or scheduled booking with real-time status tracking (Waiting -> Confirmed -> En Route -> Finished).
- **F-C03: Provider Profile:** Photos, ratings, verification badges (KTP, HP, Bank), and portfolio.
- **F-C04: Direct Chat:** Real-time communication with image sharing once booking is confirmed.
- **F-C05: Payment:** Integrated QRIS, GoPay, OVO, Dana, and Escrow system (funds released after job completion).
- **F-C06: Rating & Reviews:** 1-5 star rating, text reviews, and digital tipping.

## 4. Key User Flow (Consumer)
1. Open App (GPS Permission)
2. Home (Map + Categories)
3. Select Category/Search
4. View Nearby Providers
5. View Profile -> "Book Now"
6. Fill Details + Pay
7. Wait for Confirmation
8. Live Tracking -> Job Finished
9. Rate & Review

## 5. Technical Stack
- **Mobile:** Capacitor.js + React/Vue.js
- **Real-time:** Socket.IO
- **Maps:** Google Maps Platform
- **Payments:** Midtrans/Xendit (Indonesia-native)

<!-- Beranda (Home) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Jasa Sekitar Kamu - Home</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container": "#e5eeff",
                    "on-surface": "#0b1c30",
                    "error": "#ba1a1a",
                    "on-tertiary-container": "#ffede6",
                    "error-container": "#ffdad6",
                    "tertiary-container": "#bc4800",
                    "on-error": "#ffffff",
                    "primary-container": "#2563eb",
                    "on-tertiary": "#ffffff",
                    "on-error-container": "#93000a",
                    "surface-tint": "#0053db",
                    "surface-container-lowest": "#ffffff",
                    "on-tertiary-fixed-variant": "#7d2d00",
                    "surface-container-low": "#eff4ff",
                    "surface-container-highest": "#d3e4fe",
                    "surface": "#f8f9ff",
                    "on-surface-variant": "#434655",
                    "surface-bright": "#f8f9ff",
                    "primary": "#004ac6",
                    "secondary-fixed-dim": "#4edea3",
                    "background": "#f8f9ff",
                    "on-primary-fixed": "#00174b",
                    "on-primary-container": "#eeefff",
                    "on-primary": "#ffffff",
                    "surface-container-high": "#dce9ff",
                    "on-background": "#0b1c30",
                    "inverse-on-surface": "#eaf1ff",
                    "on-secondary-fixed": "#002113",
                    "on-tertiary-fixed": "#360f00",
                    "secondary-fixed": "#6ffbbe",
                    "secondary": "#006c49",
                    "tertiary-fixed": "#ffdbcd",
                    "on-secondary-container": "#00714d",
                    "surface-variant": "#d3e4fe",
                    "secondary-container": "#6cf8bb",
                    "outline": "#737686",
                    "surface-dim": "#cbdbf5",
                    "inverse-primary": "#b4c5ff",
                    "primary-fixed": "#dbe1ff",
                    "inverse-surface": "#213145",
                    "outline-variant": "#c3c6d7",
                    "primary-fixed-dim": "#b4c5ff",
                    "tertiary-fixed-dim": "#ffb596",
                    "tertiary": "#943700",
                    "on-secondary-fixed-variant": "#005236",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed-variant": "#003ea8"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-md": "0.5rem",
                    "stack-lg": "1rem",
                    "gutter": "0.75rem",
                    "stack-sm": "0.25rem",
                    "container-margin": "1rem",
                    "stack-xl": "1.5rem"
            },
            "fontFamily": {
                    "body-lg": ["Inter"],
                    "label-sm": ["Inter"],
                    "label-md": ["Inter"],
                    "body-md": ["Inter"],
                    "h3": ["Inter"],
                    "h1": ["Inter"],
                    "h2": ["Inter"]
            },
            "fontSize": {
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-sm": ["11px", {"lineHeight": "14px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
                    "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "h3": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "h1": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                    "h2": ["20px", {"lineHeight": "28px", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .map-gradient-overlay {
            background: linear-gradient(to bottom, rgba(248, 249, 255, 0.8) 0%, rgba(248, 249, 255, 0) 15%, rgba(248, 249, 255, 0) 85%, rgba(248, 249, 255, 1) 100%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body-md overflow-x-hidden">
<!-- TopAppBar -->
<header class="sticky top-0 w-full z-40 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between px-4 h-14 w-full bg-white dark:bg-gray-900">
<div class="flex items-center gap-3">
<button class="active:opacity-70 transition-all hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors p-2 rounded-full">
<span class="material-symbols-outlined text-gray-700 dark:text-gray-300">menu</span>
</button>
<h1 class="text-lg font-black text-blue-600 dark:text-blue-400 font-inter tracking-tight">Jasa Sekitar Kamu</h1>
</div>
<div class="flex items-center gap-1">
<button class="active:opacity-70 transition-all hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors p-2 rounded-full">
<span class="material-symbols-outlined text-gray-700 dark:text-gray-300">notifications</span>
</button>
</div>
</header>
<main class="relative min-h-[calc(100vh-120px)] pb-24">
<!-- Interactive Map Background Section -->
<div class="absolute inset-0 z-0 h-[574px]">
<div class="w-full h-full relative overflow-hidden">
<img class="w-full h-full object-cover grayscale opacity-40" data-alt="clean minimal vector map of a city with light blue and grey tones showing streets and blocks in a modern tech style" data-location="Jakarta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44Ove3N3l28Yk_i7ZvY4WTvpvY2H-XcmuFAWxBcromyYvGoxPz8r2sAONEunjwx8rsO7g169jVLmrHX1d2MmMeZdGYiKGgVts0JsHbmIe7GJRT-Kh72bR3fOPHEWXQu39x-0OR4HwCJywhTBLDDv6SoUhyWRt9akInOtdqXrGvB6nd_KN5vCwPDgjJSbXfilztV-ZJ4SJb4fj6dQpb6VlejwD5CZZOdm38vOdni2mm3On1VQaPmEKs_bvsbtUKOHmECpsDv9SlSY"/>
<div class="absolute inset-0 map-gradient-overlay pointer-events-none"></div>
<!-- Service Provider Pins (Decorative) -->
<div class="absolute top-1/4 left-1/3 animate-bounce">
<div class="bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">build</span>
</div>
</div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div class="bg-secondary text-white p-2 rounded-full shadow-lg border-2 border-white">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">ac_unit</span>
</div>
</div>
<div class="absolute top-1/3 right-1/4">
<div class="bg-tertiary text-white p-2 rounded-full shadow-lg border-2 border-white">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">cleaning_services</span>
</div>
</div>
</div>
</div>
<!-- Search & UI Content Over Map -->
<div class="relative z-10 px-4 pt-6">
<!-- Search Bar -->
<div class="w-full max-w-md mx-auto mb-stack-xl">
<div class="relative group">
<div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-outline">search</span>
</div>
<input class="w-full bg-surface-container-lowest border border-outline-variant rounded-full py-4 pl-12 pr-4 shadow-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-on-surface" placeholder="Cari 'Tukang Cat' atau 'Servis AC'..." type="text"/>
</div>
</div>
<!-- Current Location FAB (Floating above map content) -->
<div class="flex justify-end mb-stack-xl">
<button class="bg-primary text-on-primary w-12 h-12 rounded-full shadow-[0_8px_24px_rgba(0,74,198,0.3)] flex items-center justify-center active:scale-95 transition-transform">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">my_location</span>
</button>
</div>
<!-- Category Carousel Section -->
<div class="mt-8">
<div class="flex items-center justify-between mb-stack-md">
<h2 class="font-h2 text-on-surface">Kategori Layanan</h2>
<button class="text-primary font-label-md hover:underline">Lihat Semua</button>
</div>
<div class="flex overflow-x-auto gap-4 hide-scrollbar py-2 -mx-4 px-4">
<!-- Category Item 1 -->
<div class="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer">
<div class="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center border border-blue-100 dark:border-blue-800 group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl">ac_unit</span>
</div>
<span class="font-label-md text-on-surface-variant">Servis AC</span>
</div>
<!-- Category Item 2 -->
<div class="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer">
<div class="w-16 h-16 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center border border-green-100 dark:border-green-800 group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-secondary text-3xl">cleaning_services</span>
</div>
<span class="font-label-md text-on-surface-variant">Cleaning</span>
</div>
<!-- Category Item 3 -->
<div class="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer">
<div class="w-16 h-16 bg-orange-50 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center border border-orange-100 dark:border-orange-800 group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-tertiary text-3xl">plumbing</span>
</div>
<span class="font-label-md text-on-surface-variant">Plumbing</span>
</div>
<!-- Category Item 4 -->
<div class="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer">
<div class="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center border border-purple-100 dark:border-purple-800 group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-purple-600 text-3xl">handyman</span>
</div>
<span class="font-label-md text-on-surface-variant">Handyman</span>
</div>
<!-- Category Item 5 -->
<div class="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer">
<div class="w-16 h-16 bg-red-50 dark:bg-red-900/30 rounded-2xl flex items-center justify-center border border-red-100 dark:border-red-800 group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-error text-3xl">format_paint</span>
</div>
<span class="font-label-md text-on-surface-variant">Tukang Cat</span>
</div>
</div>
</div>
<!-- Recommendations Grid -->
<div class="mt-stack-xl">
<h2 class="font-h2 text-on-surface mb-stack-lg">Layanan Terdekat</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Service Card 1 -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div class="relative h-40">
<img class="w-full h-full object-cover" data-alt="professional technician in blue uniform repairing an air conditioning unit on a white wall with focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUU43bFU389OL7PUxPdlw38BwpWIvHWW_UfJfFnM0EumkKGO6e0vmtIyQG72SICaq6j00fQmiUNQn_u5FSKV3cLFqXELTpZgLqVxmah0Eue0Ailiop-v32YrvLvq2JEelLVYJnIa_dpPnfhxkXlU6GvQRtdSX7OD6-c0v6CKmtjGHcjzt4F06vCeVpgQnYR3zHXel6OPvYYYHNI67NV-6axdq19noL8z_OKc0V_1TjRJbVjvC-t74QGWU5UMOIuKh1T7XRVXipf64"/>
<div class="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span class="material-symbols-outlined text-yellow-500 text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-on-surface">4.8</span>
</div>
</div>
<div class="p-4">
<div class="flex justify-between items-start mb-1">
<h3 class="font-h3 text-on-surface">Servis AC Berkala</h3>
<span class="text-primary font-bold">Rp 150rb</span>
</div>
<p class="text-on-surface-variant text-body-md mb-3">Teknisi berpengalaman, cuci AC &amp; tambah freon.</p>
<div class="flex items-center gap-2 text-outline text-label-md">
<span class="material-symbols-outlined text-sm">near_me</span>
<span>1.2 km dari lokasi Anda</span>
</div>
</div>
</div>
<!-- Service Card 2 -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div class="relative h-40">
<img class="w-full h-full object-cover" data-alt="clean modern living room being vacuumed by professional cleaning staff with sunlight streaming through windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlXTFNwlim-X8nSBs6ne0HO0irzcYanvbyt_0L5q9uo7JcQFWf36y3sA88R-RuMsDCPZdZ5ZMo0YPMVN7gWEV8GxWX6UEuAGi2tg_LsH2do6BmK5DABp0nz91StbW5qYdDShaksmaXIj_T-ZsO6hee0TR-2hVRvhuVwQwBLMz1nBG-xIU_FFh0Rc8f9Wu_fNGKZ7bG71x-ZPBOVM-sy-VhsrQFW7m0Jwm7Wru-es8W2mRFlh6bwMDFnOep6zJicgj99Br6P_Kgfmc"/>
<div class="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span class="material-symbols-outlined text-yellow-500 text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-on-surface">4.9</span>
</div>
</div>
<div class="p-4">
<div class="flex justify-between items-start mb-1">
<h3 class="font-h3 text-on-surface">Pembersihan Rumah</h3>
<span class="text-primary font-bold">Rp 85rb</span>
</div>
<p class="text-on-surface-variant text-body-md mb-3">Deep cleaning untuk apartemen &amp; rumah minimalis.</p>
<div class="flex items-center gap-2 text-outline text-label-md">
<span class="material-symbols-outlined text-sm">near_me</span>
<span>0.8 km dari lokasi Anda</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 w-full z-50 rounded-t-xl border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex justify-around items-center h-16 pb-safe px-2 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
<a class="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 font-bold scale-105 hover:text-blue-500 transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="font-inter text-[10px] font-medium">Beranda</span>
</a>
<a class="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">search</span>
<span class="font-inter text-[10px] font-medium">Eksplor</span>
</a>
<a class="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">receipt_long</span>
<span class="font-inter text-[10px] font-medium">Pesanan</span>
</a>
<a class="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-inter text-[10px] font-medium">Profil</span>
</a>
</nav>
<!-- Contextual FAB for ordering -->
<div class="fixed bottom-20 right-4 z-40">
<button class="bg-primary-container text-on-primary-container flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:brightness-110 active:scale-95 transition-all">
<span class="material-symbols-outlined">add</span>
<span class="font-label-md">Pesan Sekarang</span>
</button>
</div>
</body></html>

<!-- Eksplor Jasa -->
<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container": "#e5eeff",
                    "on-surface": "#0b1c30",
                    "error": "#ba1a1a",
                    "on-tertiary-container": "#ffede6",
                    "error-container": "#ffdad6",
                    "tertiary-container": "#bc4800",
                    "on-error": "#ffffff",
                    "primary-container": "#2563eb",
                    "on-tertiary": "#ffffff",
                    "on-error-container": "#93000a",
                    "surface-tint": "#0053db",
                    "surface-container-lowest": "#ffffff",
                    "on-tertiary-fixed-variant": "#7d2d00",
                    "surface-container-low": "#eff4ff",
                    "surface-container-highest": "#d3e4fe",
                    "surface": "#f8f9ff",
                    "on-surface-variant": "#434655",
                    "surface-bright": "#f8f9ff",
                    "primary": "#004ac6",
                    "secondary-fixed-dim": "#4edea3",
                    "background": "#f8f9ff",
                    "on-primary-fixed": "#00174b",
                    "on-primary-container": "#eeefff",
                    "on-primary": "#ffffff",
                    "surface-container-high": "#dce9ff",
                    "on-background": "#0b1c30",
                    "inverse-on-surface": "#eaf1ff",
                    "on-secondary-fixed": "#002113",
                    "on-tertiary-fixed": "#360f00",
                    "secondary-fixed": "#6ffbbe",
                    "secondary": "#006c49",
                    "tertiary-fixed": "#ffdbcd",
                    "on-secondary-container": "#00714d",
                    "surface-variant": "#d3e4fe",
                    "secondary-container": "#6cf8bb",
                    "outline": "#737686",
                    "surface-dim": "#cbdbf5",
                    "inverse-primary": "#b4c5ff",
                    "primary-fixed": "#dbe1ff",
                    "inverse-surface": "#213145",
                    "outline-variant": "#c3c6d7",
                    "primary-fixed-dim": "#b4c5ff",
                    "tertiary-fixed-dim": "#ffb596",
                    "tertiary": "#943700",
                    "on-secondary-fixed-variant": "#005236",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed-variant": "#003ea8"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-md": "0.5rem",
                    "stack-lg": "1rem",
                    "gutter": "0.75rem",
                    "stack-sm": "0.25rem",
                    "container-margin": "1rem",
                    "stack-xl": "1.5rem"
            },
            "fontFamily": {
                    "body-lg": ["Inter"],
                    "label-sm": ["Inter"],
                    "label-md": ["Inter"],
                    "body-md": ["Inter"],
                    "h3": ["Inter"],
                    "h1": ["Inter"],
                    "h2": ["Inter"]
            },
            "fontSize": {
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-sm": ["11px", {"lineHeight": "14px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
                    "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "h3": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "h1": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                    "h2": ["20px", {"lineHeight": "28px", "fontWeight": "600"}]
            }
          }
        }
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background min-h-screen pb-20">
<!-- TopAppBar -->
<header class="sticky top-0 w-full z-40 border-b border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 flex items-center justify-between px-4 h-14 w-full">
<div class="flex items-center gap-3">
<button class="active:opacity-70 transition-all text-gray-500 dark:text-gray-400">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 class="font-inter text-sm font-semibold tracking-tight text-lg font-black text-blue-600 dark:text-blue-400">Jasa Sekitar Kamu</h1>
</div>
<div class="flex items-center gap-4">
<button class="active:opacity-70 transition-all text-gray-500 dark:text-gray-400">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<!-- Content Canvas -->
<main class="max-w-md mx-auto">
<!-- Search Info & Quick Filters -->
<div class="px-4 pt-6 pb-4 bg-white dark:bg-gray-900">
<div class="flex flex-col gap-4">
<div class="flex items-center justify-between">
<div>
<h2 class="font-h2 text-h2 text-on-surface">Hasil Pencarian</h2>
<p class="font-body-md text-body-md text-outline">Menampilkan 24 teknisi terbaik</p>
</div>
<button class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container text-primary active:scale-95 transition-transform">
<span class="material-symbols-outlined" data-icon="tune">tune</span>
</button>
</div>
<!-- Chips: Filter -->
<div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<button class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-50 border border-primary text-primary font-label-md text-label-md whitespace-nowrap">
<span class="material-symbols-outlined text-[18px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
                        Rating
                    </button>
<button class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant text-on-surface-variant font-label-md text-label-md whitespace-nowrap">
<span class="material-symbols-outlined text-[18px]" data-icon="distance">distance</span>
                        Jarak
                    </button>
<button class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant text-on-surface-variant font-label-md text-label-md whitespace-nowrap">
<span class="material-symbols-outlined text-[18px]" data-icon="payments">payments</span>
                        Harga
                    </button>
<button class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant text-on-surface-variant font-label-md text-label-md whitespace-nowrap">
<span class="material-symbols-outlined text-[18px]" data-icon="verified">verified</span>
                        Terverifikasi
                    </button>
</div>
</div>
</div>
<!-- Vertical Service Provider List -->
<div class="px-4 space-y-4 py-4">
<!-- Provider Card 1 -->
<div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex gap-4 hover:shadow-md transition-shadow">
<div class="relative flex-shrink-0">
<img class="w-20 h-20 rounded-lg object-cover bg-surface-container" data-alt="portrait of a professional handyman wearing a clean blue uniform, smiling at the camera in a modern bright setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-UGmBjPQFnThTB53-AFwcdnz7bo7sjl7kxGxWntFX4Sbb8lxeZ9RsW1NmXFoINYW35thanS4FR_2CJmFWyuWbA03-RXOfhk7KQ3bYv-ajTUbuoa0goQ34JqdEVmHTenLeBi4YflVt96WaFT8smwZNcDR_GWfoCm-f-sGNb6B4jGZA2erL2bok2RTwuRKgwY4yeZSqLzNO2WGms_gvShGrgMOywpx0Jr2-3c04u7aXoXLBbUjgV7jNxa6UV-AGntSTZjsnPp6NhOY"/>
<div class="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-2 border-white">
<span class="material-symbols-outlined text-[14px]" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
</div>
<div class="flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start">
<h3 class="font-h3 text-h3 text-on-surface">Budi - Specialist AC</h3>
<div class="flex items-center gap-0.5 text-orange-500">
<span class="material-symbols-outlined text-[18px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md font-bold">4.8</span>
</div>
</div>
<div class="flex items-center gap-2 mt-1">
<span class="font-label-md text-label-md px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] uppercase font-bold">Verifikasi KTP</span>
<div class="flex items-center gap-1 text-outline">
<span class="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span>
<span class="text-[12px]">1.2km</span>
</div>
</div>
</div>
<div class="flex justify-between items-end mt-2">
<div class="flex flex-col">
<span class="text-[11px] text-outline leading-tight">Estimasi Mulai</span>
<span class="font-h2 text-primary">Rp75.000</span>
</div>
<button class="bg-primary text-white px-4 py-2 rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
                            Pesan
                        </button>
</div>
</div>
</div>
<!-- Provider Card 2 -->
<div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex gap-4">
<div class="relative flex-shrink-0">
<img class="w-20 h-20 rounded-lg object-cover bg-surface-container" data-alt="middle aged asian professional technician in work clothes looking confident with tools in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmIywCE4NWQI8-4PbFj7PYtZIAzrJeYuSqXS-CT7J89Or-ElChqPKn-n9n5BwIzyPifeMfSSDvkp2gFNpWNq7unuW7zP5XJkkQ5hsy4kKioABJQNvBFoRFFTV55OHMXkJn83zscTINN7AG4pIyNn2iqU-iY1m5RPWjRe2_CS_HoSqN223pSYog3cYwt-jqrvZyfVyW5E01ezZeMr-1w63xfWD0wbIsvt8o080NYYZ7047WS1owws0K8TsJ7laZyNGWZJp7bFLWZig"/>
<div class="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-2 border-white">
<span class="material-symbols-outlined text-[14px]" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
</div>
<div class="flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start">
<h3 class="font-h3 text-h3 text-on-surface">Agus Service Listrik</h3>
<div class="flex items-center gap-0.5 text-orange-500">
<span class="material-symbols-outlined text-[18px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md font-bold">4.9</span>
</div>
</div>
<div class="flex items-center gap-2 mt-1">
<span class="font-label-md text-label-md px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] uppercase font-bold">Verifikasi KTP</span>
<div class="flex items-center gap-1 text-outline">
<span class="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span>
<span class="text-[12px]">2.4km</span>
</div>
</div>
</div>
<div class="flex justify-between items-end mt-2">
<div class="flex flex-col">
<span class="text-[11px] text-outline leading-tight">Estimasi Mulai</span>
<span class="font-h2 text-primary">Rp120.000</span>
</div>
<button class="bg-primary text-white px-4 py-2 rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
                            Pesan
                        </button>
</div>
</div>
</div>
<!-- Provider Card 3 -->
<div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex gap-4">
<div class="relative flex-shrink-0">
<img class="w-20 h-20 rounded-lg object-cover bg-surface-container" data-alt="focused young mechanic working on a technical appliance with natural lighting and soft focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq_3MdaWGgdd9WXM-SJ8AvL3Jbr4d0Uft17ZLTPLtTUqOEH6b_zPFvmAq51OOo6-rZ8utTA0L1JilrxgAsuthGoLiZG5V_s7RI07_yHNaCjh8ll9XMVfRgzhqIhzu6p94DLZYPSOTk3nMJlLAs3qmkYIvy5etc7IRDeLqQTYbIb8JRahZNsbXgouP_8fWLbJWR1W3FQidH4x7wxsFbXScSH9yYlnQuKTs5N2xqIgJDxIv2RYy8kzbumXoatN1FEwKgb3xY_qzLEOc"/>
</div>
<div class="flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start">
<h3 class="font-h3 text-h3 text-on-surface">Rian - Ahli Pompa Air</h3>
<div class="flex items-center gap-0.5 text-orange-500">
<span class="material-symbols-outlined text-[18px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md font-bold">4.5</span>
</div>
</div>
<div class="flex items-center gap-2 mt-1">
<div class="flex items-center gap-1 text-outline">
<span class="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span>
<span class="text-[12px]">3.1km</span>
</div>
</div>
</div>
<div class="flex justify-between items-end mt-2">
<div class="flex flex-col">
<span class="text-[11px] text-outline leading-tight">Estimasi Mulai</span>
<span class="font-h2 text-primary">Rp90.000</span>
</div>
<button class="bg-primary text-white px-4 py-2 rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
                            Pesan
                        </button>
</div>
</div>
</div>
<!-- Provider Card 4 -->
<div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex gap-4">
<div class="relative flex-shrink-0">
<img class="w-20 h-20 rounded-lg object-cover bg-surface-container" data-alt="cheerful service person in uniform carrying tools in a bright residential hallway" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFUzzn2MV9XPigfYHuRu38KdxMAuoN7WwppuK3xOs6P_QUVacbueZPc78ka4ne983KQkeQCKsHWiKRF492tQoQFio23MkaBjE2ohlGyFaM40N4zqdni-9e9VAXDu3psWzlcMr3YFHKcoDxl3OcziDp_u1fMABv_FP1tdF-rKiNj9uk9Bufi9NpKoEnkrRxbv7eQnGUftWJcFqWtlKP3S8VMDakgsy1y_t_sZX78t4PyxYIbWPUfGxFzsVjd38lZXxizbW-e8ESDRU"/>
<div class="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-2 border-white">
<span class="material-symbols-outlined text-[14px]" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
</div>
<div class="flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start">
<h3 class="font-h3 text-h3 text-on-surface">Indra Cleaning Service</h3>
<div class="flex items-center gap-0.5 text-orange-500">
<span class="material-symbols-outlined text-[18px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md font-bold">4.7</span>
</div>
</div>
<div class="flex items-center gap-2 mt-1">
<span class="font-label-md text-label-md px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] uppercase font-bold">Verifikasi KTP</span>
<div class="flex items-center gap-1 text-outline">
<span class="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span>
<span class="text-[12px]">0.8km</span>
</div>
</div>
</div>
<div class="flex justify-between items-end mt-2">
<div class="flex flex-col">
<span class="text-[11px] text-outline leading-tight">Estimasi Mulai</span>
<span class="font-h2 text-primary">Rp50.000</span>
</div>
<button class="bg-primary text-white px-4 py-2 rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
                            Pesan
                        </button>
</div>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 w-full z-50 rounded-t-xl border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex justify-around items-center h-16 pb-safe px-2 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
<div class="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-all active:scale-95 duration-150">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-inter text-[10px] font-medium">Beranda</span>
</div>
<div class="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 font-bold scale-105 hover:text-blue-500 transition-all active:scale-95 duration-150">
<span class="material-symbols-outlined" data-icon="search">search</span>
<span class="font-inter text-[10px] font-medium">Eksplor</span>
</div>
<div class="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-all active:scale-95 duration-150">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span class="font-inter text-[10px] font-medium">Pesanan</span>
</div>
<div class="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-all active:scale-95 duration-150">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-inter text-[10px] font-medium">Profil</span>
</div>
</nav>
</body></html>

<!-- Design System -->
<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Profil Penyedia Jasa - Jasa Sekitar Kamu</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container": "#e5eeff",
                    "on-surface": "#0b1c30",
                    "error": "#ba1a1a",
                    "on-tertiary-container": "#ffede6",
                    "error-container": "#ffdad6",
                    "tertiary-container": "#bc4800",
                    "on-error": "#ffffff",
                    "primary-container": "#2563eb",
                    "on-tertiary": "#ffffff",
                    "on-error-container": "#93000a",
                    "surface-tint": "#0053db",
                    "surface-container-lowest": "#ffffff",
                    "on-tertiary-fixed-variant": "#7d2d00",
                    "surface-container-low": "#eff4ff",
                    "surface-container-highest": "#d3e4fe",
                    "surface": "#f8f9ff",
                    "on-surface-variant": "#434655",
                    "surface-bright": "#f8f9ff",
                    "primary": "#004ac6",
                    "secondary-fixed-dim": "#4edea3",
                    "background": "#f8f9ff",
                    "on-primary-fixed": "#00174b",
                    "on-primary-container": "#eeefff",
                    "on-primary": "#ffffff",
                    "surface-container-high": "#dce9ff",
                    "on-background": "#0b1c30",
                    "inverse-on-surface": "#eaf1ff",
                    "on-secondary-fixed": "#002113",
                    "on-tertiary-fixed": "#360f00",
                    "secondary-fixed": "#6ffbbe",
                    "secondary": "#006c49",
                    "tertiary-fixed": "#ffdbcd",
                    "on-secondary-container": "#00714d",
                    "surface-variant": "#d3e4fe",
                    "secondary-container": "#6cf8bb",
                    "outline": "#737686",
                    "surface-dim": "#cbdbf5",
                    "inverse-primary": "#b4c5ff",
                    "primary-fixed": "#dbe1ff",
                    "inverse-surface": "#213145",
                    "outline-variant": "#c3c6d7",
                    "primary-fixed-dim": "#b4c5ff",
                    "tertiary-fixed-dim": "#ffb596",
                    "tertiary": "#943700",
                    "on-secondary-fixed-variant": "#005236",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed-variant": "#003ea8"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-md": "0.5rem",
                    "stack-lg": "1rem",
                    "gutter": "0.75rem",
                    "stack-sm": "0.25rem",
                    "container-margin": "1rem",
                    "stack-xl": "1.5rem"
            },
            "fontFamily": {
                    "body-lg": ["Inter"],
                    "label-sm": ["Inter"],
                    "label-md": ["Inter"],
                    "body-md": ["Inter"],
                    "h3": ["Inter"],
                    "h1": ["Inter"],
                    "h2": ["Inter"]
            },
            "fontSize": {
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-sm": ["11px", {"lineHeight": "14px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
                    "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "h3": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "h1": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                    "h2": ["20px", {"lineHeight": "28px", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface font-body-md text-on-surface">
<!-- Top AppBar -->
<header class="sticky top-0 w-full z-40 border-b border-gray-100 bg-white shadow-sm h-14 flex items-center justify-between px-4">
<div class="flex items-center gap-3">
<button class="active:opacity-70 transition-all">
<span class="material-symbols-outlined text-on-surface">arrow_back</span>
</button>
<h1 class="font-inter text-sm font-semibold tracking-tight">Detail Teknisi</h1>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-gray-500">share</span>
<span class="material-symbols-outlined text-gray-500">favorite</span>
</div>
</header>
<main class="pb-32">
<!-- Profile Header Section -->
<section class="bg-white px-4 pt-6 pb-8 border-b border-gray-100">
<div class="flex flex-col items-center">
<div class="relative">
<img alt="Provider Profile" class="w-24 h-24 rounded-full object-cover border-4 border-surface-container shadow-md" data-alt="Professional indonesian handyman smiling wearing a blue polo shirt in a clean workshop background with soft cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv6kSlGEJEu0cunc5_076NKCFvy8fSwG15jRlU1gvAjTRgr_w9RRvMDr6XoY7oy_o9m8QN39X-qXL9AqMpCu3uXtKG9kzC-aXVQyQasX6gG-Os3frW2UybkIMGE4ghZZFthGKIMYZMapq5p5hg7u8XZxt-ZhkO_STj7_5c8qdhGWYhgJMEGXB3agFKe-w3J5d7m2qMczTTVwIF4ku8fPQGAnLRx2VOdfIXLXplIs-EDtLVE8sIwtGKnLFvQG8f3E0cMT-AKJ8_8GE"/>
<div class="absolute bottom-1 right-1 bg-primary p-1 rounded-full border-2 border-white">
<span class="material-symbols-outlined text-white text-[16px]" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
</div>
<h2 class="font-h1 text-h1 mt-4 text-center">Budi Santoso</h2>
<div class="flex items-center gap-2 mt-1">
<span class="text-orange-500 font-bold flex items-center gap-0.5">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                        4.9
                    </span>
<span class="text-on-surface-variant text-label-md">(124 Ulasan)</span>
<span class="text-gray-300">•</span>
<span class="text-secondary font-semibold text-label-md">Terverifikasi</span>
</div>
<div class="mt-4 flex gap-2">
<span class="bg-surface-container text-primary px-3 py-1 rounded-full text-label-sm font-bold">SPESIALIS ELEKTRONIK</span>
<span class="bg-surface-container text-primary px-3 py-1 rounded-full text-label-sm font-bold">10+ TAHUN</span>
</div>
</div>
<!-- Stats Grid -->
<div class="grid grid-cols-3 mt-8 border-t border-gray-50 pt-6">
<div class="text-center border-r border-gray-100">
<p class="text-h3 font-h3 text-primary">2.4k</p>
<p class="text-on-surface-variant text-label-md">Selesai</p>
</div>
<div class="text-center border-r border-gray-100">
<p class="text-h3 font-h3 text-primary">98%</p>
<p class="text-on-surface-variant text-label-md">Puas</p>
</div>
<div class="text-center">
<p class="text-h3 font-h3 text-primary">15m</p>
<p class="text-on-surface-variant text-label-md">Respon</p>
</div>
</div>
</section>
<!-- About Section -->
<section class="mt-6 px-4">
<h3 class="font-h2 text-h2 mb-2">Tentang</h3>
<p class="text-body-md text-on-surface-variant leading-relaxed">
                Ahli perbaikan peralatan rumah tangga dengan pengalaman lebih dari 10 tahun. Spesialis dalam perbaikan AC, Kulkas, dan Mesin Cuci semua merk. Mengutamakan kejujuran, ketepatan waktu, dan garansi pengerjaan.
            </p>
</section>
<!-- Expertise Chips -->
<section class="mt-8 px-4">
<h3 class="font-h2 text-h2 mb-3">Keahlian Utama</h3>
<div class="flex flex-wrap gap-2">
<div class="flex items-center gap-2 bg-white border border-outline-variant px-4 py-2 rounded-xl">
<span class="material-symbols-outlined text-primary">ac_unit</span>
<span class="text-body-md font-medium">Service AC</span>
</div>
<div class="flex items-center gap-2 bg-white border border-outline-variant px-4 py-2 rounded-xl">
<span class="material-symbols-outlined text-primary">kitchen</span>
<span class="text-body-md font-medium">Perbaikan Kulkas</span>
</div>
<div class="flex items-center gap-2 bg-white border border-outline-variant px-4 py-2 rounded-xl">
<span class="material-symbols-outlined text-primary">local_laundry_service</span>
<span class="text-body-md font-medium">Mesin Cuci</span>
</div>
<div class="flex items-center gap-2 bg-white border border-outline-variant px-4 py-2 rounded-xl">
<span class="material-symbols-outlined text-primary">electrical_services</span>
<span class="text-body-md font-medium">Instalasi Listrik</span>
</div>
</div>
</section>
<!-- Portfolio Gallery (Bento-style) -->
<section class="mt-10 px-4">
<div class="flex justify-between items-end mb-4">
<h3 class="font-h2 text-h2">Portofolio Pengerjaan</h3>
<span class="text-primary font-semibold text-label-md">Lihat Semua</span>
</div>
<div class="grid grid-cols-2 gap-3 h-64">
<div class="rounded-2xl overflow-hidden shadow-sm">
<img alt="Portfolio 1" class="w-full h-full object-cover" data-alt="Close up of a professional air conditioner technician cleaning internal filters with specialized tools in a bright modern apartment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr6VSKcSWaCKJX7C90diRbJJxyzE54EtZQCQnIftvDa5_4l-eIb1imUKAHBaXwLZLbVoeoLR79HvKDwlbOrPQQLK5xTjKIj_avqbscAvNSX1FN0uw6OUIDA_RiG_7bVJsnhSSz24DiJ9B59lTnRFmFOxkxLK8WOBH1jGH-8Fq4Q1d0XJrDO_CI3P9WZHpbgw5SdFR93Iv9BAbowJ38Y_WMQUgqm3H6P77ujJz7YZZXg_at-7r77lfP3MoIkp0y6Q2j-e0a0zoeIRA"/>
</div>
<div class="grid grid-rows-2 gap-3">
<div class="rounded-2xl overflow-hidden shadow-sm">
<img alt="Portfolio 2" class="w-full h-full object-cover" data-alt="Interior of a large silver refrigerator being repaired by a technician hands with modern diagnostic equipment visible" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJR9WKRgX0cSP8zQioDi30lcu8MLp1HSgp7sfGb4Xsi9HbbGjoxHBLnbb7RNtnvZx_ytqCZAFVeNzL36Tios08QyhF8pdHJntwUEefBShMc4h9UjF1sDLps6Y7z8zHHuqaSjz_taSkFiPl0uwtkg6oPq2NvUjWBvgnt0z7Y_s9odvVLMjFneAfAqk-OoIs4wgwQ38ts2TFPrwKGZfeoxcIKIshX_QUvRwwvFaUWeEQ6J8LUkWq9MvpMOuqgtpIFlmVUMhWKEYrNEQ"/>
</div>
<div class="rounded-2xl overflow-hidden shadow-sm relative">
<img alt="Portfolio 3" class="w-full h-full object-cover" data-alt="Professional electrician installing a complex circuit breaker panel in a residential home with neat colorful wiring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFSLjAgp614d_BhkLXndLgnu9nXyTxB-Ibf7s8d4J_BhfHLiiusGB-ryLvRey-Gt-hRGoDiMB2cPxT3VVvZS4PqRvNbpWY0XvUKCej9ZlLDpGYqBm6lE9G1j-TcEIVNoM_nloiKFJb0fOk1SD9K3W7TcRVGNjdfxP97Y0FaP9R7JZEu-cbA9KAwV40FoQj1kW6fvIveJOYeMv5cLLoEkhiodDO42jYmfvGnsYM-XU3y4Xe9tdhKV7hlHNvfokNP1DKpMHskycd7zo"/>
<div class="absolute inset-0 bg-black/40 flex items-center justify-center">
<span class="text-white font-bold">+12 Foto</span>
</div>
</div>
</div>
</div>
</section>
<!-- Reviews Section -->
<section class="mt-10 px-4">
<h3 class="font-h2 text-h2 mb-4">Ulasan Teratas</h3>
<div class="space-y-4">
<!-- Review Card 1 -->
<div class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
<div class="flex justify-between items-start">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center font-bold text-primary">AN</div>
<div>
<p class="font-bold text-body-md">Andi Nugraha</p>
<p class="text-label-md text-on-surface-variant">2 hari yang lalu</p>
</div>
</div>
<div class="flex text-orange-500">
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
</div>
<p class="mt-3 text-body-md text-on-surface-variant">
                        "Pak Budi sangat profesional. AC saya yang tadinya berisik sekarang jadi dingin dan halus suaranya. Sangat direkomendasikan!"
                    </p>
</div>
<!-- Review Card 2 -->
<div class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
<div class="flex justify-between items-start">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-primary">SP</div>
<div>
<p class="font-bold text-body-md">Siti Pratama</p>
<p class="text-label-md text-on-surface-variant">1 minggu yang lalu</p>
</div>
</div>
<div class="flex text-orange-500">
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
</div>
<p class="mt-3 text-body-md text-on-surface-variant">
                        "Datang tepat waktu, pengerjaan rapi sekali. Mesin cuci langsung beres dalam 1 jam."
                    </p>
</div>
</div>
<button class="w-full mt-4 py-3 border border-outline-variant rounded-xl text-primary font-bold text-label-md active:bg-gray-50 transition-colors">
                Tampilkan Semua Ulasan
            </button>
</section>
</main>
<!-- Bottom Booking Bar -->
<div class="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 z-50 flex items-center gap-4">
<div class="flex-shrink-0">
<p class="text-label-sm text-on-surface-variant font-medium">Estimasi Biaya</p>
<p class="text-h3 font-h3 text-on-surface">Rp 50rb<span class="text-label-md font-normal text-on-surface-variant">/jam</span></p>
</div>
<button class="flex-grow bg-primary text-white font-bold h-14 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-all">
<span class="material-symbols-outlined">calendar_today</span>
            Pesan Sekarang
        </button>
</div>
</body></html>

<!-- Profil Penyedia Jasa -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Booking Details - Jasa Sekitar Kamu</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "surface-container": "#e5eeff",
                      "on-surface": "#0b1c30",
                      "error": "#ba1a1a",
                      "on-tertiary-container": "#ffede6",
                      "error-container": "#ffdad6",
                      "tertiary-container": "#bc4800",
                      "on-error": "#ffffff",
                      "primary-container": "#2563eb",
                      "on-tertiary": "#ffffff",
                      "on-error-container": "#93000a",
                      "surface-tint": "#0053db",
                      "surface-container-lowest": "#ffffff",
                      "on-tertiary-fixed-variant": "#7d2d00",
                      "surface-container-low": "#eff4ff",
                      "surface-container-highest": "#d3e4fe",
                      "surface": "#f8f9ff",
                      "on-surface-variant": "#434655",
                      "surface-bright": "#f8f9ff",
                      "primary": "#004ac6",
                      "secondary-fixed-dim": "#4edea3",
                      "background": "#f8f9ff",
                      "on-primary-fixed": "#00174b",
                      "on-primary-container": "#eeefff",
                      "on-primary": "#ffffff",
                      "surface-container-high": "#dce9ff",
                      "on-background": "#0b1c30",
                      "inverse-on-surface": "#eaf1ff",
                      "on-secondary-fixed": "#002113",
                      "on-tertiary-fixed": "#360f00",
                      "secondary-fixed": "#6ffbbe",
                      "secondary": "#006c49",
                      "tertiary-fixed": "#ffdbcd",
                      "on-secondary-container": "#00714d",
                      "surface-variant": "#d3e4fe",
                      "secondary-container": "#6cf8bb",
                      "outline": "#737686",
                      "surface-dim": "#cbdbf5",
                      "inverse-primary": "#b4c5ff",
                      "primary-fixed": "#dbe1ff",
                      "inverse-surface": "#213145",
                      "outline-variant": "#c3c6d7",
                      "primary-fixed-dim": "#b4c5ff",
                      "tertiary-fixed-dim": "#ffb596",
                      "tertiary": "#943700",
                      "on-secondary-fixed-variant": "#005236",
                      "on-secondary": "#ffffff",
                      "on-primary-fixed-variant": "#003ea8"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "stack-md": "0.5rem",
                      "stack-lg": "1rem",
                      "gutter": "0.75rem",
                      "stack-sm": "0.25rem",
                      "container-margin": "1rem",
                      "stack-xl": "1.5rem"
              },
              "fontFamily": {
                      "body-lg": ["Inter"],
                      "label-sm": ["Inter"],
                      "label-md": ["Inter"],
                      "body-md": ["Inter"],
                      "h3": ["Inter"],
                      "h1": ["Inter"],
                      "h2": ["Inter"]
              },
              "fontSize": {
                      "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                      "label-sm": ["11px", {"lineHeight": "14px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                      "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
                      "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                      "h3": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                      "h1": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                      "h2": ["20px", {"lineHeight": "28px", "fontWeight": "600"}]
              }
            },
          },
        }
    </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background min-h-screen">
<!-- TopAppBar -->
<header class="sticky top-0 w-full z-40 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm flex items-center px-4 h-14">
<button class="mr-4 active:opacity-70 transition-all">
<span class="material-symbols-outlined text-on-surface">arrow_back</span>
</button>
<h1 class="font-inter text-sm font-semibold tracking-tight text-on-surface">Detail Pemesanan</h1>
<div class="ml-auto flex items-center gap-4">
<span class="material-symbols-outlined text-blue-600">help</span>
</div>
</header>
<main class="max-w-3xl mx-auto px-container-margin py-stack-xl pb-32">
<div class="space-y-stack-xl">
<!-- Service Summary Section -->
<section class="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant shadow-sm">
<div class="flex gap-4">
<img alt="Service Image" class="w-20 h-20 rounded-lg object-cover" data-alt="Close up of a professional technician hands working on air conditioner unit with high precision tools in a clean indoor setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2PaH_KwQs-aL5f4JILttOHq8PTXErhDZk4jtLkyWvj_F6cjeBu3213tiXoCsgxCtvA5y5jeKUGgMKrm6ktzn4Pd_zqdQxw6p7QVtI1FMErp30YGmGExCVwj5TiYKHXfPkVlM__o0rSM5uA1UCrr6JPYA8jksdLggRqFssUjoOMMiRMSJ15JxaNyYdSJVxQxRIpaD53KrDm2qdtOd3OgLzsBOk31UxK__G3TiHIuKUG2kXQKLSnrJ7Trbq_WJGLcr5D13gF3buaY"/>
<div class="flex-1">
<div class="flex justify-between items-start">
<h2 class="font-h2 text-h2 text-on-surface">Servis AC Cuci &amp; Tambah Freon</h2>
<span class="bg-surface-container text-primary font-label-sm text-label-sm px-2 py-1 rounded-full">Top Rated</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">Provider: Mitra Mandiri Teknik</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-yellow-500 text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md text-on-surface">4.9 (120+ Ulasan)</span>
</div>
</div>
</div>
</section>
<!-- Date & Time Picker -->
<section class="space-y-stack-md">
<h3 class="font-h3 text-h3 text-on-surface px-1">Pilih Waktu Kunjungan</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
<div class="relative">
<label class="absolute -top-2 left-3 bg-surface px-1 font-label-md text-label-md text-outline">Tanggal</label>
<div class="w-full flex items-center justify-between border border-outline p-stack-lg rounded-xl bg-surface-container-lowest">
<span class="font-body-lg text-body-lg">Senin, 24 Mei 2024</span>
<span class="material-symbols-outlined text-primary">calendar_month</span>
</div>
</div>
<div class="relative">
<label class="absolute -top-2 left-3 bg-surface px-1 font-label-md text-label-md text-outline">Waktu</label>
<div class="w-full flex items-center justify-between border border-outline p-stack-lg rounded-xl bg-surface-container-lowest">
<span class="font-body-lg text-body-lg">10:00 - 11:00 WIB</span>
<span class="material-symbols-outlined text-primary">schedule</span>
</div>
</div>
</div>
</section>
<!-- Location Section -->
<section class="space-y-stack-md">
<div class="flex justify-between items-center px-1">
<h3 class="font-h3 text-h3 text-on-surface">Lokasi Pengerjaan</h3>
<button class="text-primary font-label-md text-label-md">Ubah Alamat</button>
</div>
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
<div class="h-40 w-full bg-surface-container-highest relative">
<img alt="Map snippet" class="w-full h-full object-cover opacity-50" data-alt="Stylized top down map view of a city residential area with streets and green parks in soft pastel colors" data-location="Jakarta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI-4VOAepp_dczmQyBaonhl_K2Nc38wGvzLSo4AOjEzaNKfdpc9Xeu3XbPpz0zMXDAdrSTsekMRFnafWo7Ucn3oSaB0ZAVaN7qfNC22lnC2ntVujg5_GOGVIEgzTRyvoCFpWPQ5_oIH1w-GCRYTrpDqRnubkpFTUAjAuCJ7a5yG-JcSZ84SiNguVw0ibE-IX70kFBnOHO3kMUoswNgrKllyuntH8Aer7DmYLLVqc8v2DVoPoRNWe0ZxSu6hKtgRTjf5TWXMK0zR1o"/>
<div class="absolute inset-0 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">location_on</span>
</div>
</div>
<div class="p-stack-lg flex gap-3">
<span class="material-symbols-outlined text-outline">home</span>
<div>
<p class="font-label-md text-label-md font-bold text-on-surface">Rumah Utama</p>
<p class="font-body-md text-body-md text-on-surface-variant">Jl. Kebon Jeruk No. 12, RT 05/RW 03, Jakarta Barat, 11530</p>
</div>
</div>
</div>
</section>
<!-- Payment Method Section -->
<section class="space-y-stack-md">
<h3 class="font-h3 text-h3 text-on-surface px-1">Metode Pembayaran</h3>
<div class="space-y-stack-md">
<!-- Gopay -->
<label class="flex items-center justify-between p-stack-lg bg-surface-container-lowest border-2 border-primary rounded-xl cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>
</div>
<div>
<p class="font-label-md text-label-md font-bold text-on-surface">GoPay</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Saldo: Rp 450.000</p>
</div>
</div>
<input checked="" class="text-primary focus:ring-primary w-5 h-5" name="payment" type="radio"/>
</label>
<!-- OVO -->
<label class="flex items-center justify-between p-stack-lg bg-surface-container-lowest border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors">
<div class="flex items-center gap-4">
<div class="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-purple-600" style="font-variation-settings: 'FILL' 1;">payments</span>
</div>
<div>
<p class="font-label-md text-label-md font-bold text-on-surface">OVO</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Saldo: Rp 12.500</p>
</div>
</div>
<input class="text-primary focus:ring-primary w-5 h-5" name="payment" type="radio"/>
</label>
<!-- QRIS -->
<label class="flex items-center justify-between p-stack-lg bg-surface-container-lowest border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors">
<div class="flex items-center gap-4">
<div class="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-pink-600">qr_code_2</span>
</div>
<div>
<p class="font-label-md text-label-md font-bold text-on-surface">QRIS</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Scan via aplikasi bank apa saja</p>
</div>
</div>
<input class="text-primary focus:ring-primary w-5 h-5" name="payment" type="radio"/>
</label>
</div>
</section>
<!-- Cost Summary -->
<section class="bg-surface-container-high p-stack-lg rounded-xl space-y-stack-md">
<h3 class="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">Estimasi Biaya</h3>
<div class="space-y-stack-sm">
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Biaya Servis (1 Unit)</span>
<span>Rp 75.000</span>
</div>
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Biaya Transportasi</span>
<span>Rp 15.000</span>
</div>
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Biaya Layanan</span>
<span>Rp 2.000</span>
</div>
<div class="pt-stack-md mt-stack-md border-t border-outline-variant flex justify-between items-center">
<span class="font-label-md text-label-md font-bold text-on-surface">Total Pembayaran</span>
<span class="font-h2 text-h2 text-primary">Rp 92.000</span>
</div>
</div>
</section>
</div>
</main>
<!-- Sticky Bottom Confirmation -->
<div class="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-4 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
<div class="max-w-3xl mx-auto flex items-center gap-4">
<div class="hidden md:block flex-1">
<p class="font-label-sm text-label-sm text-on-surface-variant">Total Pembayaran</p>
<p class="font-h2 text-h2 text-primary">Rp 92.000</p>
</div>
<button class="flex-1 bg-primary text-on-primary font-label-md text-label-md font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
<span>Konfirmasi Pemesanan</span>
<span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</body></html>

<!-- Detail Pemesanan -->
<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Tracking Booking - Amanah</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "secondary": "#006c49",
                    "primary-fixed-dim": "#b4c5ff",
                    "on-tertiary-container": "#ffede6",
                    "surface-container-high": "#dce9ff",
                    "on-secondary": "#ffffff",
                    "surface": "#f8f9ff",
                    "surface-container-low": "#eff4ff",
                    "on-secondary-fixed": "#002113",
                    "secondary-fixed-dim": "#4edea3",
                    "surface-tint": "#0053db",
                    "outline-variant": "#c3c6d7",
                    "on-primary-container": "#eeefff",
                    "inverse-surface": "#213145",
                    "on-surface-variant": "#434655",
                    "on-error-container": "#93000a",
                    "error-container": "#ffdad6",
                    "tertiary-fixed-dim": "#ffb596",
                    "surface-variant": "#d3e4fe",
                    "on-surface": "#0b1c30",
                    "inverse-on-surface": "#eaf1ff",
                    "inverse-primary": "#b4c5ff",
                    "on-tertiary": "#ffffff",
                    "on-error": "#ffffff",
                    "primary-fixed": "#dbe1ff",
                    "on-secondary-fixed-variant": "#005236",
                    "surface-dim": "#cbdbf5",
                    "tertiary": "#943700",
                    "surface-container-lowest": "#ffffff",
                    "background": "#f8f9ff",
                    "on-primary-fixed": "#00174b",
                    "primary-container": "#2563eb",
                    "on-tertiary-fixed": "#360f00",
                    "surface-container": "#e5eeff",
                    "on-primary": "#ffffff",
                    "surface-bright": "#f8f9ff",
                    "surface-container-highest": "#d3e4fe",
                    "primary": "#004ac6",
                    "tertiary-container": "#bc4800",
                    "outline": "#737686",
                    "on-secondary-container": "#00714d",
                    "secondary-fixed": "#6ffbbe",
                    "on-background": "#0b1c30",
                    "on-tertiary-fixed-variant": "#7d2d00",
                    "error": "#ba1a1a",
                    "on-primary-fixed-variant": "#003ea8",
                    "secondary-container": "#6cf8bb",
                    "tertiary-fixed": "#ffdbcd"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "container-margin": "1rem",
                    "gutter": "0.75rem",
                    "stack-sm": "0.25rem",
                    "stack-md": "0.5rem",
                    "stack-lg": "1rem",
                    "stack-xl": "1.5rem"
            },
            "fontFamily": {
                    "h3": ["Inter"],
                    "body-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "body-lg": ["Inter"],
                    "h2": ["Inter"],
                    "h1": ["Inter"],
                    "label-md": ["Inter"]
            },
            "fontSize": {
                    "h3": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "label-sm": ["11px", {"lineHeight": "14px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "h2": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "h1": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}]
            }
          },
        },
      }
    </script>
<style>.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24
    }
.map-container {
    height: calc(100vh - 56px);
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuCR8uqzJuLpavevCBh-7QFYbzBiV5i9FLBsXXVVf2wi3MVqz2ZF9gfVFVco09-T3Xx-PNeSLZoHZ5-ndu8bM5yVDvCuBxUK7_QVS9bvOwVUR8ZGVXwF_L5VPdu6KpIzRBykF1VC0LoBoED6UPlrFyvOMBL7u9KLMA51JiFm7VIgzPNne8DCS3DC3ZiQQudXcF6PAkjxuzEFhxzrxBrihg5vMD-yvktcFMhksAzHSWadrXzUjRuRdume3Qpz5f_0nzj_xrXjV3k56BQ);
    background-size: cover;
    background-position: center
    }
.route-line {
    stroke-dasharray: 8;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))
    }</style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background font-body-md text-on-background antialiased">
<header class="bg-white dark:bg-gray-900 border-b border-slate-100 dark:border-slate-800 shadow-sm flex justify-between items-center h-14 px-4 w-full z-50 sticky top-0 font-['Inter'] antialiased">
<div class="flex items-center gap-4">
<button class="active:scale-95 duration-150 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-full">
<span class="material-symbols-outlined text-slate-500" data-icon="arrow_back">arrow_back</span>
</button>
<h1 class="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-500">Amanah</h1>
</div>
<div class="flex items-center gap-2">
<button class="active:scale-95 duration-150 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-full">
<span class="material-symbols-outlined text-slate-500" data-icon="help_outline">help_outline</span>
</button>
</div>
</header>
<main class="relative">
<div class="map-container w-full relative overflow-hidden" data-location="Jakarta, Indonesia" style="">
<svg class="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 800">
<path class="route-line" d="M 100 200 Q 150 350 300 500" fill="none" opacity="0.8" stroke="#2563EB" stroke-linecap="round" stroke-width="6"></path>
</svg>
<div class="absolute top-[180px] left-[80px] flex flex-col items-center">
<div class="w-10 h-10 bg-white rounded-full border-2 border-blue-600 shadow-lg flex items-center justify-center">
<span class="material-symbols-outlined text-blue-600" data-icon="person_pin_circle">person_pin_circle</span>
</div>
<div class="bg-white px-2 py-1 rounded-lg shadow-md mt-1 border border-slate-100">
<p class="text-[10px] font-bold text-on-surface">Lokasi Anda</p>
</div>
</div>
<div class="absolute top-[480px] left-[280px] flex flex-col items-center">
<div class="w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
<span class="material-symbols-outlined text-white" data-icon="electric_moped">electric_moped</span>
</div>
<div class="bg-blue-600 px-3 py-1 rounded-lg shadow-md mt-1">
<p class="text-[10px] font-bold text-white">Budi Santoso</p>
</div>
</div>
</div>
<section class="fixed bottom-0 left-0 w-full px-container-margin pb-8 z-40">
<div class="max-w-md mx-auto bg-white rounded-xl shadow-[0_-4px_24px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
<div class="p-stack-lg border-b border-slate-50">
<div class="flex items-center justify-between mb-stack-md">
<div class="flex items-center gap-2">
<span class="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
<span class="font-label-md text-secondary">Teknisi sedang dalam perjalanan</span>
</div>
<div class="bg-surface-container-low px-2 py-1 rounded-lg">
<span class="font-label-md text-primary font-bold">12 Menit</span>
</div>
</div>
<div class="flex items-center gap-stack-lg py-stack-md">
<div class="relative">
<img alt="Budi Santoso" class="w-14 h-14 rounded-full object-cover" data-alt="Portrait of a professional technician smiling, wearing a clean uniform polo shirt in a bright setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6u414W9jAz23oFAr1d4QcDDs8WYJjoiNvvP_j8EaOVMr5_aMyTjWR3nGyTJvJIXMUJ6dbKXby0cgIMIeRqEH1GqxoJD1R7tturiJBOcdnIaU-0cXoqrGB4KbgxzisZcvDfafvTOhziF5yH4j3qiResPAAmbjA8BQAqL8djnhNv4hpreff5aEACtRrWLWFad888uwvNc883N0ctnzqTkycjT2oa6dshVqHS7jkDivwEtpujRr8mGoxYpuwQAT9wyD7Xx8SRR7jOS0"/>
<div class="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
<div class="bg-secondary p-1 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-white text-[12px]" data-icon="verified" data-weight="fill" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
</div>
</div>
<div class="flex-1">
<h2 class="font-h3 text-on-surface">Budi Santoso</h2>
<div class="flex items-center gap-2 mt-1">
<span class="bg-surface-container text-on-surface-variant font-label-sm px-2 py-0.5 rounded uppercase">B 1234 ABC</span>
<div class="flex items-center gap-0.5 text-secondary">
<span class="material-symbols-outlined text-[14px]" data-icon="star" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-sm">4.9</span>
</div>
</div>
</div>
<div class="flex gap-2">
<button class="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-primary active:scale-90 transition-transform hover:bg-slate-50">
<span class="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
</button>
<button class="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-primary active:scale-90 transition-transform hover:bg-slate-50">
<span class="material-symbols-outlined" data-icon="call">call</span>
</button>
</div>
</div>
</div>
<div class="p-stack-lg bg-surface-container-lowest">
<div class="flex flex-col gap-3">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-slate-400 mt-0.5" data-icon="home_repair_service">home_repair_service</span>
<div>
<p class="font-label-sm text-slate-500 uppercase">Layanan</p>
<p class="font-body-md font-semibold text-on-surface">Perbaikan AC - Cuci AC Standard</p>
</div>
</div>
<div class="hidden">
<button class="w-full bg-primary-container text-on-primary py-4 rounded-xl font-h3 shadow-lg active:scale-[0.98] transition-transform">
                                Konfirmasi Selesai
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>
<div class="fixed top-20 right-container-margin flex flex-col gap-2 z-30">
<button class="w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-on-surface-variant active:scale-90 transition-transform">
<span class="material-symbols-outlined" data-icon="my_location">my_location</span>
</button>
<button class="w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-on-surface-variant active:scale-90 transition-transform">
<span class="material-symbols-outlined" data-icon="layers">layers</span>
</button>
</div>
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-3 pb-safe bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] md:hidden">
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="text-[11px] font-medium font-['Inter']">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-xl px-4 py-1.5 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span class="text-[11px] font-medium font-['Inter']">Activity</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
<span class="text-[11px] font-medium font-['Inter']">Inbox</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="text-[11px] font-medium font-['Inter']">Profile</span>
</a>
</nav>
</body></html>

<!-- Login / Masuk -->
<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "inverse-on-surface": "#eaf1ff",
                    "on-primary-container": "#eeefff",
                    "on-primary-fixed": "#00174b",
                    "on-tertiary-container": "#ffede6",
                    "primary-fixed": "#dbe1ff",
                    "outline": "#737686",
                    "on-secondary-fixed": "#002113",
                    "on-secondary-container": "#00714d",
                    "on-primary": "#ffffff",
                    "background": "#f8f9ff",
                    "surface-container": "#e5eeff",
                    "on-surface-variant": "#434655",
                    "on-surface": "#0b1c30",
                    "primary-container": "#2563eb",
                    "tertiary-fixed": "#ffdbcd",
                    "secondary-container": "#6cf8bb",
                    "on-error-container": "#93000a",
                    "error-container": "#ffdad6",
                    "primary-fixed-dim": "#b4c5ff",
                    "on-tertiary-fixed": "#360f00",
                    "inverse-surface": "#213145",
                    "secondary-fixed": "#6ffbbe",
                    "on-tertiary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-secondary": "#ffffff",
                    "primary": "#004ac6",
                    "surface-container-highest": "#d3e4fe",
                    "surface-container-high": "#dce9ff",
                    "secondary-fixed-dim": "#4edea3",
                    "on-tertiary-fixed-variant": "#7d2d00",
                    "inverse-primary": "#b4c5ff",
                    "tertiary-container": "#bc4800",
                    "surface-container-low": "#eff4ff",
                    "outline-variant": "#c3c6d7",
                    "surface-bright": "#f8f9ff",
                    "surface-dim": "#cbdbf5",
                    "on-background": "#0b1c30",
                    "on-secondary-fixed-variant": "#005236",
                    "on-primary-fixed-variant": "#003ea8",
                    "surface": "#f8f9ff",
                    "surface-container-lowest": "#ffffff",
                    "tertiary": "#943700",
                    "surface-tint": "#0053db",
                    "secondary": "#006c49",
                    "tertiary-fixed-dim": "#ffb596",
                    "surface-variant": "#d3e4fe",
                    "on-error": "#ffffff"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-lg": "1rem",
                    "stack-md": "0.5rem",
                    "gutter": "0.75rem",
                    "container-margin": "1rem",
                    "stack-xl": "1.5rem",
                    "stack-sm": "0.25rem"
            },
            "fontFamily": {
                    "h3": ["Inter"],
                    "body-md": ["Inter"],
                    "label-md": ["Inter"],
                    "h2": ["Inter"],
                    "label-sm": ["Inter"],
                    "body-lg": ["Inter"],
                    "h1": ["Inter"]
            },
            "fontSize": {
                    "h3": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
                    "h2": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "label-sm": ["11px", {"lineHeight": "14px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "h1": ["24px", {"lineHeight": "32px", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9ff;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-surface">
<!-- TopAppBar -->
<header class="fixed top-0 left-0 w-full z-50 flex items-center h-14 px-4 bg-white border-b border-gray-100 shadow-sm">
<div class="flex items-center w-full max-w-2xl mx-auto">
<button class="mr-4 active:scale-95 transition-all text-blue-600">
<span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<h1 class="font-inter text-base font-semibold text-on-surface">Confirm Completion</h1>
</div>
</header>
<main class="pt-20 pb-32 px-container-margin max-w-2xl mx-auto space-y-6">
<!-- Success Header -->
<section class="text-center space-y-stack-md py-4">
<div class="inline-flex items-center justify-center w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full mb-2">
<span class="material-symbols-outlined text-4xl" data-icon="check_circle" data-weight="fill" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<h2 class="font-h1 text-h1">Pekerjaan Telah Selesai!</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Pastikan semua pekerjaan telah dilakukan dengan baik sebelum melepas dana.</p>
</section>
<!-- Provider Info Card -->
<div class="bg-white rounded-xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-4">
<img alt="Provider Photo" class="w-14 h-14 rounded-full object-cover" data-alt="Professional technician headshot with a friendly smile, wearing a clean work uniform in a bright indoor setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtTdyqzqYow_4T1YcufrM4ax7Mv1tc98Mir7Xsh2JwzfaYRRBJo2Ec9Oy2OM455QvcI1JThCiPbaiK0bEA1c2y6lh6rsQoOB6_qRegBR3W3vkwl_Ez10VFYdoK7yo1f09j11DrawAAh697Q6dj0Ej5jjF-bpJLifiIN0myPJvbeyjxkKTHybvr5Rct0N5KiVVx6NyDb6ORUDGL48lWEyGGeHcFKtZ7-3jv7FKUgSa-XeJYSOenPw0nNR_Jz1LQnH4imwgvZd8frHo"/>
<div class="flex-1">
<h3 class="font-h3 text-h3 text-on-surface">Budi Santoso</h3>
<p class="font-label-md text-label-md text-on-surface-variant">Spesialis AC</p>
</div>
<div class="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
<span class="material-symbols-outlined text-yellow-500 text-sm" data-icon="star" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-sm text-label-sm text-on-surface">4.9</span>
</div>
</div>
<!-- Summary Section -->
<div class="bg-white rounded-xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 space-y-4">
<h4 class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Ringkasan Layanan</h4>
<div class="space-y-3">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary" data-icon="ac_unit">ac_unit</span>
<div>
<p class="font-body-md text-body-md font-semibold">Servis AC Cuci &amp; Tambah Freon</p>
<p class="font-label-md text-label-md text-on-surface-variant">2 Unit AC Split</p>
</div>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="calendar_today">calendar_today</span>
<p class="font-body-md text-body-md">Senin, 24 Mei 2024 • 10:00 WIB</p>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="location_on">location_on</span>
<p class="font-body-md text-body-md">Jl. Sudirman No. 12, Jakarta Selatan</p>
</div>
</div>
</div>
<!-- Payment Box -->
<div class="bg-primary-container text-on-primary-container rounded-xl p-5 shadow-lg flex justify-between items-center">
<div>
<p class="font-label-md text-label-md opacity-90">Total Pembayaran</p>
<p class="font-h1 text-h1">Rp 92.000</p>
</div>
<div class="text-right">
<span class="material-symbols-outlined text-3xl opacity-50" data-icon="account_balance_wallet">account_balance_wallet</span>
<p class="text-[10px] font-medium mt-1 uppercase tracking-tighter">Escrow Secured</p>
</div>
</div>
<!-- Rating Section -->
<div class="bg-white rounded-xl p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 text-center space-y-4">
<h4 class="font-h3 text-h3">Bagaimana hasil pekerjaannya?</h4>
<div class="flex justify-center gap-2">
<span class="material-symbols-outlined text-4xl text-yellow-500 cursor-pointer" data-icon="star" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-4xl text-yellow-500 cursor-pointer" data-icon="star" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-4xl text-yellow-500 cursor-pointer" data-icon="star" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-4xl text-yellow-500 cursor-pointer" data-icon="star" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-4xl text-outline-variant cursor-pointer" data-icon="star">star</span>
</div>
<div class="w-full">
<textarea class="w-full bg-background border border-outline-variant rounded-lg p-3 font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50" placeholder="Tulis ulasan Anda (opsional)" rows="3"></textarea>
</div>
</div>
<!-- Tip Option -->
<div class="space-y-3">
<h4 class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant px-1">Berikan Tip (Opsional)</h4>
<div class="flex flex-wrap gap-2">
<button class="px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface font-label-md hover:border-primary hover:text-primary transition-colors">Rp 5.000</button>
<button class="px-4 py-2 rounded-full border border-primary bg-primary-container/10 text-primary font-label-md">Rp 10.000</button>
<button class="px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface font-label-md hover:border-primary hover:text-primary transition-colors">Rp 20.000</button>
<button class="px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface font-label-md hover:border-primary hover:text-primary transition-colors">Lainnya</button>
</div>
</div>
</main>
<!-- Sticky Bottom Action -->
<div class="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 shadow-[0px_-4px_12px_rgba(0,0,0,0.05)]">
<div class="max-w-2xl mx-auto">
<button class="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-h3 shadow-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Selesaikan &amp; Lepas Dana
                <span class="material-symbols-outlined" data-icon="send">send</span>
</button>
</div>
</div>
</body></html>