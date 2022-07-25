import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from 'screens/Login';
import OnboardingScreen from 'screens/Onboarding';
import SingupScreen from 'screens/Singup';
import constants from '../../constants';

const { routeNames } = constants;
const PublicStack = createNativeStackNavigator();

const PublicNavigator = () => {
  return (
    <PublicStack.Navigator screenOptions={{ header: () => null }}>
      <PublicStack.Screen
        name={routeNames.ONBOARDING}
        component={OnboardingScreen}
      />
      <PublicStack.Screen name={routeNames.SINGUP} component={SingupScreen} />
      <PublicStack.Screen name={routeNames.LOGIN} component={LoginScreen} />
    </PublicStack.Navigator>
  );
};

export default PublicNavigator;
