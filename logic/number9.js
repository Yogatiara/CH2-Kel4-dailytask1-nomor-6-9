const usersData = require('../Json/usersData')

const findCompanyName = (letter) => {
  const splitCompanyNameData = []
  const filterCompanyNameData = []
  for (let i = 0; i < usersData.usersData.length; i++) {
    const company = usersData.usersData[i].company
    const splitCompanyName = company.split('');
    splitCompanyNameData.push(splitCompanyName);
  }

  for (let i = 0; i < splitCompanyNameData.length; i++) {
    const getLasIndexOfLetterComapany = splitCompanyNameData[i].length - 1
    if (splitCompanyNameData[i][getLasIndexOfLetterComapany] == letter) {
      filterCompanyNameData.push(usersData.usersData[i].name)
      console.log(usersData.usersData[i])
    }

  }

  console.log(filterCompanyNameData);
  return (`User yang company huruf belakang nya berawal ${letter} sebanyak ${filterCompanyNameData.length} orang`);
}

console.log(findCompanyName("E"));