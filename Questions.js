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

let user = { id: 1, name: "Ravi", orders: [{ item: "Pizza", price: 250 }, { item: "Burger", price: 150 }] };
let total = 0
let price  = user.orders
for (var i in price) {
  total += price[i].price
}
console.log(total)

// using for of
/*
let user = { id: 1, name: "Ravi", orders: [{ item: "Pizza", price: 250 }, { item: "Burger", price: 150 }] };
let total = 0;
for (let obj of user.orders){
  total += obj.price
}
console.log(total)
*/
