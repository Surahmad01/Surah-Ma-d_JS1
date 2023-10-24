// Objek untuk menyimpan informasi produk
var produk1 = { nama: "Sepatu", harga: 50 };
var produk2 = { nama: "Baju", harga: 30 };
var produk3 = { nama: "Topi", harga: 15 };

// Variabel untuk menyimpan keranjang belanja
var keranjangBelanja = [];

// Fungsi untuk menambahkan produk ke dalam keranjang belanja
function tambahProduk(produk, jumlah) {
  keranjangBelanja.push({ produk: produk, jumlah: jumlah });
  console.log(jumlah + " " + produk.nama + "(s) telah ditambahkan ke keranjang belanja.");
}

// Fungsi untuk menghitung total belanja
function hitungTotalBelanja() {
  var total = 0;
  for (var i = 0; i < keranjangBelanja.length; i++) {
    var item = keranjangBelanja[i];
    total += item.produk.harga * item.jumlah;
  }
  return total;
}

// Fungsi untuk menerapkan diskon pada total belanja
function aplikasiDiskon(total, diskon) {
  return total - total * (diskon / 100);
}

// Contoh penggunaan program
tambahProduk(produk1, 2);
tambahProduk(produk2, 3);
tambahProduk(produk3, 1);

var totalBelanja = hitungTotalBelanja();
console.log("Total belanja sebelum diskon: $" + totalBelanja.toFixed(2));

var diskon = 10;
var totalSetelahDiskon = aplikasiDiskon(totalBelanja, diskon);
console.log("Total belanja setelah diskon " + diskon + "%: $" + totalSetelahDiskon.toFixed(2));
