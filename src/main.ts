// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log("Book Management Application - Week 6");
console.log("=====================================");

// Mulai pengujian di bawah ini

import { addBook, listBooks, searchBook } from "./functions/bookManager";

console.log("Book Management Application - Week 6");
console.log("=====================================");

// 1. Tambahkan beberapa data buku untuk testing
addBook({ title: "Laskar Pelangi", author: "Andrea Hirata", publicationYear: 2005 });
addBook({ title: "Bumi Manusia", author: "Pramoedya Ananta Toer", publicationYear: 1980 });
addBook({ title: "Sang Pemimpi", author: "Andrea Hirata", publicationYear: 2006 });
addBook({ title: "Negeri 5 Menara", author: "Ahmad Fuadi", publicationYear: 2009 });

// 2. Tampilkan semua buku
console.log("\n[TEST] listBooks():");
listBooks();

// 3. Cari buku dengan judul tertentu
console.log("\n[TEST] searchBook('Laskar'):");
searchBook("Laskar");

// 4. Cari buku berdasarkan penulis yang sama
console.log("\n[TEST] searchBook('Sang'):");
searchBook("Sang");

// 5. Cari buku yang tidak ada
console.log("\n[TEST] searchBook('Harry Potter'):");
searchBook("Harry Potter");

// 6. searchBook tanpa parameter
console.log("\n[TEST] searchBook() tanpa parameter:");
searchBook();
