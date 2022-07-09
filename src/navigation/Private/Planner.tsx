import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import constants from '../../constants';

import StationDetailsScreen from 'screens/StationDetails';
import RouteScreen from 'screens/RoutePlan';

const { routeNames } = constants;
const Stack = createNativeStackNavigator();

const RoutePlanner = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={routeNames.SWAPS} component={RouteScreen} />
      <Stack.Screen
        name={routeNames.STDETAILS}
        component={StationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default RoutePlanner;
