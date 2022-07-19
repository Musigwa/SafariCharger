import theme from 'assets/theme';
import Icon from 'common/components/Icon';
import store from 'container';
import AppNavigator from 'navigation';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider
        theme={theme}
        settings={{
          icon: props => {
            console.log('This is it ==>', props);
            return <Icon {...props} />;
          },
        }}
      >
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
