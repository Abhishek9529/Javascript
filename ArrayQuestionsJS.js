//  Array Questions

// 1. Question: Write a program to create an array of numbers and print it.
// let arr = [1,2,3,4,5];
// console.log(arr);

// Question: Add a number to the beginning and end of an array using unshift() and push().
// let arr = [1,2,3,4,5];
// arr.unshift(0);  // insert at the start
// arr.push(6);     // insert at the end 
// console.log(arr);

// Question: Remove the first and last elements of an array using shift() and pop().
// let arr = [1,2,3,4,5];
// arr.shift();
// arr.pop();
// console.log(arr);

// Question: Write a program to find the largest number in an array.
// let arr = [1,22,33,2,43,24,5];
// let large = arr[0];

// for (let i of arr){
//     if (large < i){
//         large = i;
//     }
// }
// console.log(large);



// Question: Use a loop to calculate the sum of all elements in an array.
// let arr = [1,2,3,4,5];
// let initialValue = 0;
// let sumOfAllNumbers = arr.reduce(
//     (accumulator, currentValue) =>  accumulator + currentValue , initialValue,
// );
// console.log(sumOfAllNumbers);


// Question: Write a program to reverse an array.
// let arr = [1,2,3,4,5];
// console.log(arr.reverse());

// Question: Use the map() function to create an array of squares of numbers from another array.
// let arr = [1,2,3,4,5];
// const newArray =arr.map((i) => {
//    return i * i ;
// });
// console.log(arr);
// console.log(newArray);


// Question: Create a program to filter out even numbers from an array using filter().
// let arr = [1,2,3,4,5];
// const newArray = arr.filter((i) =>{
//    return i  % 2 == 0;
// });
// console.log(arr);
// console.log(newArray);



// Question: Sort an array of strings alphabetically using the sort() method.
// let arr = ['a','b','h','i','s','h','e','k'];
// console.log(arr.sort());



// Question: Use forEach() to print all elements of an array.
// let arr = [1,2,3,4,5];
// arr.forEach((i) => {
//    console.log(i);
// });