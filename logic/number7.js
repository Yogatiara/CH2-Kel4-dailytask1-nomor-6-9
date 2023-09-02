const usersData = require('../Json/usersData')
// console.log(usersData.usersData.length);
// console.log(usersData.usersData[0].friends.length)
const userfriendsFilter = (...name) => {
  const arrayIndex = [];
  const friendsFilter = [];
  for (let x = 0; x < usersData.usersData.length; x++) {
    for (let y = 0; y < usersData.usersData[x].friends.length; y++) {
      if (usersData.usersData[x].friends[y].name == name[0] || usersData.usersData[x].friends[y].name == name[1]) {
        arrayIndex[0] = x
      }
    }
    if (x != arrayIndex) {
      friendsFilter.push(usersData.usersData[x].name);
      console.log(usersData.usersData[x]);
    }
  }
  console.log(friendsFilter)
  return (`User yang tidak mempunyai teman bernama Irfi dan Adella berjumlah ${friendsFilter.length}`);
}

console.log(userfriendsFilter("Irfi", "Adella"));
