#!/usr/bin/node

var extend = require("extend");

var dog = {
  "name": "JingBa",
  "age": 3,
  "color": "brown"
};

console.log(extend(dog,dog));

// { name: 'JingBa', age: 3, color: 'brown'  }

// create by Gu-Miao(Kirito) on 2017-12-5
// extend() 方法中的参数可以是对象本身，但对象不会有任何改变。
