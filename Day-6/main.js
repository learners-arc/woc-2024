// let a = 10;
// let b = 20;

// let c = a + b + c;

// let c = [];

// c[0] = 10;
// c[-1] = 20;
// c["name"] = "John";

// console.log(c);

// let e = {
//   0: 1,
//   1: 2,
// };

// let d = {
//   name: "John",
//   age: 30,
// };

// console.log(d);


// Execution Context
// Lexical Environment - Scope chain rakhta hai, jo variables ki scope ko dicide karti hai
// function add(a, b) {
//   function sub(c, d) {
//     return c + d + a;
//   }

//   return a + b + sub(10, 20);
// }

// console.log(add(10, 20)); 

// Truthy and Falsy Values
// 0, null, undefined, NaN, "", false, document.all are falsy values

// if (-2) {
//   console.log("Hello");
// } else {
//   console.log("Bye");
// }


// Asynchronous JavaScript

// setTimeout
// setInterval
// Fetch
// Axios
// Promises


// console.log("Bye");

// const interval = setInterval(() => {
//   console.log("Hello");
// }, 2000);

// setTimeout(() => {
//     clearInterval(interval);
// }, 5000);


// Fetch

// fetch("https://randomuser.me/api/")
//   .then((chithi) => {
//     return chithi.json();
//   })
//   .then((data) => {
//     console.log(data.results[0].name.first);
//   })

// Axios
//  axios.get("https://randomuser.me/api/") //2sec
//  .then((chithi) => {  // 2sec baad chalega
//     console.log(chithi);
//  })

//  console.log("Bye");


// Promises

// task assign - pending tasks
// task complete - resolve - fulfilled - rejected

// const wada = new Promise((succes, failure) => {
//     axios.get("https://randomuser.me/api/")
//      .then((chithi) => {
//         failure(chithi);
//         console.log(wada);
//      })
//      .catch((err) => {
//         failure(err);
//      })
// })
//   .then((chithi) => {
//     console.log(chithi);
//   });


// Callbacks
// function add(a, b, cb) {
//   cb(a + b);
// }

// add(10, 20, function(result) {
//   console.log(result);
// });

// function getData(url, callback) {
//   fetch(url)
//     .then((chithi) => {
//       return chithi.json();
//     })
//     .then((data) => {
//       callback(data);
//     });
// }

// getData("https://randomuser.me/api/", (data) => {
//   console.log(data.results[0].name.first);
// });

// Generators

// function func () {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//       } 
// }

// func();

// function* generator() {
//     for (let i = 0; i < 10; i++) {
//         yield i;
//         console.log(i);
//       } 
// }

// const gen = generator();
// console.log(gen.next());
// console.log(gen.next());

// Web workers
// const nums = Array.from({ length: 1000000 }, (_, i) => i + 1);
// let worker = new Worker("worker.js");
// worker.postMessage(nums);

// worker.onmessage = function (e) {
//   console.log(e.data);
// };

// console.log("Bye");

// setTimeout(function (){
//     const element = document.querySelecto("#intro");
//     document.getElementById("demo").innerHTML = 
//    "The text from the intro paragraph is: " + element.innerHTML;
// }, 5000);








