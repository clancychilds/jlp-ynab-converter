import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {} from '../actions/';
import Main from '../components/App';

class StatusDisplay extends Component {
  render() {
    const { actions } = this.props;
    const { status } = this.props;
    return <div>{ status }</div>;
  }
}

StatusDisplay.propTypes = {
  actions: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return { status: state.statusUpdate.status };
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusDisplay);
