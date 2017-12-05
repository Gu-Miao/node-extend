#!/usr/bin/node

var extend = require("extend");

var dog = "I am JingBa";
console.log(typeof dog);

var eat = {
  "name": "eat",
  "function": "get energy"
};

var drink = ["drink", "every day"];

var play = "play bone";

extend(true, dog, eat);
console.log(dog);

extend(true, dog, drink);
console.log(dog);

extend(true, dog, play);
console.log(dog);

// I am JingBa

// create by Gu-Miao(Kirito) on 2017-11-30
// 我们发现当第一个参数是字符串时，extend() 方法并不会将对象或数组整合到他上面。
