const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  else if (!(date instanceof Date)) {
    throw Error();
  }
  else if (date.hasOwnProperty('getMonth') === true) {
    throw Error();
  }
  else {
    const month = date.getMonth();
    if (month >= 2 && month < 5) {
      return 'spring'
    }
    else if (month >= 5 && month < 8) {
      return 'summer'
    }
    if (month >= 8 && month < 11) {
      return 'fall'
    }
    return 'winter';
  }
};
