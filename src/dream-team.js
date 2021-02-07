const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let secretNameOfTeam = members.reduce((accum, current) => {
    if (typeof current === 'string') {
      return accum += current.trim()[0];
    }
    return accum;
  }, '');
  return secretNameOfTeam.split('').map(elem => elem.toUpperCase()).sort().join('');
};
