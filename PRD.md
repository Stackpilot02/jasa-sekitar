# Product Requirements Document (PRD)
## Jasa Sekitar Kamu — Hyperlocal Service Platform

**Versi:** 1.0  
**Tanggal:** April 2026  
**Status:** Draft  
**Tech Stack:** Capacitor.js (Cross-platform Mobile)

---

## 1. Ringkasan Eksekutif

### 1.1 Latar Belakang

Masyarakat Indonesia, khususnya di kota-kota besar dan daerah padat penduduk, sering mengalami kesulitan dalam menemukan penyedia jasa lokal yang terpercaya, cepat, dan mudah diakses. Proses pencarian tukang, asisten rumah tangga (ART), teknisi, atau jasa kecil lainnya masih sangat bergantung pada rekomendasi mulut ke mulut, grup WhatsApp, atau platform umum seperti marketplace yang tidak dioptimalkan untuk kebutuhan lokal mendesak.

### 1.2 Visi Produk

Menjadi platform hyperlocal service terpercaya yang menghubungkan penyedia jasa lokal dengan pengguna di radius terdekat, layaknya "Gojek untuk jasa rumah tangga dan keahlian lokal."

### 1.3 Misi

Memberdayakan pekerja jasa lokal agar mudah ditemukan, terverifikasi, dan mendapatkan penghasilan lebih — sekaligus memudahkan masyarakat mendapatkan bantuan cepat dan terpercaya di sekitar tempat tinggal mereka.

---

## 2. Masalah yang Diselesaikan

### 2.1 Masalah dari Sisi Pengguna (Konsumen)

- Sulit menemukan tukang, ART, atau teknisi yang tersedia sekarang juga di sekitar rumah
- Tidak ada jaminan kualitas dan kepercayaan terhadap penyedia jasa asing
- Proses negosiasi harga tidak transparan dan memakan waktu
- Tidak ada sistem lacak real-time ketika penyedia jasa dalam perjalanan
- Proses pembayaran yang tidak praktis (harus menyiapkan uang tunai)

### 2.2 Masalah dari Sisi Penyedia Jasa

- Sulit menjangkau calon pelanggan baru di luar lingkaran kenalan
- Tidak ada platform terpusat untuk menampilkan portofolio dan keahlian
- Pendapatan tidak stabil karena ketergantungan pada referral manual
- Tidak ada sistem reputasi yang bisa dibangun secara digital

---

## 3. Target Pengguna

### 3.1 Konsumen (User)

| Segmen | Deskripsi |
|--------|-----------|
| Rumah Tangga Aktif | Pasangan muda, keluarga dengan anak, yang membutuhkan jasa cepat dan terpercaya |
| Profesional Sibuk | Pekerja kantoran 25–45 tahun yang tidak punya waktu mencari sendiri |
| Penghuni Apartemen | Penghuni unit apartemen di kota besar yang butuh jasa teknis atau kebersihan |
| Lansia & Keluarga | Orang tua atau keluarga yang membutuhkan bantuan pekerjaan fisik |

### 3.2 Penyedia Jasa (Provider)

| Kategori Jasa | Contoh |
|---------------|--------|
| Konstruksi & Perbaikan | Tukang bangunan, cat, listrik, ledeng, AC |
| Kebersihan | ART harian, cleaning service, laundry panggilan |
| Teknisi | Servis elektronik, komputer, CCTV, pompa air |
| Kendaraan | Cuci motor/mobil, tambal ban, servis ringan |
| Perawatan | Potong rambut, pijat, perawatan tanaman |
| Lainnya | Jasa pindahan, pengiriman lokal, les privat |

---

## 4. Fitur Produk

### 4.1 Fitur Utama — Konsumen

#### F-C01: Pencarian & Penemuan Jasa
- Deteksi lokasi otomatis (GPS)
- Tampilkan penyedia jasa dalam radius 1–10 km (dapat diatur)
- Filter berdasarkan: kategori jasa, rating, harga, ketersediaan sekarang
- Tampilan peta interaktif (pin lokasi penyedia jasa)
- Pencarian berdasarkan kata kunci (contoh: "tukang cat", "servis AC")

#### F-C02: Booking Cepat
- Booking instan (provider langsung dikonfirmasi atau ditolak dalam 5 menit)
- Booking terjadwal (pilih tanggal dan waktu)
- Estimasi biaya sebelum booking berdasarkan jenis jasa dan jarak
- Tampilan status booking real-time: Menunggu → Dikonfirmasi → Dalam Perjalanan → Selesai

#### F-C03: Profil & Verifikasi Provider
- Tampilan foto profil, nama, rating bintang, jumlah pekerjaan selesai
- Badge verifikasi: KTP, Nomor HP, Rekening Bank
- Portofolio foto hasil pekerjaan sebelumnya
- Spesialisasi dan keahlian yang tertera jelas
- Ulasan dan komentar dari konsumen sebelumnya

#### F-C04: Chat Langsung
- Chat real-time antara konsumen dan penyedia jasa setelah booking dikonfirmasi
- Kirim foto/gambar (misal: foto kerusakan yang perlu diperbaiki)
- Notifikasi push untuk pesan masuk
- Riwayat percakapan tersimpan per sesi pemesanan

#### F-C05: Pembayaran
- Metode pembayaran: Transfer Bank, QRIS, GoPay, OVO, Dana, Kartu Kredit/Debit
- Pembayaran melalui in-app (escrow) — dana diteruskan ke provider setelah pekerjaan selesai
- Struk digital dikirim via email atau WhatsApp
- Riwayat transaksi lengkap di aplikasi

#### F-C06: Rating & Ulasan
- Rating bintang 1–5 setelah pekerjaan selesai
- Kolom ulasan teks (opsional)
- Opsi beri tip digital kepada provider
- Laporkan masalah jika pekerjaan tidak memuaskan

### 4.2 Fitur Utama — Penyedia Jasa (Provider)

#### F-P01: Pendaftaran & Profil Provider
- Form pendaftaran dengan verifikasi KTP (upload foto KTP)
- Tambah foto profil, deskripsi keahlian, area layanan
- Upload portofolio foto hasil kerja
- Atur jam operasional (kapan siap menerima order)
- Tetapkan tarif dasar per jam atau per pekerjaan

#### F-P02: Manajemen Pesanan
- Dashboard pesanan masuk, aktif, dan selesai
- Terima atau tolak pesanan dengan satu ketukan
- Notifikasi push untuk pesanan baru di sekitar lokasi
- Navigasi built-in ke lokasi konsumen (integrasi Google Maps)

#### F-P03: Pendapatan & Keuangan
- Laporan penghasilan harian, mingguan, bulanan
- Penarikan saldo ke rekening bank atau e-wallet
- Riwayat pembayaran lengkap dan transparan
- Informasi potongan platform fee yang jelas

#### F-P04: Paket Subscription (Premium Provider)
- Tampil lebih atas di hasil pencarian
- Akses ke lebih banyak order per hari (tanpa batas harian)
- Badge "Provider Terverifikasi Premium"
- Analitik performa: berapa kali profil dilihat, konversi booking, rating rata-rata

### 4.3 Fitur Platform (Admin)

#### F-A01: Verifikasi Provider
- Dashboard verifikasi dokumen KTP provider baru
- Proses review 1x24 jam
- Sistem penolakan otomatis jika dokumen tidak valid

#### F-A02: Moderasi Konten
- Filter ulasan tidak pantas secara otomatis
- Sistem pelaporan penyalahgunaan dari konsumen
- Suspend atau nonaktifkan akun provider yang melanggar

#### F-A03: Manajemen Dispute
- Konsumen bisa mengajukan komplain dalam 24 jam setelah pekerjaan selesai
- Admin mediasi antara konsumen dan provider
- Proses refund jika terbukti pelanggaran

---

## 5. User Flow

### 5.1 Flow Konsumen — Booking Jasa

```
Buka App
  └─> Izin Lokasi (GPS)
        └─> Halaman Utama (Peta + Kategori Jasa)
              └─> Pilih Kategori / Cari Provider
                    └─> Lihat Daftar Provider Terdekat
                          └─> Pilih Provider → Lihat Profil
                                └─> Klik "Pesan Sekarang"
                                      └─> Isi Detail Pekerjaan + Waktu
                                            └─> Konfirmasi & Bayar
                                                  └─> Tunggu Konfirmasi Provider (maks 5 menit)
                                                        └─> Provider Berangkat → Live Tracking
                                                              └─> Pekerjaan Selesai
                                                                    └─> Beri Rating & Ulasan
```

### 5.2 Flow Provider — Terima Pesanan

```
Buka App Provider
  └─> Aktifkan Status "Online"
        └─> Notifikasi Order Masuk
              └─> Lihat Detail Order (lokasi, jenis jasa, estimasi bayar)
                    └─> Terima / Tolak
                          └─> (Jika Terima) Navigasi ke Lokasi Konsumen
                                └─> Update Status: "Tiba di Lokasi"
                                      └─> Kerjakan Pekerjaan
                                            └─> Update Status: "Selesai"
                                                  └─> Dana Masuk ke Saldo (setelah konsumen konfirmasi)
```

---

## 6. Arsitektur Teknis

### 6.1 Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Mobile App (iOS & Android) | Capacitor.js + React / Vue.js |
| Backend API | Node.js (Express) atau Laravel (PHP) |
| Database | PostgreSQL (data utama) + Redis (cache & real-time) |
| Real-time Communication | Socket.IO (chat & tracking) |
| Maps & Geolocation | Google Maps Platform (Maps SDK, Places API, Directions API) |
| Push Notification | Firebase Cloud Messaging (FCM) |
| File Storage | AWS S3 atau Cloudflare R2 (foto profil, portofolio) |
| Payment Gateway | Midtrans atau Xendit (Indonesia-native) |
| Authentication | JWT + OAuth2 (Login dengan Google/Apple) |

### 6.2 Capacitor.js Plugin yang Dibutuhkan

```
@capacitor/geolocation       — Deteksi lokasi GPS
@capacitor/push-notifications — Notifikasi push
@capacitor/camera            — Upload foto KTP dan portofolio
@capacitor/network           — Deteksi koneksi internet
@capacitor/local-notifications — Notifikasi lokal (pengingat jadwal)
@capacitor/haptics           — Feedback haptic saat aksi penting
@capacitor/share             — Bagikan link profil provider
```

### 6.3 Struktur Aplikasi (Halaman Utama)

```
/screens
  ├── Auth
  │   ├── Splash.tsx
  │   ├── Login.tsx
  │   ├── Register.tsx
  │   └── OTP.tsx
  ├── Consumer
  │   ├── Home.tsx          (Peta + Kategori)
  │   ├── Search.tsx        (Daftar Provider)
  │   ├── ProviderDetail.tsx
  │   ├── Booking.tsx
  │   ├── TrackingLive.tsx
  │   ├── Chat.tsx
  │   ├── History.tsx
  │   └── Profile.tsx
  └── Provider
      ├── Dashboard.tsx
      ├── OrderIncoming.tsx
      ├── OrderActive.tsx
      ├── Earnings.tsx
      └── ProfileProvider.tsx
```

---

## 7. Model Monetisasi

### 7.1 Fee per Transaksi (Commission-based)

| Tier Provider | Komisi Platform |
|---------------|-----------------|
| Provider Baru (0–50 order) | 15% per transaksi |
| Provider Aktif (51–200 order) | 12% per transaksi |
| Provider Senior (200+ order) | 10% per transaksi |

Komisi dipotong otomatis dari pembayaran konsumen sebelum dana diteruskan ke provider.

### 7.2 Subscription Provider (Recurring Revenue)

| Paket | Harga | Keuntungan |
|-------|-------|------------|
| Gratis | Rp 0/bulan | Maks 5 order/hari, muncul di hasil pencarian biasa |
| Basic | Rp 49.000/bulan | Maks 15 order/hari, prioritas pencarian medium |
| Pro | Rp 99.000/bulan | Unlimited order, prioritas pencarian tinggi, badge premium, analitik |
| Bisnis | Rp 249.000/bulan | Untuk tim/usaha jasa (maks 5 akun staff), dashboard bisnis, laporan keuangan |

### 7.3 Revenue Tambahan (Fase 2)

- Iklan berbayar untuk provider (muncul di slot teratas dengan label "Unggulan")
- Fitur "Express Background Check" berbayar untuk konsumen (verifikasi lebih mendalam)
- Kemitraan B2B dengan perusahaan properti, apartemen, atau hotel untuk layanan jasa terjadwal rutin

---

## 8. Metrik Keberhasilan (KPI)

### 8.1 Akuisisi

| Metrik | Target 3 Bulan | Target 6 Bulan |
|--------|----------------|----------------|
| Total Pengguna Terdaftar | 5.000 | 25.000 |
| Total Provider Aktif | 500 | 3.000 |
| Kota yang Dilayani | 2 kota | 5 kota |

### 8.2 Engagement & Transaksi

| Metrik | Target |
|--------|--------|
| Booking berhasil per hari | 100 (bulan ke-3) → 500 (bulan ke-6) |
| Tingkat konfirmasi order oleh provider | > 75% |
| Waktu konfirmasi rata-rata | < 5 menit |
| Rating rata-rata provider | > 4.2 bintang |
| Repeat order (konsumen yang booking ulang) | > 40% dalam 30 hari |

### 8.3 Keuangan

| Metrik | Target |
|--------|--------|
| GMV (Gross Merchandise Value) Bulan ke-6 | Rp 500 juta/bulan |
| Revenue bersih bulan ke-6 | Rp 60 juta/bulan |
| Provider yang upgrade ke paket berbayar | > 15% dari total provider |

---

## 9. Keamanan & Kepercayaan

### 9.1 Verifikasi Provider

- Upload dan verifikasi KTP (manual review oleh tim atau AI OCR)
- Verifikasi nomor HP aktif (OTP SMS)
- Verifikasi rekening bank (micro-deposit verification)
- Latar belakang cek opsional berbayar (kerjasama dengan mitra pihak ketiga)

### 9.2 Keamanan Pengguna

- Fitur "Share Trip" — konsumen bisa bagikan detail penyedia jasa dan lokasi ke kontak darurat
- Tombol darurat (SOS) yang terhubung ke nomor kontak terpercaya
- Sistem pelaporan dalam 1x24 jam post-pekerjaan
- Data lokasi tidak disimpan setelah sesi berakhir (privacy by design)

### 9.3 Keamanan Data

- Enkripsi end-to-end pada chat
- Data pembayaran tidak disimpan di server aplikasi (tokenisasi via payment gateway)
- Kepatuhan PDPA (Perlindungan Data Pribadi) sesuai regulasi Indonesia

---

## 10. Roadmap Pengembangan

### Fase 1 — MVP (Bulan 1–3)

- [ ] Setup project Capacitor.js
- [ ] Autentikasi (Register, Login, OTP)
- [ ] Profil konsumen dan provider
- [ ] Verifikasi provider dasar (KTP upload)
- [ ] Pencarian provider berdasarkan lokasi dan kategori
- [ ] Booking instan dan terjadwal
- [ ] Chat real-time (Socket.IO)
- [ ] Integrasi pembayaran (Midtrans/Xendit)
- [ ] Rating dan ulasan setelah pekerjaan selesai
- [ ] Notifikasi push (FCM)
- [ ] Launch di 1 kota (Medan atau Jakarta)

### Fase 2 — Growth (Bulan 4–6)

- [ ] Live tracking provider saat menuju lokasi
- [ ] Fitur subscription provider (paket Basic, Pro, Bisnis)
- [ ] Laporan keuangan dan analitik untuk provider
- [ ] Sistem referral (konsumen dapat kredit jika ajak teman)
- [ ] Fitur "Jadwal Rutin" (booking berulang mingguan/bulanan)
- [ ] Ekspansi ke 3–5 kota baru

### Fase 3 — Scale (Bulan 7–12)

- [ ] Iklan berbayar untuk provider (slot unggulan)
- [ ] Kemitraan B2B (apartemen, properti, hotel)
- [ ] Fitur tim/bisnis untuk provider kelompok
- [ ] Program loyalitas konsumen (poin reward)
- [ ] Background check premium
- [ ] Ekspansi ke 10+ kota

---

## 11. Risiko & Mitigasi

| Risiko | Level | Mitigasi |
|--------|-------|----------|
| Provider palsu / penipuan | Tinggi | Verifikasi KTP ketat + sistem pelaporan cepat |
| Kualitas pekerjaan tidak sesuai | Tinggi | Sistem escrow + proses dispute yang jelas |
| Provider tidak hadir setelah booking | Medium | Penalti poin dan suspend akun provider |
| Persaingan dengan platform serupa | Medium | Fokus hyperlocal dan verifikasi lebih kuat |
| Ketergantungan pada satu payment gateway | Low | Integrasi multi-gateway sejak awal |
| Masalah privasi data pengguna | Medium | Enkripsi data + kepatuhan regulasi PDPA |

---

## 12. Dependensi & Asumsi

### Dependensi Eksternal

- Google Maps Platform API (berbayar sesuai usage)
- Firebase (FCM untuk push notification — gratis tier tersedia)
- Midtrans atau Xendit (payment gateway lokal Indonesia)
- Mitra background check pihak ketiga (Fase 2)

### Asumsi

- Pengguna memiliki smartphone Android (minimal versi 8) atau iOS (minimal versi 13)
- Koneksi internet tersedia saat menggunakan aplikasi (offline mode tidak dalam scope MVP)
- Provider bersedia melewati proses verifikasi KTP untuk mendaftar
- Regulasi jasa informal Indonesia tidak menghalangi model bisnis ini

---

## 13. Glosarium

| Istilah | Definisi |
|---------|----------|
| Provider | Penyedia jasa yang terdaftar di platform |
| Consumer / User | Pengguna yang memesan jasa |
| Booking | Pemesanan jasa oleh konsumen |
| Escrow | Dana konsumen ditahan platform, baru diteruskan ke provider setelah pekerjaan selesai |
| Hyperlocal | Layanan yang difokuskan pada area geografis sangat terbatas (kecamatan/kelurahan) |
| GMV | Gross Merchandise Value — total nilai transaksi sebelum dipotong biaya |
| KPI | Key Performance Indicator — indikator utama pengukuran keberhasilan |
| OTP | One-Time Password — kode verifikasi sekali pakai via SMS |
| FCM | Firebase Cloud Messaging — layanan notifikasi push dari Google |

---

*Dokumen ini bersifat living document dan akan diperbarui seiring perkembangan produk.*

**Tim:** Product, Engineering, Design, Business Development  
**Review berikutnya:** 30 hari setelah dokumen ini disahkan