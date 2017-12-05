#!/usr/bin/node

var extend = require("extend");

var dog = ["JingBa", 3, "brown"];

var drink = "drink" ;

extend(true, dog, drink);

console.log(dog);

// [ 'd', 'r', 'i', 'n', 'k'  ]

// create by Gu-Miao(Kirito) on 2017-11-28
// 在 extend() 方法中, String 类型会被自动转换为数组对象，JSON 对象同理。 
