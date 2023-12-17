const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if(matrix.length === 1) {
    return 0
  }
  let reverseMatrix = new Array(matrix[1].length)
  for(let i = 0; i < reverseMatrix.length; i += 1) {
    reverseMatrix[i] = [];
  }
  for(let i = 0; i < matrix[1].length; i += 1) {
    for(let j = 0; j < matrix.length; j += 1) {
      reverseMatrix[i].push(matrix[j][i])
    }
  }
  let count = 0;
  for(let i = 0; i < reverseMatrix.length; i += 1) {
    for(let j = 0; j < reverseMatrix[i].length; j += 1) {
      if(reverseMatrix[i][j] === 0) {
        break;
      }
      else {
        count += reverseMatrix[i][j];
      }
    }
  }
  return count
}

module.exports = {
  getMatrixElementsSum
};
