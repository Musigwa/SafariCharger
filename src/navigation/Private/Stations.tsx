import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import constants from '../../constants';

import StationsScreen from 'screens/MapStations';
import StationDetailsScreen from 'screens/StationDetails';

const { routeNames } = constants;
const Stack = createNativeStackNavigator();

const Stations = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen
        name={routeNames.STATIONS}
        component={StationsScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={routeNames.STDETAILS}
        component={StationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default Stations;
