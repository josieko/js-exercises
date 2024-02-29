// ⭐️ 🍓 ⭐️
// 30 days of JS by Leetcode
// ⭐️ 🍓 ⭐️

// 🍉 task 1 - Hello world
let createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
f();
console.log(f());

// 🍒 task 2 - Counter
let createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
