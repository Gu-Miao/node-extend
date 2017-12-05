#!/usr/bin/node

var extend = require("extend");

var dog = Symbol("dog");

var eat = {
  "name": "eat",
  "time": "3 times a day"
};

var drink = ["drink", "every day"];

var play = "paly";

extend(true, dog, eat);
console.log(dog);

extend(true, dog, drink);
console.log(dog);

extend(true, dog, play);
console.log(dog);

// Symbol(dog)

extend(true, eat, dog);
console.log(eat);

// { name: 'eat', time:'3 times a day' }

extend(true, drink, dog);
console.log(drink);

// ['drink', 'every day']

// create by Gu-Miao(Kirito) on 2017-11-28
// 由上述代码可知在 extend() 方法中, Symbol 类型作为参数是无效的。 
