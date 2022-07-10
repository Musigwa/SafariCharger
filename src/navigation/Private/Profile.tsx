import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import constants from '../../constants';

import ChargeScreen from 'screens/Charge';
import LoginScreen from 'screens/Login';

const { routeNames } = constants;
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={routeNames.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routeNames.PROFILE} component={ChargeScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
