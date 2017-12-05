#!/usr/bin/node

var extend = require("extend");

var dog = ["JingBa", 3, "male", "brown"];

var drink = ["drink", "get water", "every  day", "necessary" ];

extend(true, dog, drink );
console.log(dog);

// [ 'drink', 'get water', 'every  day', 'necessary'  ]

// create by Gu-Miao(Kirito) on 2017-11-28
// 我们发现 extend() 方法会将参数数组整合到目标数组上，并且后面的参数数组会覆盖前面的参数数组的相同索引值的数据。
