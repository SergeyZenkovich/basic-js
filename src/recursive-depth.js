const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    if (arr.some(elem => Array.isArray(elem))) {
      let newarr = arr.flat();
      return this.calculateDepth(newarr) + depth;
    }
    else return depth;
  }
};