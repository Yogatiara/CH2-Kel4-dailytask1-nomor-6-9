// Ada sebuah potongan array seperti di bawah.

// Buatlah perhitungan untuk menentukan dari nilai kelulusan dari siswa dengan aturan:
// Nilai di bawah 50 maka tidak lulus
// Nilai di atas 50 dan di bawah 70 maka remedial
// Nilai di atas 70 maka lulus

// Bisa diskusi dengan kelompokmu ya!

const students = [
  { name: "Peter", score: 30 },
  { name: "Parker", score: 50 },
  { name: "Harry", score: 70 },
  { name: "Eva", score: 79 },
  { name: "Justin", score: 60 },
  { name: "Bieber", score: 90 },
  { name: "Evan", score: 55 },
  { name: "Rowling", score: 90 }
]

// 1. buat perulangan untuk membaca seluruh data yang ada di dalam array.
for (let i = 0; i < students.length; i++) {

  // 2. buat percabangan jika score diatas 70 dan tidak lewat dari 100 maka tampilkan pesan LULUS
  if (students[i].score > 70 && students[i].score <= 100) {
    console.log(`${students[i].name} selamat Ente LULUS. Nilai ente ${students[i].score}`)
  }
  // 3. percabangan jika score diatas 50 dan dibawah 70 maka tampilkan pesan remedial
  else if (students[i].score > 50 && students[i].score < 70) {
    console.log(`${students[i].name} Waduh Ente REMEDIAL. Nilai ente ${students[i].score}`)
  }
  // 4. percabangan jika score dibawah 50 maka tampilkan pesan tidak lulus
  else if (students[i].score < 50) {
    console.log(`${students[i].name} Ente TIDAK LULUS, ngulang lagi yaah. Nilai ente ${students[i].score}`)
  }
}