import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';

const Card = ({
  children,
  containerStyle,
}: {
  children: ReactNode;
  containerStyle?: ViewStyle;
}) => {
  return <View style={[style.container, containerStyle]}>{children}</View>;
};

export default Card;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
});
