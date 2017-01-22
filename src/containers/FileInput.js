import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uploadAndParseFile, changeYear } from '../actions/';
import Main from '../components/App';

import FileReaderInput from 'react-file-reader-input';

class FileInput extends Component {
  render() {
    const { actions, handleChange, handleChangeYear } = this.props;
    return <div>
       <FileReaderInput as="binary" id="file-input"
                         onChange={ handleChange }>
       <button>Select JL Partnership Card Export File...</button>
       </FileReaderInput>
       <label>
    Transaction Year:&nbsp;
          <input type="text" name="transactionYear" size='4'
            defaultValue={new Date().getFullYear()}
            onChange={ handleChangeYear }/>
       </label>
    </div>;
  }
}

FileInput.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { uploadAndParseFile, changeYear };
  const actionMap = { actions: bindActionCreators(actions, dispatch),
    handleChange: (e, results) => {
        results.forEach(result => {
          const [e, file] = result;
          dispatch(uploadAndParseFile(file));
        });
      },
      handleChangeYear: (e) => {
        dispatch(changeYear(e.target.value));
      }
    };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(FileInput);
