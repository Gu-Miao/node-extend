#!/usr/bin/node

var extend = require("extend");

var dog = {
  "name": "JingBa",
  "age": 3,
  "color": "brown"
};

eat = "I want to eat";

brith = 20171128;

extend(dog, eat);
console.log(dog);

/*{ '0': 'I',
  '1': ' ',
  '2': 'w',
  '3': 'a',
  '4': 'n',
  '5': 't',
  '6': ' ',
  '7': 't',
  '8': 'o',
  '9': ' ',
  '10': 'e',
  '11': 'a',
  '12': 't',
  name: 'JingBa',
  age: 3,
  color: 'brown' }*/

extend(dog, brith);
console.log(dog);

/*{ name: 'JingBa',
  sex: 'male',
  age: 3,
  eye: 'black',
  color: 'brown' }*/

// create by Gu-Miao(Kirito) on 2017-11-28
// 在 extend() 方法中，若参数为一个字符串，那么 extend() 方法会将它转变为一个数组对象，然后进行整合；若参数为数字类型，则目标对象不会发生任何变化
