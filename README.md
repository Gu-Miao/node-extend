[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]

# extend() README 文档的翻译 <sup>[![Version Badge][npm-version-png]][npm-url]</sup>

`node-extend` node-extend 是关于 jQuery 中的经典方法 extend() 的拓展，非常简便和实用。

注意：

* 从 Node.js 4版本以后，
  [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  现在可以提供和原来相同的功能了（但没有深拷贝选项）。详见
  [ECMAScript 2015 (ES6) in Node.js](https://nodejs.org/en/docs/es6)。
* Node.js和许多浏览器对于 `Object.assign` 的一些本地实现（自从浏览器也可以使用npm包）可能不完全符合规范。合理选择符合 [`object.assign`](https://www.npmjs.com/package/object.assign) 的可用模块。

## 安装

``` sh
npm install extend
```

## 用法

**语法:** extend **(** [`deep`], `target`, `object1`, [`objectN`] **)**

*用一个或多个对象扩展一个对象，返回修改过的对象。*

**例子:**

``` js
var extend = require('extend');
extend(targetObject, object1, object2);
```

记住目标对象将被修改，并将返回extend()。

如果将 true 指定为第一个参数，则扩展执行深拷贝，递归地复制它遍历到的所有对象。否则，复制体将与原始对象共享结构。
未定义属性不被复制。但是，从对象原型继承的属性将被复制。
警告：不支持传递第一个参数为 false。

### Arguments

* `deep` *Boolean* (optional)
If set, the merge becomes recursive (i.e. deep copy).
* `target`	*Object*
The object to extend.
* `object1`	*Object*
The object that will be merged into the first.
* `objectN` *Object* (Optional)
More objects to merge into the first.

## License

`node-extend` is licensed under the [MIT License][mit-license-url].

## Acknowledgements

All credit to the jQuery authors for perfecting this amazing utility.

Ported to Node.js by [Stefan Thomas][github-justmoon] with contributions by [Jonathan Buchanan][github-insin] and [Jordan Harband][github-ljharb].

[travis-svg]: https://travis-ci.org/justmoon/node-extend.svg
[travis-url]: https://travis-ci.org/justmoon/node-extend
[npm-url]: https://npmjs.org/package/extend
[mit-license-url]: http://opensource.org/licenses/MIT
[github-justmoon]: https://github.com/justmoon
[github-insin]: https://github.com/insin
[github-ljharb]: https://github.com/ljharb
[npm-version-png]: http://versionbadg.es/justmoon/node-extend.svg
[deps-svg]: https://david-dm.org/justmoon/node-extend.svg
[deps-url]: https://david-dm.org/justmoon/node-extend
[dev-deps-svg]: https://david-dm.org/justmoon/node-extend/dev-status.svg
[dev-deps-url]: https://david-dm.org/justmoon/node-extend#info=devDependencies
