import React from 'react';
import FileReaderInput from 'react-file-reader-input';
import FileInput from '../containers/FileInput';
import FileOutput from '../containers/FileOutput';
import StatusDisplay from '../containers/StatusDisplay';
import Introduction from './Introduction';
import './app.css';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div style={{overflow: 'hidden'}}>
        <div style={{float: 'left', width: '50%'}}>
          <Introduction />
        </div>
        <div style={{margin: '10px'}}>
        <FileInput />
        <StatusDisplay />
        <FileOutput />
        </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
