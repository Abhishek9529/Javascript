// Function in Js

// Function without parameter
// function demo(){
//     console.log("Function with no argument");
// }
// demo()


// function with parameter
// function greet(name){
//     console.log(`Good Morning ${name}`);
// }
// greet("Coder")


// arrow function()
// const sum = (a,b) =>{
//     return a + b
// }

// console.log(sum(10,20));



//  Qs. Create a function using the “function” keyword that takes a String as an argument &
//  returns the number of vowels in the string.
// function countVowels(str){
//     count = 0;
//     for (i of str){
//         if ((i == "a") || (i == "e") || (i == "i") || (i == "o" ) || (i == "u")){
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("abhishek"));


// . Create an arrow function to perform the same task
// const countVowels = (str) => {
//     count = 0;
//     for (i of str){
//         if ((i == "a") || (i == "e") || (i == "i") || (i == "o" ) || (i == "u")){
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("abhishek"));


// const arr = [1,2,3,4,5];
// arr.forEach((val) =>{
//     console.log(val);
// });


// let str = ["abhi", "jay", "pradip", "kiran"];
// str.forEach((i) => {
//     console.log(i);
// });



// Qs. For a given array of numbers, print the square of each value using the forEach loop.
// arr = [1,2,3,4,5]
// arr.forEach((i) => {
//     console.log(i*i);
// });



// Array Methods
// Map



// const arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((i) => {
//     console.log(i);
// })

// console.log("********************");

// let newArray = arr.map((i) => {
//     return i * 2;
// });

// newArray.forEach((i) => {
//     console.log(i);
// });


// filter
//  Creates a new array of elements that give true for a condition/filter.
//  Eg: all even elements

// const arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((i) => {
//     console.log(i);
// })

// console.log("********************");
// let newArr = arr.filter((i) => {
//     return i % 2 === 0;
// })

// newArr.forEach((i) => {
//     console.log(i);
// })


// reduce method
// const array1 = [1,2,3,4];
// const initialValue = 0 ;
// const sumWithInitial  = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, initialValue,
// );

// console.log(sumWithInitial);



//  Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
// const marks = [11,33,75,98,65,23,90,87,43,93];

// marks.forEach((i)=>{
//     console.log(i);
// })

// console.log("**************");

// let result = marks.filter((i) =>{
//     return i > 90;
// })

// result.forEach((i)=>{
//     console.log(i);
// })




// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//  Use the reduce method to calculate sum of all numbers in the array.
//  Use the reduce method to calculate product of all numbers in the array.

// let num = prompt("Enter The Number : ");
// let arr = []
// for (let i = 1; i<= num; i++){
//     arr[i]  = i;
// }

// arr.forEach((i) =>{
//     console.log(i);
// })

// let innitialValue = 0;
// let sumOfArry = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, innitialValue,
// );

// let productOfArray = arr.reduce(
//     (accumulator, currentValue) => accumulator * currentValue, 
// );

// console.log(`sum of all array elements : ${sumOfArry}`);
// console.log(`product of all array elements : ${productOfArray}`);

// print stars patterns
/* 
*
**
***
****
*/

// let  rows = 5;
// for (let i = 1; i <= rows; i++){
//     let stars = " ";
//     for(let j = 1; j <= i; j++){
//          stars += "* ";
//     }
//     console.log(stars);
// }



// alternate for above examle
// let  irows = 5;
// let orows = 5;
// for (let i = 1; i <= irows; i++){
//     let stars = " ";
//     for(let j = 1; j <= orows; j++){
//          stars += "* ";
         
//     }
//     orows--;
//     console.log(stars);
// }



/*
* * * *
*     *
*     *
* * * *s
*/

// let rows = 4;
// for(let i = 1; i <= rows; i++){
//     let stars = ' ';
//     for(let j = 1; j <= rows; j++){
//         if (i === 1 || i === rows || j === 1 || j === rows){
//             stars += '* ';
//         }
//         else{
//             stars += '  ';
//         }

//     }
//     console.log(stars.trim());
// }



// ***********************************
// Questions on functions:

// Q1.Use filter to extract words longer than 5 letters from ["hello", "world", "JavaScript", "fun"].
// let arr =  ["hello", "world", "JavaScript", "fun"];
// let len = arr.filter((str) =>{
//    return 5 < str.length;
// });
// console.log(len);



// Q2Create an arrow function to calculate the factorial of a given number.
// let fact  = 1;
// const factriocal = (num) =>{
//   for (let i = 1; i <= num; i++){
//     fact *= i
//   }
//   return fact;
// };
// console.log(factriocal(5));


// Q3.Write an arrow function to count the vowels in a string.
// let countVowels = (str) =>{
//     let count = 0;
//     for (i of str){
//         if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
//            count++;
//         }
//     }
//     return count ;
// }
// console.log(countVowels("abhishek"));


// Q4.Write a reusable arrow function that checks if a number is prime.
// let isPrime = (num) => {
//     if (num < 2) return false ;
//     for(let i = 2; i<= Math.sqrt(num); i++){
//         if (num % i === 0) return false;
//     }
//     return true ; 
// }

// console.log(isPrime(4));




// Q5.
// forEach Loop
// Write a forEach loop that calculates the total cost of items in a cart:
// const cart = [
//     { name: "Book", price: 200 },
//     { name: "Pen", price: 20 },
//     { name: "Notebook", price: 100 }
// ];

// let total = 0;
// cart.forEach((item) => {
//     total += item.price;
// })
// console.log(`Total Of All Items : ${total}`);


// Q6. Use forEach to double the values in an array of numbers and store the results in a new array.
// const arr = [10,20,30,40];
// const newArray = [];
// arr.forEach((i) => {
//     newArray.push(i*2);
// })
// console.log(arr);
// console.log(newArray);


//Q7. Write a forEach loop that counts how many numbers in an array are greater than 50.
// const  arr =[ 100,2,36,67,29,40,67];
// let count = 0;
// arr.forEach((i) => {
//     if(i > 50) count++ ;
// })
// console.log(arr);
// console.log(count);


// Array Methods: Map, Filter, Reduce
// Q1. Use map to create a new array that adds "Hello, " to each name in ["Alice", "Bob", "Charlie"].
// const arr = ["Alice", "Bob", "Charlie"];
// const newArray = arr.map((i) =>{
//       return "Hello, " + i ;
// });
// console.log(arr);
// console.log(newArray);



// Q2. Write a filter function to find all the employees earning more than 50,000:

// const employees = [
//     { name: "John", salary: 40000 },
//     { name: "Jane", salary: 60000 },
//     { name: "Doe", salary: 70000 }
// ];

// const newArray = employees.filter((obj) => {
//      return obj.salary > 50000;
// });
// console.log(employees);
// console.log(newArray); 

// Use reduce to calculate the total value of all transactions in:
// const transactions = [100, -50, 200, -100, 50];
// let innitialValue = 0;
// let totatValue = transactions.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, innitialValue,
// );
// console.log(totatValue);



// Combine filter and map to find the squares of all even numbers in [1, 2, 3, 4, 5, 6, 7, 8].
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArray = arr
//  .filter((i) => i % 2 === 0)
//  .map((i) => i * i);

// console.log(newArray);


//Q 21. Use reduce to create an object that counts the occurrences of each letter in "javascript".
// let str = "abhishek";
// const letterCount = [...str].reduce((accu, char) => {
//    accu[char] = (accu[char] || 0 ) + 1;
//    return accu;
// },{});

// console.log(letterCount, typeof(letterCount));



// Q 23.Find all the products priced below 500 using filter:
// This is Array of Product Use Methods Like : filter , map, reduce and perfrom some operations
// const products = [
//       { name: "Mobile", price: 15000 },
//       { name: "Charger", price: 300 },
//       { name: "Laptop", price: 50000 },
//       { name: "Mouse", price: 200 },
//       { name: "Cable", price: 300 },
//       { name: "Usb", price: 100 }
//   ];

// // this method find all the products price below 500  
// const newArr = products.filter((item) => {
//       return item.price < 500;
// });
// console.log(newArr);


// // this method find only items values 
// const price = products.map((item) =>{
//       return item.price;
// })
// console.log(price)

// // this method find  total of all values 
// let total = price.reduce((accu, curr) =>{
//      return accu + curr;
// }, 0);
// console.log(total);




// Q24. Use map to add a 10% discount to every product and return the updated prices.
//   const products = [
//       { name: "Mobile", price: 15000 },
//       { name: "Charger", price: 500 },
//       { name: "Laptop", price: 50000 },
//       { name: "Mouse", price: 200 },
//       { name: "Cable", price: 300 },
//       { name: "Usb", price: 100 }
//   ];

// const price = products.map((item) =>{
//       return  item.price -= (item.price * 0.1) ;
// })
// console.log(price)

// let temp =0 ;
// function diss(total){
//       temp = total * 0.1;
//       return temp - total;
// }
// console.log(diss(500));


//  Advanced Logic Questions 

// const  arr = [0,2,1,0,3,4,0,6,1,5,0,4,2];
// let count = arr.reduce((accu, num) =>{
//     if (num > 0) accu.positive += 1;
//     else if (num < 0) accu.negtive += 1;
//     else accu.zero += 1;
//     return accu;
// }, {positive : 0, negtive : 0, zero : 0});

// console.log(count);



// Q 28.Write an arrow function to find the longest word in a sentence.
// let str = "hello Hi how are you abhishek";
// const arr = str.split(" ");
// console.log(arr);

// // let largest = arr.filter((word) =>{
     
// // });

// let largest = arr.reduce((accu, curr) =>{
//       if (accu.length < curr.length) accu = curr;
//       return accu;
// },"");
// console.log(largest);



// Q 29 .Use forEach to simulate a voting system that calculates the total votes for each candidate:
// const votes = ["Alice", "Bob", "Alice", "Alice", "Bob", "Charlie"];
// let alice =0,bob=0,charlie = 0; 
// votes.forEach((can) =>{
//  if (can === "Alice") alice++ ;
//  else if (can === "Bob") bob ++ ;
//  else charlie ++ ;

// });
// console.log(`Alice : ${alice}`);
//  console.log(`Charlie : ${charlie}`);
//  console.log(`Bob : ${bob}`);


// Write a forEach loop to calculate the total age of people in:
// const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Doe", age: 20 }
// ];
// console.log(people);

// let count = 0;
// people.forEach((per) =>{
//       count += per.age;
// })
// console.log(count);


// Array Methods: Map, Filter, Reduce
// Use reduce to group items by category
// const items = [
//     { name: "Apple", category: "Fruit" },
//     { name: "Carrot", category: "Vegetable" },
//     { name: "Banana", category: "Fruit" }
// ];

// let category = items.reduce((accu, curr) =>{
//     if (curr.category === "Fruit") accu.fruit += curr.name + " ";
//     else if (curr.category === "Vegetable") accu.vegetable += curr.name;
//     return accu;
// },{fruit :' ', vegetable: ' ' });

// console.log(category);


// Use filter and reduce to calculate the total balance of all active accounts:

// const accounts = [
//     { id: 1, balance: 500, active: true },
//     { id: 2, balance: 1000, active: false },
//     { id: 3, balance: 200, active: true }
// ];

// find active accounts 
// console.log(accounts);
// let activeAcc = accounts.filter((ac) =>{
//     return ac.active === true;
// });
// console.log(activeAcc);

// let totalBal = activeAcc.reduce((accu, curr) =>{
//    return accu += curr.balance;
// }, 0);
// console.log(totalBal);


// Write a function to calculate the total score of students with grades above 70 using filter and reduce:
// const grades = [80, 50, 90, 60, 75];
// let above70 = grades.filter((mark) =>{
//       return mark > 70;
// })
// console.log(above70);

// let total = above70.reduce((accu, curr) =>{
//     return accu + curr;
// });

// console.log(total);





// Combine map, filter, and reduce to calculate the total discounted price of products priced above 1000:
// const products = [
//     { name: "TV", price: 1500 },
//     { name: "Phone", price: 800 },
//     { name: "Laptop", price: 2000 }
// ];
//  
// const amount = products.filter((val) =>{
//       return val.price > 1000;
// })
// console.log(amount);


// const diss = amount.map((item)=>{
//    return  item.price * 0.1;
// });
// console.log(diss);

// let total = diss.reduce((accu, curr) =>{
//     return accu + curr;
// },0);
// console.log(total);


// Q38. Create a function to reverse the words in a sentence using reduce.
// let str = "hey hi hello how are you friend";
// let str2 =[...str].reduce((accu, curr) =>{
//       return curr + accu;
// },"");
// console.log(str2);


// Use filter to identify the prime numbers from 1 to 50, then use reduce to find their sum.
// let arr = [];
// for (let i = 1; i<= 50 ; i++){
//     arr.push(i);
// }
// console.log(arr);
 
// const even = arr.filter((i) => {
// return i % 2 ===0 ;
// });

// console.log(even);

// let total = even.reduce((accu, curr) =>{
// return accu + curr;
// },0)

// console.log(total);



// Q 40.Write a function that uses reduce to merge an array of objects into a single object:
// const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
// console.log(arr);
// let singleObj = arr.reduce((accu, curr) =>{
//    return accu ;
// }, {a: 1, b: 2, c: 3});
// console.log(singleObj);







