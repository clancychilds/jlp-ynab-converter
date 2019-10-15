import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uploadAndParseFile, changeYear } from '../actions/';
import Main from '../components/App';
import ReactGA from 'react-ga';
import FileReaderInput from 'react-file-reader-input';

class FileInput extends Component {
  render() {
    const { actions, handleChange, handleChangeYear } = this.props;
    return <div>
       <FileReaderInput as="binary" id="file-input"
                         onChange={ handleChange }>
       <button>Upload JL Partnership Card Export File...</button>
       </FileReaderInput>
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
        ReactGA.event({
          category: 'File Upload',
          action: 'File Uploaded'
        });
      },
      handleChangeYear: (e) => {
        dispatch(changeYear(e.target.value));
      }
    };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(FileInput);
