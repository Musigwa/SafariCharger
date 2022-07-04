import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivateNavigator from './Private';
import PublicNavigator from './Public';
import constants from '../constants';
import { StatusBar } from 'react-native';

const { routeNames } = constants;

const MainStack = createNativeStackNavigator();

const AppNavigator = () => {
  const authenticated = true;
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent backgroundColor="black" />
      <MainStack.Navigator
        screenOptions={{
          headerTitle: 'Safari Charger',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          // headerTitleStyle: {
          //   fontSize: 40,
          // },
          // headerLargeTitle: true,
        }}
      >
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
