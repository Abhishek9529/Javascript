// Array In JS
//  Collections of item
// array creation
let names = ["Raj", "jay", "Ravi", "Om", "Swap"];
let heroes = ["Salman", "Allu_Arjun", "Vijay", "Sharukh", "Ritik", "Ajay", "Akshay"];
let info = ["Rahul", 89, "Delhi"];

// print array elements
// console.log(names);
// console.log(heroes);
// console.log(info);

// iterate array elements 
// for (i of names){
//     console.log(i);
// }

// for (i of heroes){
//     console.log(i);
// }

// for (i of info){
//     console.log(i);
// }

// access elements using index
// console.log(heroes[1]);
// console.log(names[2]);
// console.log(info[3]);


// Q1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//  Find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// let avg = 0;
// let total = 0;
// for (i of marks){
//     total += i;
// }
// avg = total / 6;
// console.log(`Average Marks :  ${avg}`);


// Q2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//  All items have an offer of 10% OFF on them. Change the array to store final price after
//  applying offer.

// let Ovalues = [250, 645, 300, 900, 50]
// let result = 0;
// let Dvalues = [];
// console.log("original values of items", Ovalues);
// for(item of Ovalues){
//     result = item * 0.10
//     afterDisscount = item - result;
//     Dvalues.push(afterDisscount);
// }
// console.log("After Disscount values of items ", Dvalues);