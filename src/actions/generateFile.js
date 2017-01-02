import { GENERATE_FILE } from './const';

function action(parameter) {
  return { type: GENERATE_FILE, parameter };
}

module.exports = action;
