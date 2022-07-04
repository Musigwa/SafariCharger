import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'common/components/Icon';
import React from 'react';
import constants from '../../constants';
import ChargeStack from './ChargeUp';
import ProfileStack from './Profile';
import Stations from './Stations';

const { routeNames } = constants;
const BottomTab = createBottomTabNavigator();

const PrivateNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName, iconType;
          switch (route.name) {
            case routeNames.ST_STACK:
              iconName = 'map';
              iconType = 'feather';
              break;
            case routeNames.SW_STACK:
              iconName = 'motorbike-electric';
              break;
            case routeNames.CH_STACK:
              iconName = 'car-electric';
              break;
            case routeNames.CHG_STACK:
              iconName = 'flash';
              iconType = 'entypo';
              break;
            case routeNames.PR_STACK:
              iconName = 'person';
              iconType = 'octicons';
              break;
            default:
              break;
          }
          return (
            <Icon name={iconName} size={size} color={color} type={iconType} />
          );
        },
        header: () => null,
      })}
    >
      <BottomTab.Screen name={routeNames.ST_STACK} component={Stations} />
      <BottomTab.Screen name={routeNames.CHG_STACK} component={ChargeStack} />
      <BottomTab.Screen name={routeNames.PR_STACK} component={ProfileStack} />
    </BottomTab.Navigator>
  );
};

export default PrivateNavigator;
