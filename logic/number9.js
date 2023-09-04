// Untuk memanggil file Json usersData

const usersData = require('../Json/usersData');

// Pada fungsi ini dibuat untuk mencari users yang bekerja pada company berdasarkan huruf depan yang ditentukan dengan parameter letter
const findCompanyName = (letter) => {
  // Array kosong yang menampung huruf yang telah displit
  const splitCompanyNameData = [];
  // Array kosong yang menampung users dengan kondisi company dengan huruf belakang yang sudah ditentukan
  const userCompanyNameDataFilter = [];
  // Perulangan for yang akan melooping sampai 9 kali dengan tujuan untuk mendapatkan index per index dari objek usersData
  for (let i = 0; i < usersData.usersData.length; i++) {
    // variabel company yang berisi nama company
    const company = usersData.usersData[i].company;
    // variabel splitCompanyName yang berisi fungsi untuk memisahkan huruf nama dari company dan akan menghasilkan array
    const splitCompanyName = company.split('');
    // Setelah displit akan dimasukkan ke array splitCompanyNameData
    splitCompanyNameData.push(splitCompanyName);
  };
  // Perulangan for yang akan melooping sampai (ukuran array splitCompanyNameData) dengan tujuan untuk mendapatkan index per index dari array splitCompanyNameData
  for (let i = 0; i < splitCompanyNameData.length; i++) {
    // Variabel getLastIndexOfLetterCompany yang berisi panjang array splitCompanyNameData dikurang 1 yang bertujuan untuk mendapatkan index terakhir tiap nama company
    const getLastIndexOfLetterCompany = splitCompanyNameData[i].length - 1;
    // scope if yang mengkondisikan huruf belakang yang berawalan dengan huruf E
    if (splitCompanyNameData[i][getLastIndexOfLetterCompany] == letter) {
      // Jika sesuai kondisi maka user dengan company huruf huruf belakang E akan di masukkan ke array userCompanyNameDatafilter
      userCompanyNameDataFilter.push(usersData.usersData[i].name);
      // fungsi console.log akan mencetak objek usersData dengan kondisi yang telah ditentukan
      console.log(usersData.usersData[i]);
    };
  };

  // untuk mencetak array userCompanyNameDataFilter
  console.log(userCompanyNameDataFilter);
  // Akan mereturn pernyataan berapa user yang memiliki kondisi yang ditentukan
  return (`User yang company huruf belakang nya berawal ${letter} sebanyak ${userCompanyNameDataFilter.length} orang`);
}

// Fungsi console.log akan menjalankan fungsi findCompanyName dengan memberikan argumen huruf "E" 
console.log(findCompanyName("E"));