/*!
 * noncharacter-regex <https://github.com/regexps/noncharacter-regex>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var noncharacters = require('noncharacters');

// Keep the generated regex in memory, to prevent
// multiple runtime compilations.
var cache = require('regex-cache');

module.exports = cache(function() {
  return new RegExp('(' + noncharacters.join('|') + ')', 'g');
});
