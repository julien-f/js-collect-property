# collect-property

[![Build Status](https://img.shields.io/travis/julien-f/js-collect-property/master.svg)](http://travis-ci.org/julien-f/js-collect-property)
[![Dependency Status](https://david-dm.org/julien-f/js-collect-property/status.svg?theme=shields.io)](https://david-dm.org/julien-f/js-collect-property)
[![devDependency Status](https://david-dm.org/julien-f/js-collect-property/dev-status.svg?theme=shields.io)](https://david-dm.org/julien-f/js-collect-property#info=devDependencies)

> Collect property over prototype chain.


## Install

Download [manually](https://github.com/julien-f/js-collect-property/releases) or with package-manager.

#### [npm](https://npmjs.org/package/collect-property)

```
npm install --save collect-property
```
## Example

```javascript
var collectProperty = require('collect-property');

// Define constructors with following hierarchy: C -> B -> A
var A = function () {
  this.prop = 'foo';
};
var B = function () {
  this.prop = 'bar';
};
B.prototype = new A();
var C = function () {
  this.prop = 'baz';
};
C.prototype = new B();

// Create an instance.
var o = new C();

// Collect all values for the `prop` property.
var values = collectProperty(o, 'prop');
// → ['foo', 'bar', 'baz']
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/js-collect-property/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
