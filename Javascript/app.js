// console.log("Hello World")

// var x = 10;
// console.log("x = " + x);

// let y = 2;
// console.log("y = " + y);

// y = 6;
// console.log("y = " + y);

// const z = 5;
// console.log("z = " + z);
// console.log(typeof z)

// // string
// let myname = "Salman";
// console.log("myname is " + myname)
// console.log(typeof myname)


// // boolean
// let bool = false;
// console.log(bool)

// console.log(typeof bool)

// if(bool)
//     console.log("Hi")
// else
//     console.log("Hello")


// let n = null;
// console.log(n);
// console.log(typeof n)

// let b;
// console.log(b)
// console.log(typeof b)


// // non - primitive datatypes
// // Array
// let numbers = [1 ,2, 3, 4]
// console.log(numbers)
// console.log(numbers[2]);


// // console.log(numbers[0] + 10);
// // console.log(numbers[1] + 10);
// // console.log(numbers[2] + 10);
// // console.log(numbers[3] + 10);

// // looping
// for(let i of numbers){
//    console.log(i + 10) 
// }

// // updating an element using index
// numbers[1] = 10;
// console.log(numbers);

// // remove element
// // delete numbers[0];
// // console.log(numbers);

// numbers.splice(0, 1);
// console.log(numbers);

// let new_array = numbers.slice(1);
// console.log(new_array) // modified array
// console.log(numbers) // original array

// // Object
// let student1 = {name:"Fajariya", age:25};
// console.log(typeof student1)
// console.log(student1)
// console.log(student1.name) // console.log(student1[name])

// // update an object 
// student1.age = 24;
// console.log(student1)

// console.log("Hi " + student1.name + ", " + "your Age is "+ student1.age)

// // looping 
// for(let key in student1){
//     console.log(key + " : " + student1[key] )
// }

// // delete key 
// delete student1.age
// console.log(student1)


// // Relational operators(>, <, >=, <=, !=, !==, ==, ===)
// console.log(10 == 10) // true
// console.log(10 == 0) // false

// // datatype mismatch
// console.log(1 == "1") // true, bcs values are same
// console.log(1 === "1") // false, bcs strictly it checks for both values and datatypes


// // ternery operator/ conditional opearator
// let age = 24;
// const result = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
// console.log(result)


// // unary operator(++, --)
// let i = 1;
// console.log(i);

// // increment
// // i++;
// // console.log(i);


// // decrement
// // i--;
// // console.log(i)

// // console.log(i++)
// // console.log(i + 2)

// // console.log(i++ + i) // 3
// console.log(i++ + ++i)


// // Decision making statements
// if(age >= 18){
//     console.log("Adult")
// }
// else{
//     console.log("Minor")
// }

// // looping statements
// for(let i = 1; i <= 5; i++){
//     console.log("i = " + i);
// }

// console.log("-------------------------")

// for(let i = 5; i >= 1; i--){
//     console.log("i = " + i)
// }

// console.log("-------------------------")
// // for(let i = 1; i <= 5; i++){
// //     if(i%2 == 1){
// //         console.log("i = " + i);
// //         document.getElementById("list").innerHTML += `<li>i = ${i}</li>`
// //     }
// // }

// // forEach array method
// numbers.forEach(a => console.log(a+10))

// console.log("=====================")

// for(let i=0; i<numbers.length ; i++){
//     console.log(numbers[i] + 10)
// }

// console.log("=====================")

// // map()
// let another_array = numbers.map(a => {return a + 10})
// console.log(another_array)

// // functions
// function add(){
//     console.log(1+1)
// }

// add()

// // console.log(new Date().getFullYear())

// function findAge(year){
//     console.log(new Date().getFullYear() - year)
// }

// findAge(1995)
// findAge(1996)
// findAge(2004)

// function checkEligibilty(age){
//     if(age > 150){
//         return "Not Applicable"
//     }
//     return age >= 18 ? "Eligible" : "Not Eligible" ;
// }

// console.log(checkEligibilty(23))
// console.log(checkEligibilty(18))
// console.log(checkEligibilty(17))
// console.log(checkEligibilty(200))


// let g = function(){
//     console.log("anonymous");
// }
// g();

// let p = () => console.log("arrow");
// p();

// (function (){
//     console.log("SIF/IIF");
// })();

// function addition(a=0, b=0){
//     console.log(a+b)
// }
// addition(1, 2)
// addition(1) 

// function multiply(...a){
//     // console.log(a)
//     let mul = 1;
//     for(let num of a){
//         mul *= num
//     }
//     console.log(mul)
// }
// multiply(2, 3, 2, 3, 4, 1 , 2 , 5)


// console.log("Start")

// function task1(){
//     // console.log('first') 
//     setTimeout(() =>{console.log("first")}, 1000)
// }

// function task2(){
//     console.log('second')
// }

// // task1() // 1 sec wait
// // task2()

// console.log("End")

// start
// first (without timer)
// second
// End

//start
//second
// End
// first(with timer)


// callback function
function step1(callbackFn){
    setTimeout(() =>{
        console.log('boil noodles')
        callbackFn()
    }, 3000)
    
}

function step2(callbackFn){
    setTimeout(() =>{
        console.log('mix spices, vegetable and boiled noodles')
        callbackFn()
    }, 7000)
}

function step3(){
    setTimeout(() =>{console.log('serving')}, 5000)
}

// step1()
// step2()
// step3()

// convert the asyncronous execution to syncronous execution
// callback function
step1(() =>{
    step2(() =>{
        step3()
    })
})
