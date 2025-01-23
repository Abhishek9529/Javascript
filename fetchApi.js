// calling api using .then
/**fetch('https://dummyjson.com/users')
.then(function(res){
  return res.json()
})
.then(function(data){
  console.log(data)
  return data.users
})
.then(function (users){
  console.log(users)
  return users[0]
})
.then(function (user) {
  console.log(user)
  return user.firstName
})
.then(function (userName) {
  console.log(userName)
})
.catch((error)=> console.log(error)) **/


// fetch api using async await
async function getUserData() {
  // Tab to edit
  try {

    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json()
    console.log(data)

    const users = data.users
    console.log(users)

    for (let i = 0; i < users.length; i++) {
      const user = users[i]
      const fName = user.firstName
      console.log(i, fName)
    }

  } catch (e) {
    console.log('E: ', e)
  }
}
getUserData()