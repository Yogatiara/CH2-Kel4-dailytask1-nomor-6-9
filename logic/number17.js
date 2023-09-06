// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.


function solution(n) {
    // tulis jawabanmu disini
    // membuat perkondisian sesuai dengan soal yang sudah diberikan
    if(n >= 91 && n <= 100 ){
        return "A" //jika nilai antara 91 - 100 maka akan mengembalikan nilai A
    } else if(n >= 81 && n <=90){
        return "B" //jika nilai antara 81 - 90 maka akan mengembalikan nilai B
    } else if(n >= 71 && n <= 80){
        return "C" //jika nilai antara 71 - 80 maka akan mengembalikan nilai C
    } else if(n >= 61 && n <= 70){
        return "D" //jika nilai antara 61 - 70 maka akan mengembalikan nilai D
    } else if(n >= 0 && n <=60){
        return "E" //jika nilai antara 0 - 60 maka akan mengembalikan nilai E
    } else{
        return "Tidak ada nilai" //jika nilai tidak seperti yang diinginkan (minus/lebih dari 100) maka akan mengembalikan teks "Tidak ada nilai"
    }
}

console.log(solution(95)) // expected output A
console.log(solution(76)) // expected output C
console.log(solution(101)) // coba jika nilai tidak sesuai

