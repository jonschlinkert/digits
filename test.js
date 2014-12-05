/*!
 * digits <https://github.com/jonschlinkert/digits>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var longest = require('longest');
var digits = require('./');

describe('digits', function () {
  it('should have the specified number of digits:', function () {
    digits('1').should.eql('1');
    digits('1', 2).should.eql('01');
    digits('1', 10).should.eql('0000000001');
  });

  it('should pad the number to equal the specified length:', function () {
    digits('10', 2).should.eql('10');
    digits('100', 2).should.eql('100');
    digits('100', 4).should.eql('0100');
    digits('100', 5).should.eql('00100');
  });
});

describe('digits.each', function () {
  it('should pad each value to be the length of the longest item in the array:', function () {
    digits.each(['1', '100', '1000']).should.eql(['0001', '0100', '1000']);
    digits.each(['1', '100', '100000']).should.eql(['000001', '000100', '100000']);
  });

  it('should pad each value using the given character:', function () {
    digits.each(['a', 'bb', 'ccc'], ' ').should.eql(['  a', ' bb', 'ccc']);
    digits.each(['a', 'bb', 'ccc'], '~').should.eql(['~~a', '~bb', 'ccc']);
  });
});
