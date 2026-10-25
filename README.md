# Tugas Praktik 2 Vue.js

## Identitas Mahasiswa

Nama Mahasiswa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Raka Wiliana  
Program Studi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Sistem Informasi  
NIM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 053082686  
UPBJJ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Jakarta

## Informasi Tugas

**TUGAS PRAKTIK 2**  
**Pemrograman Berbasis Web - STSI4209.198**

## Deskripsi Aplikasi

Aplikasi ini merupakan website sederhana untuk mengelola stok bahan ajar dan melakukan tracking Delivery Order bahan ajar Universitas Terbuka.

Aplikasi dibuat menggunakan Vue.js. Data yang digunakan masih berupa data dummy dari file JavaScript dan belum menggunakan database.

## A. Penjelasan Program

Program ini merupakan aplikasi website sederhana untuk membantu mengelola data bahan ajar Universitas Terbuka. Aplikasi dibuat menggunakan Vue.js dengan data dummy yang disimpan pada file `js/dataBahanAjar.js`.

Saat aplikasi dibuka, pengguna akan melihat halaman awal pada `index.html`. Halaman tersebut menyediakan navigasi menuju halaman Stok Bahan Ajar dan halaman Tracking Delivery Order.

Pada halaman Stok Bahan Ajar, data dari array `stok` ditampilkan dalam bentuk tabel. Pengguna dapat memilih UT-Daerah, memilih kategori, mengurutkan data, dan menampilkan stok yang perlu di-reorder. Status stok ditentukan dari perbandingan jumlah stok dengan safety stock. Pengguna juga dapat menambah data bahan ajar baru atau mengedit data yang sudah ada melalui formulir.

Pada halaman Tracking Delivery Order, data tracking ditampilkan berdasarkan nomor DO. Pengguna dapat mencari data berdasarkan nomor DO atau nama penerima, lalu melihat informasi pengiriman dan riwayat perjalanan paket. Pengguna juga dapat menambahkan Delivery Order baru. Nomor DO dibuat otomatis berdasarkan tahun berjalan dan nomor urut.

Vue.js digunakan untuk menghubungkan data dengan tampilan halaman. Directive seperti `v-for`, `v-if`, `v-else-if`, `v-else`, `v-show`, `v-model`, dan `v-html` digunakan sesuai kebutuhan. Computed property digunakan untuk filter, sorting, pencarian, detail paket, dan pembuatan nomor DO. Methods digunakan untuk menjalankan aksi seperti menambah, mengedit, dan memformat data. Watcher digunakan untuk memantau perubahan filter, pencarian, dan pilihan paket.

Data pada aplikasi ini hanya tersimpan sementara di memori browser. Jika halaman di-refresh, data akan kembali ke data awal karena aplikasi belum menggunakan database atau `localStorage`.

## Fitur Aplikasi

### Halaman Beranda

- Menampilkan navigasi menuju halaman Stok Bahan Ajar dan Tracking DO.

### Halaman Stok Bahan Ajar

- Menampilkan daftar stok dalam bentuk tabel.
- Menampilkan kode dan nama mata kuliah.
- Menampilkan kategori, UT-Daerah, lokasi rak, stok, safety stock, dan catatan.
- Menampilkan status stok:
  - Aman jika stok lebih besar atau sama dengan safety stock.
  - Menipis jika stok lebih kecil dari safety stock.
  - Kosong jika stok sama dengan nol.
- Filter berdasarkan UT-Daerah.
- Filter kategori yang menyesuaikan UT-Daerah.
- Filter stok yang perlu melakukan reorder.
- Sorting berdasarkan judul, jumlah stok, dan harga.
- Reset filter.
- Menambahkan data bahan ajar baru.
- Mengedit data stok bahan ajar.
- Validasi sederhana pada form.
- Alert setelah data berhasil ditambah atau diedit.

### Halaman Tracking Delivery Order

- Menampilkan daftar Delivery Order.
- Mencari Delivery Order berdasarkan nomor DO atau nama penerima.
- Menampilkan detail status pengiriman.
- Menampilkan NIM, nama, ekspedisi, tanggal kirim, paket, dan total harga.
- Menampilkan riwayat perjalanan paket.
- Menambahkan Delivery Order baru.
- Membuat nomor DO secara otomatis berdasarkan tahun dan nomor urut.
- Memilih ekspedisi melalui elemen `select`.
- Memilih paket bahan ajar melalui elemen `select`.
- Menampilkan detail isi paket setelah paket dipilih.
- Mengambil total harga dari data paket.
- Menampilkan alert setelah Delivery Order berhasil ditambahkan.

## Struktur Folder

```text
├── index.html
├── stok.html
├── tracking.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── dataBahanAjar.js
    ├── stok-app.js
    └── tracking-app.js
```

## Penjelasan File

| File | Keterangan |
|---|---|
| `index.html` | Halaman awal dan navigasi aplikasi |
| `stok.html` | Tampilan halaman stok bahan ajar |
| `tracking.html` | Tampilan halaman tracking Delivery Order |
| `css/style.css` | Mengatur tampilan dan layout halaman |
| `js/dataBahanAjar.js` | Menyimpan data dummy stok, paket, ekspedisi, dan tracking |
| `js/stok-app.js` | Logika Vue untuk halaman stok |
| `js/tracking-app.js` | Logika Vue untuk halaman tracking |

## Directive dan Fitur Vue.js yang Digunakan

### Menampilkan Data

- Mustache, contohnya `{{ item.judul }}`.
- `v-for` untuk menampilkan daftar stok, paket, dan Delivery Order.
- `v-html` untuk menampilkan catatan bahan ajar yang memiliki format HTML.

### Conditional

- `v-if` untuk menampilkan modal, pesan error, data kosong, dan detail paket.
- `v-else-if` untuk menampilkan status stok Menipis.
- `v-else` untuk menampilkan status stok Aman dan pesan ketika paket belum dipilih.
- `v-show` untuk menampilkan filter kategori dan formulir tambah Delivery Order.

### Data Binding

- `v-model` untuk input, select, dan checkbox.
- `:class` untuk memberikan class status berdasarkan kondisi stok.
- `:value` untuk menampilkan nilai otomatis seperti nomor DO dan total harga.

### Computed Property

Computed property digunakan untuk:

- Mengolah filter dan sorting data stok.
- Menampilkan pilihan kategori yang sesuai dengan UT-Daerah.
- Mengambil daftar nomor DO.
- Mencari Delivery Order.
- Mengambil paket yang sedang dipilih.
- Membuat nomor DO otomatis.

### Methods

Methods digunakan untuk:

- Menentukan status stok.
- Menghitung jumlah status stok.
- Membuka dan menutup form.
- Menambah dan mengedit data stok.
- Memformat harga.
- Menampilkan nama ekspedisi dan paket.
- Menambahkan Delivery Order baru.

### Watcher

Watcher digunakan untuk:

- Memantau perubahan pilihan UT-Daerah.
- Menyesuaikan pilihan kategori.
- Mengubah sorting ketika filter reorder digunakan.
- Memantau hasil pencarian Delivery Order.
- Menghapus pesan error ketika paket baru dipilih.

## Cara Menjalankan

1. Buka folder proyek `tugas2-vue-ut`.
2. Buka file `index.html` menggunakan browser.
3. Pilih halaman Stok Bahan Ajar atau Tracking DO.
4. Untuk hasil yang lebih baik, proyek dapat dijalankan menggunakan ekstensi Live Server di Visual Studio Code.

Vue.js dimuat melalui CDN, sehingga komputer memerlukan koneksi internet ketika halaman pertama kali dibuka.

## Contoh Pengujian

### Pengujian Halaman Stok

1. Buka halaman Stok Bahan Ajar.
2. Pilih salah satu UT-Daerah.
3. Periksa pilihan kategori yang muncul.
4. Centang filter reorder.
5. Ubah pilihan sorting.
6. Tambahkan data stok baru.
7. Edit salah satu data stok.
8. Periksa alert yang muncul.

### Pengujian Halaman Tracking

1. Buka halaman Tracking DO.
2. Gunakan kolom pencarian berdasarkan nomor DO atau nama.
3. Klik tombol Tambah Delivery Order.
4. Isi NIM dan nama penerima.
5. Pilih ekspedisi dan paket bahan ajar.
6. Periksa isi paket dan total harga.
7. Simpan Delivery Order baru.
8. Periksa nomor DO dan alert yang muncul.

## Catatan

Data stok dan tracking masih berupa data dummy yang disimpan pada file `js/dataBahanAjar.js`.

Data yang ditambahkan atau diedit hanya tersimpan sementara selama halaman masih terbuka. Jika halaman di-refresh, data akan kembali ke data awal karena aplikasi belum menggunakan database maupun `localStorage`.

Vue.js yang digunakan pada proyek ini adalah Vue 2 melalui CDN. Aplikasi tidak menggunakan komponen template karena mengikuti struktur pengerjaan yang disarankan pada Tugas Praktik 2.

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Vue.js 2
- Live Server atau browser
