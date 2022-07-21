import { View, ViewStyle } from 'react-native';
import React from 'react';
import styles from 'common/styles';

export const Separator = ({ style }: { style?: ViewStyle }) => (
  <View style={[styles.separator, style]} />
);

export default Separator;
