const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = str + '';
  let { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options
  let additionFullToString = '';

  if (additionRepeatTimes > 1 && addition !== undefined) {
    additionFullToString = clue(addition, additionSeparator, additionRepeatTimes);
  }
  else if (addition) {
    additionFullToString = addition;
  }
  if (repeatTimes) {
    string = clue(string, separator, repeatTimes, additionFullToString);
  }
  else {
    string = string + additionFullToString;
  }
  return string;
};
function clue(str, sep, times, add = '') {
  str = str + add + sep;
  str = str.repeat(times);
  str = str.slice(0, str.length - sep.length);
  return str;
}

