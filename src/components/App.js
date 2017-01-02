import React from 'react';
import FileReaderInput from 'react-file-reader-input';
import FileInput from '../containers/FileInput'
import FileOutput from '../containers/FileOutput'
import StatusDisplay from '../containers/StatusDisplay'
import './app.css';

class AppComponent extends React.Component {
  handleChange(e, results) {
      results.forEach(result => {
        const [e, file] = result;
        this.props.actions.uploadFile(file);
        console.log('Successfully uploaded ${file.name}!');
      });
    }
  
    handleClick(e) {
      this.props.actions.buttonClick();
      console.log('Button Clicked');
    }
    
  render() {
    return (
      <div className="index">
        <FileInput />
        <StatusDisplay />
        <FileOutput />
        { /* <FileReaderInput as="binary" id="my-file-input"
      onChange={this.handleChange} /> 
      <button onClick={ this.props.actions.buttonClick }>Click This</button> */ }
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
