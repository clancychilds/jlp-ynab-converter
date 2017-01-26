import React from 'react';
import FileReaderInput from 'react-file-reader-input';
import FileInput from '../containers/FileInput';
import FileOutput from '../containers/FileOutput';
import StatusDisplay from '../containers/StatusDisplay';
import Introduction from './Introduction';
import ReactGA from 'react-ga';
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
  
  componentDidMount() {
    ReactGA.initialize('UA-3126721-7');
    ReactGA.pageview(window.location.pathname);
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
