import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import constants from '../../constants';

import ChargeScreen from 'screens/Profile';

const { routeNames } = constants;
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={routeNames.PROFILE} component={ChargeScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
