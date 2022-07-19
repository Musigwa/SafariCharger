import theme from 'assets/theme';
import Icon from 'common/components/Icon';
import AppNavigator from 'navigation';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
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
  );
};

export default App;
