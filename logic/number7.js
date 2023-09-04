// Untuk memanggil file Json usersData
const usersData = require('../Json/usersData')

// Pada fungsi ini dibuat untuk mencari users yang tidak mempunyai teman bernama Irfi dan Adella dengan parameter name 
const userfriendsFilter = (...name) => {
  // Array kosong yang berfungsi untuk menampung index users yang mempunyai teman bernama Irfi dan Adella
  const arrayIndex = [];
  // Array kosong yang berfungsi untuk menampung users yang tidak mempunyai teman bernama Irfi dan Adella
  const userFriendsFilter = [];
  // Perulangan for yang akan melooping sampai 9 kali dengan tujuan untuk mendapatkan index per index dari objek usersData
  for (let x = 0; x < usersData.usersData.length; x++) {
    // Perulangan for yang berfungsi untuk mendapatkan data teman
    for (let y = 0; y < usersData.usersData[x].friends.length; y++) {
      // Terdapat scope if yang akan mengkondisikan users yang mempunyai teman bernama Irfi dan Adella
      if (usersData.usersData[x].friends[y].name == name[0] || usersData.usersData[x].friends[y].name == name[1]) {
        // Syntax untuk mengupdate  arrayIndex pada index ke 0 yang akan menampung sementara user yang memiliki teman bernama Irifi dan Adella
        arrayIndex[0] = x;
      };
    };
    // If kondisi yang akan berkerja untuk memeriksa apakah user terdapat pada array index?
    if (x != arrayIndex) {
      // Jika sesuai dengan pengkondisian maka data user akan dimasukkan pada userFriendsFilter
      userFriendsFilter.push(usersData.usersData[x].name);
      // fungsi console.log yang akan mencetak user berdasarkan kondisi
      console.log(usersData.usersData[x]);
    };
  };

  // Mencetak array userFriendsFilter yang berisi users yang tidak memiliki teman bernama Irfi dan Adella
  console.log(userFriendsFilter);
  // Akan mereturn pernyataan berapa user yang memiliki kondisi yang ditentukan
  return (`User yang tidak mempunyai teman bernama Irfi dan Adella berjumlah ${userFriendsFilter.length}`);
}

// Fungsi console.log akan menjalankan fungsi userfriendsFilter dengan memberikan argumen "Irfi" dan "Adella"
console.log(userfriendsFilter("Irfi", "Adella"));
