"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
// Fungsi addBook
// Menambahkan buku baru ke dalam koleksi
function addBook(book) {
    books_1.books.push(book);
    console.log(`Buku "${book.title}" berhasil ditambahkan.`);
}
// Fungsi listBooks
// Menampilkan semua buku yang tersimpan
function listBooks() {
    if (books_1.books.length === 0) {
        console.log("Belum ada buku dalam koleksi.");
        return;
    }
    console.log(`\nDaftar Buku (${books_1.books.length} buku):`);
    console.log("-----------------------------");
    books_1.books.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title}`);
        console.log(`   Penulis : ${book.author}`);
        console.log(`   Tahun   : ${book.publicationYear}`);
    });
    console.log("-----------------------------");
}
// Fungsi searchBook
// Mencari buku berdasarkan judul (parameter opsional)
function searchBook(title) {
    if (!title) {
        console.log("Judul tidak diberikan. Menampilkan semua buku:");
        listBooks();
        return;
    }
    const results = books_1.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
    if (results.length === 0) {
        console.log(`Buku dengan judul "${title}" tidak ditemukan.`);
        return;
    }
    console.log(`\nHasil pencarian untuk "${title}":`);
    console.log("-----------------------------");
    results.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title}`);
        console.log(`   Penulis : ${book.author}`);
        console.log(`   Tahun   : ${book.publicationYear}`);
    });
    console.log("-----------------------------");
}
