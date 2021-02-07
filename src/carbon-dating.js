const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNumber = Number.parseFloat(sampleActivity);
  if (isNaN(sampleActivityNumber) || typeof sampleActivity !== 'string' || sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  const RESULT = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);
  return RESULT;
};
