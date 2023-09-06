// Buatlah sebuah function untuk melakukan format sorting array di dalam kode Javascript. 
// Bisa diskusi dengan teman kelompokmu ya!

//1. Memiliki dua parameter, arr (array yang akan diurutkan), 
// dan ascending yang di-set default-nya = true.
function customSortArray(arr, ascending = true) { 

    // 2. Menggunakan if else condition, jika ascending di-set menjadi true, 
    // array akan diurutkan secara ascending
    if (ascending) {

        // 3. Menerapkan method sort dan menerapkan fungsi komparator untuk pengurutan ascending
        arr.sort((a, b) => a - b);

    // 4. Jika ascending di-set menjadi false, maka kondisi else akan dijalankan
    } else {

        // 5. Menerapkan method sort dan menerapkan fungsi komparator untuk 
        // pengurutan descending (berkebalikan dengan langkah 3)
        arr.sort((a, b) => b - a);
    }
    // 6. Mengembalikan nilai array yang telah diurutkan
    return arr;
}

// Memanggil fungsi secara ascending (default):

// Membuat array berisi angka yang akan diurutkan
const numbers = [3, 1, 4, 7, 5, 9, 2, 6, 8, 0, 10];

// Memanggil fungsi dengan array numbers sebagai argumen, secara default pengurutan ascending akan dijalankan
const sortedNumbersAsc = customSortArray(numbers);

// Menampilkan hasil pengurutan ascending yang disimpan pada variabel sortedNumberAsc
console.log("Ascending:", sortedNumbersAsc);

// Memanggil fungsi secara descending:

// Memanggil fungsi dan mengubah nilai ascending menjadi false agar array diurutkan secara descending
const sortedNumbersDesc = customSortArray(numbers, false);

// Menampilkan hasil pengurutan descending yang disimpan pada variabel sortedNumberAsc
console.log("Descending:", sortedNumbersDesc);
