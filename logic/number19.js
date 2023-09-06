// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
    // tulis jawabanmu disini
        // 1. Membuat variabel 'result' dan menginisiasi dengan nilai = 0
        let result = 0;

        // 2. Membuat perulangan menggunakan 'while' yang akan terus berjalan selama n lebih besar dari 0. 
        while (n > 0) {

            // 3. Mengambil digit terakhir dari bilangan 'n' kemudian dihitung menggunakan operasi modulo (%) dengan angka 10. 
            const digit = n % 10;

            // 4. Menambahkan nilai digit (digit terakhir) ke dalam variabel 'result'.
            result += digit;
            
            // 5. mengurangkan bilangan n dengan menghapus digit terakhirnya, 
            // dengan membaginya dengan 10 dan membulatkannya ke bawah  
            n = Math.floor(n/10);
        }
        // 6. Mengembalikan nilai result sebagai hasil akhir yang berisi jumlah semua digit dalam bilangan 'n'.
        return result;
}

console.log(solution(2022)) // expected output 6
console.log(solution(1001)) // expected output 2
