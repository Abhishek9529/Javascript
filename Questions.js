// sum of the digit in number 
/*
let num = 12345
let digit =0
let sum =0

while (Math.floor(num) > 0) {
 digit = Math.floor(num % 10) 
 sum += digit
  num = num / 10
}
console.log(sum)
*/

// objects questions...
/*
const obj = {
  name : 'roy',
  age : 14,
  class : '8th'
}
console.log(obj['name'])
*/

/*
const car = { brand :'Toyota',model : 'Corolla', year :2024}
car.color = 'Red';
console.log(car)
*/

/*
let book = { title: "JS Guide", author: "John", pages: 200 };
book.pages += 50
console.log(book)
*/

/*
let person = { name: "Amit", age: 25 };
console.log(person.address);
*/

/*
let user = { name: "Rahul", email: "rahul@gmail.com" };
*/

/*
let employee = { name: "Aarav", salary: 50000, department: "IT" };
for (var key in employee) {
  // Tab to edit
  console.log(key)
}
*/

// use of Object class
/* const Student = {
  name : "Rahul",
  age : 24,
  city : 'Pune'
}
console.log(Object.keys(Student))
console.log(Object.values(Student))
console.log(Object.entries(Student)) */

// use of delete 
/* const Student = {
  name : "Rahul",
  age : 24,
  city : 'Pune'
}
console.log(Student)
delete(Student.city)
console.log(Student) */

/*
let restorent = {
  name : 'five-star',
  manager : 'vijay-sharma',
  menu : {
    paratha : 50,
    rice : 80,
    panir : 100,
    tandori : 20
  }
}
console.log(`dishes prices : ${Object.values(restorent.menu)}`)
*/

// calculate the total price of orders
/*
let user = { id: 1, name: "Ravi", orders: [{ item: "Pizza", price: 250 }, { item: "Burger", price: 150 }] };
let total = 0
let price  = user.orders
for (var i in price) {
  total += price[i].price
}
console.log(total)
*/
// using for of
/*
let user = { id: 1, name: "Ravi", orders: [{ item: "Pizza", price: 250 }, { item: "Burger", price: 150 }] };
let total = 0;
for (let obj of user.orders){
  total += obj.price
}
console.log(total)
*/

// using foreach
/*
let user = { id: 1, name: "Ravi", orders: [{ item: "Pizza", price: 250 }, { item: "Burger", price: 150 }] };
let total = 0;
user.orders.forEach(order => {
  total += order.price
})
console.log(total)
*/


// use of spread operator (...) and Object.assign()

// spread operator (...)
/** const obj1 = {a:1, b:2};
const obj2 ={...obj1};// spread operator copy the specified object 
console.log(obj2); **/


/** const obj1 = {a:1, b:{x: 10}};
const obj2 ={...obj1};
obj2.b.x = 20 // its also changed original object 
console.log(obj2); **/


// use of Object.assign()
/**  const obj1 = {a:1, b:2};
const obj2 =Object.assign({}, obj1);// its copy one or more objects 
console.log(obj2);  **/


// use of Object.freeze(), Object.seal()
/** const obj1 ={
  name : 'rahul',
  age : 24,
  class : 2
} 
//Object.freeze(obj1)
//Object.seal(obj1)
obj1.city= 'pune'
console.log(obj1) **/

/**
function findAvrage(marks) {
  let sum = 0
  marks.forEach((mark)=>{
    sum += mark
  })
  return sum / marks.length
}
const student = {
 name: 'aryan',
 marks : [27,38,35,58,69,36]
}
console.log(findAvrage(student.marks))
**/
// shoping cart counting items
shopCart= [
  {
    name: 'almond',
    price: 200,
    quantity: 2
  },
  {
    name: 'kaju',
    price: 150,
    quantity: 4
  },
  {
  name: 'suger',
  price: 50,
  quantity: 1
},
{
  name: 'biskit',
  price: 20,
  quantity: 2
}
]

totalValue(shopCart)

function totalValue(cartItem) {
  let totalPrice = 0
  cartItem.forEach((item) => {
    let price = item.price
    let quant = item.quantity
    totalPrice += price * quant
  })
  console.log(totalPrice)
}


     
