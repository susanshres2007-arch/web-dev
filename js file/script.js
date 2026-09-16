// console.log("External script loaded successfully!");
// const x="joshangay"; 
// console.log(x);
// const a = 5;
// const b = 10;
// const sum = a + b;
// console.log("sum:",sum);
// const multiply = a * b;
// console.log("Product:",multiply);
// const remainder = a % b;
// console.log("Remainder:",remainder);
// //if x=7,y=8,z=9. Find if they are even number or odd number
// const p = 7;
// const q = 8;
// const r = 9;

// if (p % 2 == 0) {
//     console.log(p + " is an even number");
// } else {
//     console.log(p + " is an odd number");
// }

// if (q % 2 == 0) {
//     console.log(q + " is an even number");
// } else {
//     console.log(q + " is an odd number");
// }

// if (r % 2 == 0) {
//     console.log(r + " is an even number");
// } else {
//     console.log(r + " is an odd number");
// }

let num = 5
if (num === 5) {
    console.log("number");
}else if (num == 5) {
    console.log("string");
}

function displayname(name)
{
    console.log("My name is",name);
}
displayname("joshangay");

// create a function for sum, product, remainder of two numbers
function sum(a,b){
    console.log("The sum is:",a+b);
}
sum(4,10);

function product(a,b){
    console.log("The product is:",a*b);
}
product(4,10);

function remainder(a,b){
    console.log("The remainder is:",a%b);
}
remainder(4,10);    

//create a function to check if a number is even or odd

// let u = 5;
let u = prompt("Enter any number to check odd or even");
let result = checkEvenOdd(u);
if (result == 0) {
    // console.log(u + " is an even number");
    alert(u + " is an even number");
} else {
    // console.log(u + " is an odd number");
    alert(u + " is an odd number");
}
function checkEvenOdd(num){
    return num % 2;
}


//HOISTING AND SCOPING