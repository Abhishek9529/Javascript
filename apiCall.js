

async function getData() {
    const url = 'https://api.freeapi.app/api/v1/public/randomusers/user/random';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);

  const user = data.data;
  console.log(user);

  const email = user.email;
  console.log(email);
  
  
} catch (error) {
  console.error(error);
}
}
getData()

