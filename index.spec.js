'use strict';

//====================================================================

var collectProperty = require('./');

//--------------------------------------------------------------------

var expect = require('chai').expect;
var each = require('lodash.foreach');

//====================================================================

// _(props, [proto])
var _ = function (props, proto) {
  var obj = Object.create(proto || null);

  props && each(props, function (value, name) {
    obj[name] = value;
  });

  return obj;
};

//====================================================================

describe('collectProperty()', function () {
  it('collect own property', function () {
    var obj = _({ foo: 'bar' });

    expect(collectProperty(obj, 'foo')).to.deep.equal(['bar']);
  });

  it('collect all values through the prototype chain', function () {
    var obj = _(
      { foo: 'bar0' },
      _(
        {},
        _({ foo: 'bar2' })
      )
    );

    expect(collectProperty(obj, 'foo')).to.deep.equal(['bar0', 'bar2']);
  });

  it('returns [] with inexistent property', function () {
    var obj = _();

    expect(collectProperty(obj, 'foo')).to.deep.equal([]);
  });
});
