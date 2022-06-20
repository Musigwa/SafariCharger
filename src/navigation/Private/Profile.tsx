import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import constants from '../../constants';

import ChargeScreen from 'screens/Charge';

const { routeNames } = constants;
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routeNames.Profile} component={ChargeScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
