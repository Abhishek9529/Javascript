//1. Question: Declare a variable isStudent and assign it a boolean value. Print the type of this variable using typeof.
// let isStudent = true;
// console.log(typeof(isStudent));

//2. Question: Create a variable userName and assign your name to it. Print Hello, [your name]! using this variable.
// let userName = "Rahul";
// console.log(`Hello ${userName}`);


// 3. Question: Write a program to swap the values of two variables, a and b.
// let a = 10;
// let b = 20;
// console.log(`Before Swaping Values of a : ${a} and b : ${b}`);
// c = a;
// a = b;
// b = c;
// console.log(`After Swaping Values of a : ${a} and b : ${b}`);


// 4.Question: Declare a constant PI with a value of 3.14. Attempt to change its value and observe what happens.


// 5.Question: Assign the number 10 to a variable. Change it to a string type and verify its type using typeof.
// let num = 10;
// console.log(typeof(num));
// let str = String(num);
// console.log(typeof(str));


// 6.Question: Declare a variable without assigning a value. Print its value and type.
// let empty ;
// console.log(typeof(empty), empty);


// 7.Question: Write a program to add a number and a string, like 10 + "20", and explain the result.
// console.log(10 + "10");


// 8.Question: Create a variable marks and assign an undefined value to it. Then, change it to a number and print the type.
// let marks = undefined;
// console.log(marks);
// marks = 10;
// console.log(typeof(marks));


// 9.Question: Declare a variable, assign it a null value, and print its type. Explain the output.
// let empty = null;
// console.log(empty);


//********************************************************************************* */

// Part 2: Operators (10 Questions)

// 1. Question: Write a program to calculate the sum, difference, product, and quotient of two numbers.
// let a = 10;
// let b = 20;
// console.log(`Addition : ${a+b}`);
// console.log(`Subtraction : ${a-b}`);
// console.log(`Multiplication : ${a*b}`);
// console.log(`Division : ${a/b}`);
// console.log(`Modulo : ${a%b}`);

// 2. Question: Use the modulus operator to find if a given number is odd or even.
// let num = 10;
// if (num % 2 == 0){
//     console.log(`${num} is Even `);
// }
// else {
//     console.log(`${num} is Odd `);
// }


// 3. Question: Write a program to increment a variable by 1 using both ++ and +=.
// let a = 1;
// console.log(a++);
// console.log(a += 1);



// 4. Question: Compare two variables using == and === operators and explain the difference with an example.
// let value1 = "10";
// let value2 = 10;
// if (value1 === value2){
//     console.log("Both are equal");
// }
// else {
//     console.log("Both are not equals");
// }

// if (value1 == value2){
    // console.log("Both are equal");  // Both are equal
// }



// 5. Question: Combine a string and a number using the + operator and print the result.
// console.log(10 + "10");  1010

// 6. Question: Write a program to use logical operators (&&, ||, !) with real-life examples like a login system.
// let name = "rahul";
// let Pass = 1234;
// let userName = prompt("Enter Your UserName : ");
// let Password = prompt("Enter Your Password : ");
// if (userName == name && Password == Pass){
//     console.log("Login Successful");
// }
// else {
//     console.log("Login Filed");
// }



// 7. Question: Calculate the exponential of two numbers using the ** operator.


// 8. Question: Write a program to find the remainder of a division operation and check if it’s zero.

// 9. Question: Use the ternary operator to assign a value to a variable based on a condition.

// 10. Question: Write a program to compare three numbers and find the largest using relational operators.
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// if (num1 >= num2 && num1 >= num3){
//    console.log(`${num1} is greater`);
// }
// else if (num2 >= num1 && num2 >= num3){
//     console.log(`${num2} is greater`);
// }
// else {
//     console.log(`${num3} is greater`);
// }




// *****************************************
// Part 3: Conditional Statements (10 Questions)
// 1 Question: Write a program to check if a number is positive, negative, or zero.

// let num = 0;
// if (num == 0){
//     console.log("Number Is Zero")
// }
// else if  (num < 0){
//     console.log("Number Is Negative")
// }
// else{
//     console.log("Number Is Positive")
// }


// 2. Question: Use an if-else statement to check if a given year is a leap year.
// let year = 2024;
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ){
//     console.log("Year is leapyear");
// }
// else {
//     console.log("Year is not leapyear");
// }


// 3. Question: Write a program to simulate a traffic light system using if-else-if.
// let light = "green";
// if (light === "green"){
//     console.log("Go");
// }
// else if (light === "yellow" ){
//     console.log("Ready")
// }
// else if (light === "red") {
//     console.log("Stop");
// }

// 4. Question: Create a program to display a grade based on marks using if-else (A, B, C, etc.).
// let marks = 89;
// if (marks >= 80){
//     console.log("A")
// }
// else if(marks >= 60){
//     console.log("B")
// }
// else{
//     console.log("C")
// }

// 5.Question: Use a switch-case statement to print the day of the week based on a number (1 for Monday, 2 for Tuesday, etc.).


// 6. Question: Write a program to check if a given character is a vowel or consonant using conditional statements.
// 7. Question: Use if conditions to determine whether a given time (in hours) falls in morning, afternoon, evening, or night.
// 8. Question: Create a program that checks if a number is divisible by both 3 and 5.
// 9. Question: Write a program to simulate a simple password validation system.
// 10. Question: Use nested if-else statements to determine the type of a triangle based on its sides.


// *****************************************************

// Part 4: Loops (10 Questions)

// Question: Write a program to print numbers from 1 to 10 using a for loop.
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Question: Use a while loop to calculate the sum of the first 10 natural numbers.
// let sum =0;
// let i = 1;
// while(i <= 10){
//     sum += i;
// }
// console.log(sum);

// Question: Write a program to print the multiplication table of a number using a for loop.
// let num = 5;
// for (let i = 1; i<= (num * 2); i++){
//     console.log(i * num);
// }

// Question: Create a program to reverse a given number using a loop.


// Question: Use a do-while loop to take input from the user until they enter a number greater than 10.
// let num = 0;
// do {
//    num  = prompt("Enter the number : ");
// }
// while (num < 10);


    
// Question: Write a program to print all even numbers between 1 and 50 using a loop.
// for(let i = 1; i<= 50; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// Question: Use a for loop to calculate the factorial of a number.
// let num = 5;
// let a = 0;
// let b = 1;
// let fact = 0;
// for (let i = 0; i<= 5; i++){
//     fact += i + (i+1);
// }


// let fact = 1;
// let num = 5;
// for (let i = 1; i <= num; i++){
//     fact *=  i;
// }
// console.log(fact);



// Question: Create a program to find the sum of digits in a number using a loop.


// Question: Write a program to print numbers in reverse order from 10 to 1.
// let num = 10;
// for (let i = 10; i >= 1; i--){
//     console.log(i);
// }

// Question: Use nested loops to print a pattern like this:



// ******************************************

