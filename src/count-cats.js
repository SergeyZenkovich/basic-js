const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.flat().reduce((acc, current) => {
    if (current === '^^') {
      acc += 1;
    }
    return acc;
  }, 0);
};
