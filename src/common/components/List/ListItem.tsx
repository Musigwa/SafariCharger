import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon, { IconType } from '../Icon';
import React from 'react';
import styles from 'common/styles';

export type ItemType = {
  title: string;
  iconProps: IconType;
  onPress: () => void;
  expanded?: boolean;
};

export const ListItem = ({
  title,
  expanded = false,
  iconProps,
  onPress,
}: ItemType) => {
  return (
    <TouchableOpacity
      style={style.listItem}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View style={styles.row}>
        <Icon {...iconProps} />
        <Text style={style.itemTitle}>{title}</Text>
      </View>
      <Icon
        name={`chevron-${expanded ? 'down' : 'right'}`}
        type="octicons"
        color="gray"
        size={18}
      />
    </TouchableOpacity>
  );
};

export default ListItem;

const style = StyleSheet.create({
  listItem: { ...styles.rowBetween, padding: 15 },
  itemTitle: { marginLeft: 20 },
});
