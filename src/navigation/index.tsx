import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivateNavigator from './Private';
import PublicNavigator from './Public';
import constants from '../constants';

const { routeNames } = constants;

const MainStack = createNativeStackNavigator();

const AppNavigator = () => {
  const authenticated = true;
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {authenticated ? (
          <MainStack.Screen
            name={routeNames.PRIVATE}
            component={PrivateNavigator}
            options={{ header: () => null }}
          />
        ) : (
          <MainStack.Screen
            name={routeNames.PUBLIC}
            component={PublicNavigator}
            options={{ header: () => null }}
          />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
