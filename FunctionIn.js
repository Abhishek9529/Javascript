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


// let fact  = 1;
// const factriocal = (num) =>{
//   for (let i = 1; i <= num; i++){
//     fact *= i
//   }
//   return fact;
// };

// console.log(factriocal(5));


// Q2.
// forEach Loop
// Write a forEach loop that calculates the total cost of items in a cart:

// javascript
// Copy code
// const cart = [
//     { name: "Book", price: 200 },
//     { name: "Pen", price: 20 },
//     { name: "Notebook", price: 100 }
// ];
