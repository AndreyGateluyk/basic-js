const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },

  addLink(value) {
  this.result.push(`( ${value} )`);
  return this;
  },

  removeLink(position) {
    if (this.result[position - 1] == undefined) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
      }
    this.result.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },

  finishChain() {
    let result = this.result.join('~~');
    this.result = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
