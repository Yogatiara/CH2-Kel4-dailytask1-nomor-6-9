// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.

function solution(str) {
    // tulis jawabanmu disini

    // 1. Inisiasi perulangan untuk pengecekkan karakter dalam str
    for (let i = 0; i < str.length; i++) {

        // 2. Mengecek apakah karakter pada indeks 'i' berupa 'a'.
        if (str[i] === 'a') {

            // 3. Jika karakter saat ini adalah 'a', inisiasi nested looping
            // untuk mengecek 4 karakter setelahnya. 
            for (let j = i + 4; j < str.length; j++) {

                // 4. Mengecek apakah karakter pada indeks 'j' berupa 'b'
                if (str[j] === 'b') {

                    // 5. Jika 'b' ditemukan maka kembalikan "YES"
                    return "YES"; // Jarak minimal adalah 3 karakter
                }
            }

            // 6. Mengecek apakah karakter pada indeks 'i' berupa 'b'.
        } else if (str[i] === 'b') {

             // 7. Jika karakter saat ini adalah 'b', inisiasi nested looping
            // dan cek 4 karakter setelahnya. 
            for (let j = i + 4; j < str.length; j++) {

                // 8. Mengecek apakah karakter pada indeks 'j' berupa 'a'
                if (str[j] === 'a') {
                    
                      // 9. Jika 'a' ditemukan maka kembalikan "YES"
                    return "YES"; // Jarak minimal adalah 3 karakter
                }
            }
        }
    }
    // 10. Jika kondisi if dan else if sama-sama tidak menemukan pasangan karakter 'a'-'b'
    // dengan jarak minimal 3 karakter.
    return "NO";
}

console.log(solution("acdebae")) // expected output YES
console.log(solution("cdaecba")) // expected output NO
