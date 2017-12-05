#!/usr/bin/node

var extend = require("extend");

var dog = {
  "name": "JingBa",
  "age": 3,
  "color": "brown"
};

var drink = {
  "name": "drink",
  "who": "dog",
  "time": "every day"
};

extend(dog, drink);
console.log(dog);

/*{ name: 'drink',
  age: 3,
  color: 'brown',
  who: 'dog',
  time: 'every day' }*/

// create by Gu-Miao(Kirito) on 2017-11-28
// 我们发现 extend() 方法会将参数对象整合到目标对象上，并且会覆盖同名的属性，如上述代码中的 name。
