import { View, StyleSheet, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
export { Accordion } from './Accordion';
export { ListItem } from './ListItem';
export { Separator } from './Separator';

const List = ({
  children,
  containerStyle,
}: {
  children: ReactNode;
  containerStyle?: ViewStyle;
}) => {
  return <View style={[style.listContainer, containerStyle]}>{children}</View>;
};

export default List;

const style = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    // paddingHorizontal: 8,
    width: '100%',
    borderRadius: 5,
  },
});
