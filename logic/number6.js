const usersData = require('../Json/usersData')

// Pada fungsi ini dibuat untuk mencari users yang gender female atau users dengan mata coklat 
const findGenderEyeColorUsers = (genders, eyeColor) => {
  // Array kosong akan menyimpan hasil filter dengan user gender female atau berwarna coklat
  const usersGenderEyeColorFilter = [];
  for (let i = 0; i < usersData.usersData.length; i++) {
    if (usersData.usersData[i].gender == genders || usersData.usersData[i].eyeColor == eyeColor) {
      usersGenderEyeColorFilter.push(usersData.usersData[i].name);
    };
  };
  console.log(usersGenderEyeColoFilter);
  return (`User yang gendernya female atau user yang eyeColor nya brown berjumlah ${usersGenderEyeColoFilter.length} orang`);
};

console.log(findGenderEyeColorUsers("female", "brown"))