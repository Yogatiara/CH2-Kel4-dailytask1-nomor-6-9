// Untuk memanggil file Json usersData
const usersData = require('../Json/usersData')

// Pada fungsi ini dibuat untuk mencari users yang gender female atau users dengan mata coklat 
const findGenderEyeColorUsers = (genders, eyeColor) => {
  // Array kosong akan menyimpan hasil filter dengan user gender female atau berwarna coklat
  const usersGenderEyeColorFilter = [];
  // Perulangan for yang akan melooping variabel i yang berfungsi untuk mendapatkan index dari objek usersData
  for (let i = 0; i < usersData.usersData.length; i++) {
    // program if yang akan mengkondisikan users yang mempunyai gender dan warna mata yang spesifik
    if (usersData.usersData[i].gender == genders || usersData.usersData[i].eyeColor == eyeColor) {
      // users yang sesuai dengan penkondisian, maka akan dimasukkan pada array usersGenderEyeColorFilter
      usersGenderEyeColorFilter.push(usersData.usersData[i].name);
    };
  };
  // Untuk mencetak array usersGenderEyeColorFilter yang berisi users dengan genders female dan mata berwarna coklat
  console.log(usersGenderEyeColorFilter);
  // Akan mereturn pernyataan berapa user yang memiliki kondisi yang ditentukan
  return (`User yang gendernya female atau user yang eyeColor nya brown berjumlah ${usersGenderEyeColorFilter.length} orang`);
};

// Fungsi console.log akan menjalankan fungsi findGenderEyeColorUsers dengan memberikan argumen "female" dan "brown"
console.log(findGenderEyeColorUsers("female", "brown"))