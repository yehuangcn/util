const each = require('../each');
const toArray = require('../toArray');
const uniq = require('./uniq');

const union = function() {
  let result = [];
  const sources = toArray(arguments);
  each(sources, arr => {
    result = result.concat(arr);
  });
  return uniq(result);
};

module.exports = union;
