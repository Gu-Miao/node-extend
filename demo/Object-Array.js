#!/usr/bin/node

var extend = require("extend");

var dog = {
  "name": "JingBa",
  "sex": "male",
  "age": 3,
  "eye": "black",
  "color": "brown"
};

var drink = ["drink", "get water", "every day", "necessary" ];

extend(dog, drink );
console.log(dog);

/*{ '0': 'drink',
  '1': 'get water',
  '2': 'every day',
  '3': 'necessary',
  name: 'JingBa',
  sex: 'male',
  age: 3,
  eye: 'black',
  color: 'brown' }*/

// create by Gu-Miao(Kirito) on 2017-11-28
// 我们发现 extend() 方法会将参数数组整合到目标对象上，并且我们可以使用类似数组的方式来访问新添加的属性，比如：dog[0] -- "drink"。
