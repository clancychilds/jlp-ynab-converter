import { CHANGE_STATUS } from './const';

function action(status) {
  return { type: CHANGE_STATUS, status };
}

module.exports = action;
