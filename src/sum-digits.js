const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  let count = 0;
  const arr = String(number).split('');
  arr.forEach((item) => {
    count += Number(item);
  });
  if(count <= 9) {
  return count;
  }
  else {
    let result = 0;
    String(count).split('').forEach((item) => {
    result += Number(item);
  });
    return result;
  }
}

module.exports = {
  getSumOfDigits
};
