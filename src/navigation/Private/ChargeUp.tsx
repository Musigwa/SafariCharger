import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import constants from '../../constants';

import ChargeScreen from 'screens/Charge';

const { routeNames } = constants;
const Stack = createNativeStackNavigator();

const ChargeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={routeNames.CHARGE} component={ChargeScreen} />
    </Stack.Navigator>
  );
};

export default ChargeStack;
