import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uploadAndParseFile } from '../actions/';
import Main from '../components/App';

import FileReaderInput from 'react-file-reader-input';

class FileInput extends Component {
  render() {
    const { actions, handleChange } = this.props;
    return <div>
       <FileReaderInput as="binary" id="file-input"
                         onChange={ handleChange } />
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
  const actions = { uploadAndParseFile };
  const actionMap = { actions: bindActionCreators(actions, dispatch),
    handleChange: (e, results) => {
        results.forEach(result => {
          const [e, file] = result;
          dispatch(uploadAndParseFile(file));
          console.log(`Successfully uploaded ${file.name}!`);
        });
      }
    };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(FileInput);
