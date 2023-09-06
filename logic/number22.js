// Buat sebuah function yang bisa melakukan fungsi dari fibonacci number di dalam kode Javascript. 
// Bisa diskusi dengan teman kelompokmu ya!

// 1. buat function 
function fibonacci(n) {

  // 2. buat array untuk menampung
  const result = [];

  // 3. insialisasi variabel untuk nilai pada index
  let fn1 = 0;
  let fn2 = 1;

  // 4. buat perulangan sebanyak nilai yang ditentukan
  for (let i = 0; i < n; i++) {

    // 5. push nilai fn1 untuk nilai fibonacci nya
    result.push(fn1);

    // 6. membuat variabel fn untuk menjumlahkan 2 index sebelumnya
    let fn = fn1 + fn2;

    // 7. tukar tempat. nilai fn2 masukkan pada fn1
    fn1 = fn2;

    // 8. tukar tempat. nilai fn masukkan pada fn2 
    fn2 = fn;
  }

  return result;
}

console.log(fibonacci(10))