#!/usr/bin/node

var extend = require("extend");

var dog = ["JingBa", 3, "brown"];

var drink = {
  "name": "drink",
  "who": "dog"
};

extend(true, dog, drink);

console.log(dog);

// [ 'JingBa', 3, 'male', 'brown', name: 'drink', who: 'dog'  ]

// create by Gu-Miao(Kirito) on 2017-11-28
// 当我们把一个对象用 extend() 方法整合到一个数组对象上时，就会返回上述的一个数组对象，我们可以使用类似对象的方法来访问被添加上去的对象属性，比如 dog.name -- dirnk。
