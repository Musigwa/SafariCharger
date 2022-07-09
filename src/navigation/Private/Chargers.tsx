import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import constants from '../../constants';

import StationDetailsScreen from 'screens/StationDetails';
import SwapsScreen from 'screens/RoutePlan';

const { routeNames } = constants;
const Stack = createNativeStackNavigator();

const ChargeStation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={routeNames.CHARGERS} component={SwapsScreen} />
      <Stack.Screen
        name={routeNames.STDETAILS}
        component={StationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default ChargeStation;
