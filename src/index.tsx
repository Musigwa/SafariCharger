import store from 'container';
import AppNavigator from 'navigation';
import React from 'react';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
