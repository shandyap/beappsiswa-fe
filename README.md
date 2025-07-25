BeAppsiswa - Frontend
 Repositori ini berisi kode sumber untuk sisi frontend dari BeAppsiswa, sebuah platform terpusat yang dirancang untuk memudahkan pelajar dan mahasiswa di Indonesia dalam menemukan informasi beasiswa dan perlombaan.

Deskripsi Proyek
Di Indonesia, informasi mengenai beasiswa dan kompetisi seringkali tersebar di berbagai platform, membuatnya sulit diakses. Akibatnya, banyak talenta muda kehilangan kesempatan berharga. BeAppsiswa dibangun untuk menyelesaikan masalah ini dengan menyediakan sebuah portal terintegrasi (one-stop solution) di mana pengguna dapat dengan mudah mencari, memfilter, dan menemukan peluang yang relevan untuk pengembangan diri mereka.

## ✨ Fitur Utama

Untuk Pengguna Publik:
Halaman Beranda Dinamis: Menampilkan 3 beasiswa dan 3 perlombaan terbaru.

Daftar Beasiswa & Perlombaan: Halaman terpisah untuk melihat semua data dengan pagination.

Halaman Detail: Tampilan informasi lengkap untuk setiap beasiswa atau perlombaan.

Fitur Pencarian: Memungkinkan pengguna mencari berdasarkan judul.

Desain Responsif: Tampilan yang dioptimalkan untuk perangkat desktop maupun mobile.

Animasi Modern: Efek animasi saat scroll dan loading untuk pengalaman pengguna yang lebih baik.

Untuk Admin:
Login Admin: Halaman login terpisah untuk masuk ke panel admin.

Dashboard Admin: Ringkasan dan tabel manajemen untuk semua data.

CRUD Penuh: Fungsionalitas untuk Menambah (Create), Membaca, Mengedit (Update), dan Menghapus (Delete) data beasiswa dan perlombaan melalui modal form interaktif.

Navigasi Tab: Antarmuka tab untuk beralih antara manajemen beasiswa dan perlombaan.

🛠️ Teknologi yang Digunakan
Framework: React.js (with Vite)

UI Library: React Bootstrap & CSS3 Kustom

Routing: React Router DOM

Icons: React Icons

State Management: React Hooks (useState, useEffect) & Context API

Animasi: Intersection Observer API & CSS Animations

Deployment: Vercel

🚀 Panduan Instalasi & Menjalankan Lokal
Untuk menjalankan proyek ini di lingkungan lokal, ikuti langkah-langkah berikut:

Clone repositori ini:

Bash

git clone https://github.com/username/beappsiswa-fe.git
cd beappsiswa-fe
Instal semua dependensi:

Bash

npm install
Buat file environment variable:
Buat file bernama .env di folder root proyek dan tambahkan URL API backend-mu.

Cuplikan kode

VITE_API_BASE_URL=http://localhost:5000
Jalankan server development:

Bash

npm run dev
Aplikasi akan berjalan di http://localhost:5173 (atau port lain yang tersedia).

📜 Skrip yang Tersedia
npm run dev: Menjalankan aplikasi dalam mode development.

npm run build: Mem-build aplikasi untuk produksi ke dalam folder dist.

npm run lint: Menjalankan linter ESLint untuk memeriksa kualitas kode.

npm run preview: Menjalankan server lokal untuk melihat hasil build produksi.

📁 Struktur Folder
/src
|-- /assets         # Aset statis seperti gambar dan ikon
|-- /components     # Komponen-komponen reusable
|   |-- /admin
|   |-- /beranda
|   |-- /beasiswa
|   |-- /common
|-- /context        # React Context untuk state management
|-- /hooks          # Custom Hooks (e.g., useIntersectionObserver)
|-- /pages          # Komponen utama untuk setiap halaman
|-- /services       # Fungsi-fungsi untuk API call
|-- App.jsx         # Komponen utama & routing
|-- main.jsx        # Titik masuk aplikasi
👥 Tim Pengembang
 Stefanus Muliyana Sebayang - Backend Developer

 Shandy Ariady Permana  - Frontend Developer / Team Lead

Muhammad Rezky Aulia Saputra - Backend Developer

Rizky Eventa Bahtiar  - UI/UX Designer / Frontend Developer
