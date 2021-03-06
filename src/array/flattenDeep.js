const isArray = require('../type/isArray');

/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @param {Array} result The array to return.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);  // => [1, 2, 3, 4, 5]
 */
const flattenDeep = function(arr, result = []) {
  if (!isArray(arr)) {
    result.push(arr);
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], result);
    }
  }
  return result;
};

module.exports = flattenDeep;
