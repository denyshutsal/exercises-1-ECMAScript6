// 1

// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;

// console.log(name, age, isAdmin);

// 2

// const ourPlanet = undefined;
// const currentUserName = undefined;

// 3
// if(true) will work because the condition is true.
// the inner function, having access to two outer variables, will print the result

// let phrase = "Hello";

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi(); // Hello, John

// 4
// Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// const user = {};

// user.name = "John";
// user.surname = "Smith";

// user.name = "Pete";
// delete user.name;

// console.log(user);

// 5
// an object, like a function, are reference data types, and when their content changes, the reference does not change

// 6

// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130,
// };

// let salaries = {}; // 0

// function sum(obj) {
//   let sum = null;

//   if (Object.keys(obj).length !== 0) {
//     for (const key in obj) {
//       sum += obj[key];
//     }
//   } else {
//     sum = 0;
//   }

//   return sum;
// }

// console.log(sum(salaries));

// Exercise 7

// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }

// ------------

// let a = 2;
// let b = 1;

// let result = a + b < 4 ? "Below" : "Over";

// console.log(result);

// 8

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

// ---------------------

// let message;
// let login = "Employee"; // Hello
// // ...
// let login; // ""

// login == "Employee"
//   ? (message = "Hello")
//   : login == "Director"
//   ? (message = "Greetings")
//   : login == ""
//   ? (message = "No login")
//   : (message = "");

// console.log(message);
