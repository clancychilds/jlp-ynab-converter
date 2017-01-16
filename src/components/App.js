import React from 'react';
import FileReaderInput from 'react-file-reader-input';
import FileInput from '../containers/FileInput'
import FileOutput from '../containers/FileOutput'
import StatusDisplay from '../containers/StatusDisplay'
import './app.css';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <FileInput />
        <StatusDisplay />
        <FileOutput />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
