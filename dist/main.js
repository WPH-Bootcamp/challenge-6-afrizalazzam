"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Book Management Application - Week 6");
console.log("=====================================");
// Mulai pengujian di bawah ini
const bookManager_1 = require("./functions/bookManager");
console.log("Book Management Application - Week 6");
console.log("=====================================");
// 1. Tambahkan beberapa data buku untuk testing
(0, bookManager_1.addBook)({ title: "Laskar Pelangi", author: "Andrea Hirata", publicationYear: 2005 });
(0, bookManager_1.addBook)({ title: "Bumi Manusia", author: "Pramoedya Ananta Toer", publicationYear: 1980 });
(0, bookManager_1.addBook)({ title: "Sang Pemimpi", author: "Andrea Hirata", publicationYear: 2006 });
(0, bookManager_1.addBook)({ title: "Negeri 5 Menara", author: "Ahmad Fuadi", publicationYear: 2009 });
// 2. Tampilkan semua buku
console.log("\n[TEST] listBooks():");
(0, bookManager_1.listBooks)();
// 3. Cari buku dengan judul tertentu
console.log("\n[TEST] searchBook('Laskar'):");
(0, bookManager_1.searchBook)("Laskar");
// 4. Cari buku berdasarkan penulis yang sama
console.log("\n[TEST] searchBook('Sang'):");
(0, bookManager_1.searchBook)("Sang");
// 5. Cari buku yang tidak ada
console.log("\n[TEST] searchBook('Harry Potter'):");
(0, bookManager_1.searchBook)("Harry Potter");
// 6. searchBook tanpa parameter
console.log("\n[TEST] searchBook() tanpa parameter:");
(0, bookManager_1.searchBook)();
