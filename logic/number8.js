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
    if (splitCompanyNameData[i][0] == letter) {
      filterCompanyNameData.push(usersData.usersData[i].name)
    }
  }

  console.log(filterCompanyNameData);

  return (`User yang company huruf depan nya berawal ${letter} yaitu sebanyak ${filterCompanyNameData.length} user`)
}

console.log(findCompanyName("L"));