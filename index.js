'use strict';

//====================================================================

var has = Object.prototype.hasOwnProperty;
has = has.call.bind(has);

var proto = Object.getPrototypeOf;

module.exports = function (obj, name) {
  var values = [];

  while (obj) {
    if (has(obj, name)) {
      values.push(obj[name]);
    }
    obj = proto(obj);
  }

  return values;
};
