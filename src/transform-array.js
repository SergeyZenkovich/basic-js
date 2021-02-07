const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error();
  }
  const tranformedArr = [];
  const arrLen = arr.length;

  for (var i = 0; i < arrLen; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (tranformedArr.length !== 0 && arr[i - 2] !== '--discard-next') {
          tranformedArr.pop();
        }
        break;
      case "--double-next":
        if (i !== arr.length - 1) {
          tranformedArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (tranformedArr.length !== 0 && arr[i - 2] !== '--discard-next') {
          tranformedArr.push(arr[i - 1])
        }
        break;
      default:
        tranformedArr.push(arr[i])
        break;
    }
  }
  return tranformedArr;

};
