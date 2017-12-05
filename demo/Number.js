#!/usr/bin/node

var extend = require("extend");

var dog = 20171130;
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

// 20171130 

// create by Gu-Miao(Kirito) on 2017-11-30
// 同 String, extend() 方法并不会将对象或数组整合到 Number 类型上。
