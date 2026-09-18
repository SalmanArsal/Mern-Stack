console.log("Hello World")

var x = 10;
console.log("x = " + x);

let y = 2;
console.log("y = " + y);

y = 6;
console.log("y = " + y);

const z = 5;
console.log("z = " + z);
console.log(typeof z)

// string
let myname = "Salman";
console.log("myname is " + myname)
console.log(typeof myname)


// boolean
let bool = false;
console.log(bool)

console.log(typeof bool)

if(bool)
    console.log("Hi")
else
    console.log("Hello")


let n = null;
console.log(n);
console.log(typeof n)

let b;
console.log(b)
console.log(typeof b)


// non - primitive datatypes
let numbers = [1 ,2, 3, 4]
console.log(numbers)
console.log(numbers[2]);


// console.log(numbers[0] + 10);
// console.log(numbers[1] + 10);
// console.log(numbers[2] + 10);
// console.log(numbers[3] + 10);

// looping
for(let i of numbers){
   console.log(i + 10) 
}