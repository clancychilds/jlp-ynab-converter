/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {
  uploadAndParseFile,
  buttonClick,
  changeStatus,
  generateFile,
  changeYear
} from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, inputFile, statusUpdate, outputFile, transactions} = this.props;
    return (
      <Main
        actions={actions}
        inputFile={inputFile}
        statusUpdate={statusUpdate}
        outputFile={outputFile}
        transactions={transactions}/>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  inputFile: PropTypes.object.isRequired,
  statusUpdate: PropTypes.object.isRequired,
  outputFile: PropTypes.object.isRequired,
  transactions: PropTypes.array.isRequired
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    inputFile: state.inputFile,
    statusUpdate: state.statusUpdate,
    outputFile: state.outputFile,
    transactions: state.transactions
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    uploadAndParseFile,
    buttonClick,
    changeStatus,
    generateFile,
    changeYear
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
