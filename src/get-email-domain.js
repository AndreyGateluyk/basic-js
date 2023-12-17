const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('').reverse();
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === '@') {
      arr.splice(i, arr.length)
    }
  }
  return arr.reverse().join('');
}

module.exports = {
  getEmailDomain
};
