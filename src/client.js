import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ReduxApp from './components/ReduxApp';

ReactDOM.render(
  <AppContainer>
    <ReduxApp />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/ReduxApp', () => {
    const NextApp = require('./components/ReduxApp').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
