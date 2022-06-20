import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import constants from '../../constants';
import OnboardingScreen from 'screens/Onboarding';
import LoginScreen from 'screens/Login';
import SingupScreen from 'screens/Singup';

const { routeNames } = constants;

const PublicStack = createNativeStackNavigator();

const PublicNavigator = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        name={routeNames.ONBOARDING}
        component={OnboardingScreen}
      />
      <PublicStack.Screen name={routeNames.LOGIN} component={LoginScreen} />
      <PublicStack.Screen name={routeNames.SINGUP} component={SingupScreen} />
    </PublicStack.Navigator>
  );
};

export default PublicNavigator;
