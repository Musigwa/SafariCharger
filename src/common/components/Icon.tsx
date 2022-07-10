import React from 'react';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const getIconType = (type?: string) => {
  switch (type?.toLowerCase()) {
    case 'fontisto':
      return Fontisto;
    case 'zocial':
      return ZocialIcon;
    case 'octicons':
      return OcticonIcon;
    case 'material':
      return MaterialIcon;
    case 'materialcommunity':
      return MaterialCommunityIcon;
    case 'ionicon':
      return Ionicon;
    case 'foundation':
      return FoundationIcon;
    case 'evilicon':
      return EvilIcon;
    case 'entypo':
      return EntypoIcon;
    case 'fontawesome':
      return FAIcon;
    case 'fontawesome5':
      return FAIcon5;
    case 'simplelineicon':
      return SimpleLineIcon;
    case 'antdesign':
      return AntDesign;
    case 'feather':
      return Feather;
    default:
      return MaterialCommunityIcon;
  }
};

type IconType = {
  name?: string;
  size?: number;
  color: string | number;
  type?: string;
};

export const Icon = (props: IconType & any) => {
  const {
    size = 25,
    name = 'exclamation',
    type = 'materialcommunity',
    ...rest
  } = props;
  const FontIcon = getIconType(type);
  return <FontIcon size={size} name={name} {...rest} />;
};

export default Icon;
