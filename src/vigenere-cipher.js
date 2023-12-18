const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lettersNumber = {};
function createKeyLetters() {
  for(let i = 0; i < letters.length; i++) {
    lettersNumber[letters[i]] = i;
  }
}
createKeyLetters();

class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool == false ? false : true;
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let strLettersNumber = [];
    for(let i = 0; i < str.length; i++) {
      strLettersNumber.push(lettersNumber[str[i]]);
    };
    strLettersNumber.forEach((item, index) => {
      if(item === undefined) {
        strLettersNumber.splice(index, 1,str[index]);
      }
    });
    let keyLettersNumber = [];
    for(let i = 0; i < strLettersNumber.length; i++) {
      if(typeof strLettersNumber[i] === 'number') {
        keyLettersNumber.push(strLettersNumber[i])
      }
    };
    for(let i = 0; i < keyLettersNumber.length; i++) {
      keyLettersNumber.splice(i, 1, lettersNumber[key[i]]);
      if(key[i] === undefined) {
        keyLettersNumber.splice(i, 1, keyLettersNumber[i - key.length]);
      } 
    };
    for(let i = 0; i < strLettersNumber.length; i++) {
      if(typeof strLettersNumber[i] === 'string') {
        keyLettersNumber.splice(i, 0, strLettersNumber[i]); 
      }
    };
    let numberCipher = []
    for(let i = 0; i < strLettersNumber.length; i++) {
      if(typeof strLettersNumber[i] === 'string') {
        numberCipher.push(strLettersNumber[i]); 
      }
      if(typeof strLettersNumber[i] === 'number') {
        numberCipher.push((strLettersNumber[i] + keyLettersNumber[i]) % letters.length); 
      }
    };
    for(let i = 0; i < numberCipher.length; i++) {
      if(typeof numberCipher[i] === 'string') {
        result.push(numberCipher[i]); 
      }
      if(typeof numberCipher[i] === 'number') {
        result.push(letters[numberCipher[i]]); 
      }
    };
    if(this.bool === false) {
      return result.reverse().join('');
    }
    return result.join('');
  }
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let strLettersNumber = [];
    for(let i = 0; i < str.length; i++) {
      strLettersNumber.push(lettersNumber[str[i]]);
    };
    strLettersNumber.forEach((item, index) => {
      if(item === undefined) {
        strLettersNumber.splice(index, 1,str[index]);
      }
    });
    let keyLettersNumber = [];
    for(let i = 0; i < strLettersNumber.length; i++) {
      if(typeof strLettersNumber[i] === 'number') {
        keyLettersNumber.push(strLettersNumber[i])
      }
    };
    for(let i = 0; i < keyLettersNumber.length; i++) {
      keyLettersNumber.splice(i, 1, lettersNumber[key[i]]);
      if(key[i] === undefined) {
        keyLettersNumber.splice(i, 1, keyLettersNumber[i - key.length]);
      } 
    };
    for(let i = 0; i < strLettersNumber.length; i++) {
      if(typeof strLettersNumber[i] === 'string') {
        keyLettersNumber.splice(i, 0, strLettersNumber[i]); 
      }
    };
    let numberCipher = []
    for(let i = 0; i < strLettersNumber.length; i++) {
      if(typeof strLettersNumber[i] === 'string') {
        numberCipher.push(strLettersNumber[i]); 
      }
      if(typeof strLettersNumber[i] === 'number') {
        numberCipher.push((strLettersNumber[i] - keyLettersNumber[i] + letters.length) % letters.length); 
      }
    };
    for(let i = 0; i < numberCipher.length; i++) {
      if(typeof numberCipher[i] === 'string') {
        result.push(numberCipher[i]); 
      }
      if(typeof numberCipher[i] === 'number') {
        result.push(letters[numberCipher[i]]); 
      }
    };
    if(this.bool === false) {
      return result.reverse().join('');
    }
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
