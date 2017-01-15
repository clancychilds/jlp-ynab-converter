/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import changeYear from '../actions/changeYear.js';
import generateFile from '../actions/generateFile.js';
import changeStatus from '../actions/changeStatus.js';
import uploadAndParseFile from '../actions/uploadAndParseFile.js';
const actions = {
  uploadAndParseFile,
  changeStatus,
  generateFile,
  changeYear
};
module.exports = actions;
