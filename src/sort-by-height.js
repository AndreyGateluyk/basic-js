const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrOne = [];
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === -1) {
      arrOne.push(i);
    }
  }
  if(arr.length === arrOne.length) {
    return arr;
  }
  const res = arr.sort((a, b) => {
      return a - b;
    }).splice(arrOne.length);
    for(let i = 0; i < res.length; i += 1) {
      for(let j = 0; j < arrOne.length; j += 1) {
        if(i === arrOne[j]) {
        res.splice(i, 0, -1);      
      }
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
