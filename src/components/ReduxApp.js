import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../stores';
import App from '../containers/App';

const store = configureStore();

class ReduxApp extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReduxApp.displayName = 'ReduxApp';
ReduxApp.propTypes = {};
ReduxApp.defaultProps = {};

export default ReduxApp;
