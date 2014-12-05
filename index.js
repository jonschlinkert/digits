/**
 * digits <https://github.com/jonschlinkert/digits>
 *
 * Copyright (c) 2013-2015 Jon Schlinkert
 * Licensed under the MIT License (MIT)
 */

'use strict';

var pad = require('pad-left');
var longest = require('longest');

/**
 * Expose `digits`
 */

module.exports = digits;

/**
 * Left pad the given `value` with the specified `number` of zeros
 * or alternate `character`.
 *
 * ```js
 * digits('abc', 10);
 * //=> '0000000000abc'
 *
 * digits('abc', 10, '~');
 * //=> '~~~~~~~~~~abc'
 * ```
 *
 * @param {String} `value`
 * @param {String} `number`
 * @return {String} `character`
 * @api public
 */

function digits(val, num, ch) {
  return pad(val, num - val.length, ch);
}

/**
 * Pad left pad each value in the given `array` to align with the
 * longest item/number in the array. Zeros are used by default, but
 * a custom `character` can be passed as the second argument.
 *
 * **Example**
 *
 * ```js
 * digits.each([1, 100, 1000])
 * //=> ['0001', '0100', '1000']
 *
 * digits.each([a, bb, ccc], ' ')
 * //=> ['  a', ' bb', 'ccc']
 * ```
 *
 * @param {Number} `arr` The array of values to pad.
 * @param {Number} `len` Amount to pad the number.
 * @return {String} Padded number
 * @api public
 */

digits.each = function(arr, ch) {
  var len = longest(arr).length;

  return arr.map(function(ele) {
    return digits(ele, len, ch);
  });
};

/**
 * Strip leading digits from a string
 *
 * ```js
 * digits.stripleft('010foo.md');
 * // => "foo.md"
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 */

digits.stripleft = function(str) {
  return str.replace(/^\d+\-?/g, '');
};

/**
 * Strip trailing digits from a string
 *
 * ```js
 * digits.stripright('bar010.md');
 * // => "bar.md"
 * ```
 * @param  {String} `str`
 * @return {String}
 */

digits.stripright = function(str) {
  return str.replace(/\-?\d+$/g, '');
};

/**
 * Count digits on the left side of a string
 *
 * ```js
 * digits.countleft('001-foo.md');
 * //=> 3
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 */

digits.countleft = function(str) {
  return String(str.match(/^\d+/g)).length;
};

/**
 * Count digits on the right side of a string
 *
 * ```js
 * digits.countleft('foo-001.md');
 * //=> 3
 * ```
 * @param  {String} `str`
 * @return {String}
 */

digits.countright = function(str) {
  return String(str.match(/\d+$/g)).length;
};
