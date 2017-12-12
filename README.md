# node-extend
读代码大作业之 node-extend: https://gu-miao.github.io/node-extend/

## 安装

``` sh
npm install extend
```

## 用法

**语法：** extend **(** [`deep`], `target`, `object1`, [`objectN`] **)**

*用一个或多个对象扩展一个对象，返回修改过的对象。*

**例子：**

``` js
var extend = require('extend');
extend(targetObject, object1, object2);
```

记住目标对象将被修改，并将返回extend()。

如果将 true 指定为第一个参数，则扩展执行深拷贝，递归地复制它遍历到的所有对象。否则，复制体将与原始对象共享结构。  
未定义属性不被复制。但是，从对象原型继承的属性将被复制。  
警告：不支持传递第一个参数为 false。

### Arguments

* `deep` *布尔类型* （可选参数）
设置函数是否为深拷贝
* `target`	*对象类型*
要扩展的对象
* `object1`	*对象类型*
该对象会被合并到第一个对象中
* `objectN` *对象类型* （可选参数）
这些对象会被合并到第一个对象中

