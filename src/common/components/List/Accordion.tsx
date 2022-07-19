import styles from 'common/styles';
import React, { ReactNode, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconType } from '../Icon';
import ListItem from './ListItem';
import Separator from './Separator';

type AccordionType = {
  showSeparator?: boolean;
  children: ReactNode;
  iconProps: IconType;
  title: string;
};

export const Accordion = ({
  showSeparator = true,
  children,
  iconProps,
  title,
}: AccordionType) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={style.itemContainer}>
      <ListItem
        title={title}
        iconProps={iconProps}
        onPress={() => setExpanded(!expanded)}
        expanded={expanded}
      />
      <View style={styles.flexCenter}>{expanded ? children : null}</View>
      {showSeparator ? <Separator /> : null}
    </View>
  );
};

export default Accordion;

const style = StyleSheet.create({
  itemContainer: { width: '100%' },
  childrenContainer: {
    ...styles.flexCenter,
  },
});
