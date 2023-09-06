// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

function solution(str) {
    // tulis jawabanmu disini

        // 1. Membuat variabel kosong dengan nama 'result'untuk menyimpan hasil akhir.
        let result = "";

        // 2. Membuat sebuah perulangan menggunakan 'for' dengan variabel 'i'
        for (let i = 0; i < str.length; i++) {

            // 3. Menggunakan if else condition untuk memeriksa apakah ada tanda titik ('.') pada posisi 'i'
            if (str[i] === ".") {

                // 4. Jika ya, tambahkan dua tanda kurung buka dan tutup "()" ke dalam variabel 'result'.
                result += "()";
                
            // 5. Jika tidak, tambahkan karakter pada posisi 'i' dalam 'str' ke dalam variabel 'result'.
            } else {
                result += str[i];
            }
        }
        //6.  Mengembalikan hasil akhir yang disimpan dalam variabel 'result' 
        return result;
}

console.log(solution("1.1.1.1")) // expected output 1()1()1()1()
console.log(solution("192.168.1.1")) // expected output 192()268()1()1()
