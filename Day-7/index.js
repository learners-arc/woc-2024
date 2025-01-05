// Array
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Strawberry'];
//  let [a, b, c, d, e, f] = fruits;
//  console.log(fruits[1]);

//  console.log(a,b,d);
 // Destructuring

//  let student = ['shakil', 'divya', 'ayushman'];
//  let [x,y,z] = student;

// Object
// let student = {
//     name: 'Shakil',
//     age: 22,
//     city: {
//         name: 'Delhi',
//         country: 'Delhi'
//     }
// }

// const {name, age, city} = student;


// console.log(name, age);

//Default values in destructuring
// const colors = ['red'];
// const [primary, secondry = "pink" ] = colors;
// console.log(colors);

// Nested Destructuring
//  const apiResponse = {
//         status: 'success',
//         data: {
//             user: {
//                 name: 'Shakil',
//                 age: 22
//             }
//         }
//  }

//  const {data: {user: {name, age}}} = apiResponse;
//  console.log(name, age);

// async function api(){
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos')
//           .then(response => response.json())
//         //   .then(json => console.log(json))
    
//     console.log(data)
// }

// api();

// Array
// let students = ['Shakil', 'Divya', 'Ayushman'];
// console.log(students);
// students.push('Rahul');
// console.log(students);
// students.pop();
// console.log(students);
// students.shift();
// console.log(students);
// students.unshift('Shakil');
// console.log(students);
// let user = ['ayush', 'sweta','shakil'];

// let allStudents = students.concat(user);
// console.log(allStudents);

// let num = [5,35,63,674];

// num.forEach((item, index) => {
//     console.log(item%3);
// })

// let num = [1,2,3,4,5,6,7,8,9,10];

// let newArray = num.map((naam) => {
//     return naam * 2;
// })

// console.log(newArray);

// let even = num.filter((item) => {
//     return item % 2 === 0;
// })

// console.log(even);

// let num = [1,2,3,4,5,6,7,8,9,10];

// let found = num.find((item) => {   
//     return item > 5 && item > 8;
// })

// console.log(found);

// let num = [43,75,33,73,733,7,86];
// let student =  ['Shakil', 'Divya', 'Ayushman'];

// student.sort();

// console.log(student);

//Template Literals
// let user = 'divya';
// role ='developer';
// learning='react';

// let value = `Hello, I am ${user}
// I am a ${role}
// I am learning ${learning}`;


// console.log(value);

// const product = 'Mobile';
// const price = 10000;
// const quantity = 2;
// console.log(`The product ${product} costs ${price} and the quantity is ${quantity}. The total price is ${price * quantity}`);

// Rest and spread

// function rest(...args){
//     console.log(args);
// }

// let obj = [...num];

// let num = [1,2,3,4,5,6,7,8,9,10];

// function sum(...args){  
//     return args.reduce((total, num) => 
//         total + num,0);
// }

// console.log(sum(1,2,3,4));

// function mul(...num){
//     return num.reduce((total, num) => total * num,1);
// }

// console.log(mul(2,3,5));

// let student = ['Shakil', 'Divya', 'Ayushman'];
// let user = ['ayush', 'sweta','shakil'];
// const newStudent = [...student, ...user];
// console.log(newStudent); 

// let user = 'ayush';
// let learner = 'Ayushman';

// let value = [...user];
// let value1 = [...learner];

// console.log(value, value1);

// Promises
// const fetchData = new Promise((accept, reject)=>{
//     const success = true;

//     if(success){
//         accept('Data fetched successfully');
//     } else {
//         reject('Data not fetched');
//     }
// });

// fetchData.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log("error",error);
// })

// function fetchData(){
//    fetch('https://jsonplaceholder.typicode.com/todos').then(data=>data.json()).then(data => console.log(data)).catch(error => console.log(error));
// }

// fetchData();

// async / await

// async function fetchData(){
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const data = await response.json();
//         console.log('data aa gya'); 
//     } catch (error) {
//         console.error('error',error)
//     }
// }
// fetchData();

// localStorage.setItem('name', 'Shakil');
// localStorage.setItem('drink', 'I prefer coffee!!');

// alert(localStorage.getItem('drink'));

// localStorage.removeItem('name');

// localStorage.clear();

// Pure Function Example
// const add = (a, b) => a+b;
// console.log(add(2,3));

// // Higher Order Function
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const double = numbers.map((num) => num * 2);
// console.log(double);

// Debouncing

// function debounce(func, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
       
//     }
// }

// const logMessage = () => console.log('Debouncing');
// const debounceLog = debounce(logMessage, 300);

// window.addEventListener('resize', debounceLog);

// Throttling
function sleepTime(fn, limit){
    let lastcall = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastcall >= limit){
            lastcall = now;
            fn.apply(this, args);
        }
    };
}

const logScroll = () => console.log('Throttling');
const throttleLog = sleepTime(logScroll, 1000);

window.addEventListener('scroll', throttleLog);