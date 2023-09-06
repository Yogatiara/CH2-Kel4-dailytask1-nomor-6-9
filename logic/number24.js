// buat looping sehingga membuat angka 1 sampai dengan 100
// tapi setiap modulu 3, 5 dan 3 DAN 5 ada spesial nya spt penjelasan dibawah ini =

// Ada sebuah mantra yang mengeluarkan mantra Fizz Buzz dengan rule:

// Mantra “Fizz” akan keluar dengan nilai modulo 3
// Mantra “Buzz” akan keluar dengan nilai modulo 5 
// Mantra akan “Fizz Buzz” akan keluar dengan nilai modulo 3 dan 5

// Bisa diskusi dengan teman kelompokmu ya!

// expected output :
// 1
// 2
// Fizz
// 3
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// dan seterus nya sampai dengan 100

// 1. buat function fizzbuzz
function fizzBuzz(n) {

  // 2. buat array result untuk menampung data 
  const result = [];

  // 3. buat perulangan hingga data yang telah ditentukan (n)
  for (let i = 1; i <= n; i++) {

    // 4. percabangan jika angka habis dibagi 3 dan 5 maka tampilkan pesan FizzBuzz
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz")
    }

    // 5. percabangan jika angka habis dibagi 3 maka tampilkan pesan Fizz
    else if (i % 3 == 0) {
      result.push("Fizz")
    }

    // 6. percabangan jika angka habis dibagi 5 maka tamplkan pesan Buzz
    else if (i % 5 == 0) {
      result.push("Buzz")
    }

    // 7. jika angka tidak termasuk kriteria diatas, maka tampilkan angka nya
    else {
      result.push(i)
    }
  }
  return result;
}

console.log(fizzBuzz(100))