// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan


// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca


// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai


import { Book } from "../types/index";
import { books } from "../data/books";

// Fungsi addBook
// Menambahkan buku baru ke dalam koleksi
function addBook(book: Book): void {
    books.push(book);
    console.log(`Buku "${book.title}" berhasil ditambahkan.`);
}

// Fungsi listBooks
// Menampilkan semua buku yang tersimpan
function listBooks(): void {
    if (books.length === 0) {
        console.log("Belum ada buku dalam koleksi.");
        return;
    }
    
    console.log(`\nDaftar Buku (${books.length} buku):`);
    console.log("-----------------------------");
    books.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title}`);
        console.log(`   Penulis : ${book.author}`);
        console.log(`   Tahun   : ${book.publicationYear}`);
    });
    console.log("-----------------------------");
}

// Fungsi searchBook
// Mencari buku berdasarkan judul (parameter opsional)
function searchBook(title?: string): void {
    if (!title) {
        console.log("Judul tidak diberikan. Menampilkan semua buku:");
        listBooks();
        return;
    }

    const results = books.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
    );

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

export { addBook, listBooks, searchBook };