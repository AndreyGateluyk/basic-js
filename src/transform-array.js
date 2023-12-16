const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  const [discardNext, discardPrev, doubleNext, doublePrev] = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  arr.forEach((item, index) => {
    switch (item) {
      case discardNext:
        arr[index + 1] = null;
          break;
      case discardPrev:
        res.pop();
          break;
      case doubleNext:
        res.push(arr[index + 1]);
          break;
      case doublePrev:
        res.push(arr[index - 1]);
          break;
      default:
        res.push(item);
    }
  });
  let result = res.filter(item => !!item);
  return result;
}

module.exports = {
  transform
};
