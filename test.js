/*!
 * noncharacter-regex <https://github.com/regexps/noncharacter-regex>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var re = require('./');

describe('non-character regex', function () {
  it('should match non characters in a string:', function () {
    assert(re.test('\uFFFF') === true);
    assert(re.test('abc\uFFFExyz') === true);
    assert('abc\uFFFExyz'.match(re)[0] === '\uFFFE');
    assert('abc_\uFFFE_xyz'.replace(re, '') === 'abc__xyz');
  });
});
