const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for(let i = 0; i < domains.length; i += 1) {
    let strKey = '';
    let arr = domains[i].split('.').reverse();
    for(let j = 0; j < arr.length; j += 1) {
      strKey += `.${arr[j]}`
      if (result[strKey] != null) {
        result[strKey] += 1;
      } 
      else {
        result[strKey] = 1;
      }      
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
