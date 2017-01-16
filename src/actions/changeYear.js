import { CHANGE_YEAR } from './const';

function changeYear(year) {
  return { type: CHANGE_YEAR, year };
}

module.exports = changeYear;
