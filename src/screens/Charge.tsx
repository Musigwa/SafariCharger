import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from 'common/styles';
import profilePic from 'assets/img/profile.jpg';
import Icon from 'common/components/Icon';

const ChargeScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.topBanner} />
      <View style={style.wrapper}>
        <View style={style.topWrapper}>
          <Image style={style.avatar} source={profilePic} />
          <View style={[style.textWrapper]}>
            <Text style={style.name}>Felix Rubanda</Text>
            <Text style={style.phone}>+250 785 782 928</Text>
          </View>
        </View>
        <ScrollView style={{ width: '100%' }}>
          <View style={style.itemContainer}>
            <View style={style.listItem}>
              <View style={styles.row}>
                <Icon name="person" type="octicons" />
                <Text style={style.itemTitle}>Profile</Text>
              </View>
              <Icon
                name="chevron-right"
                type="octicons"
                color="gray"
                size={18}
              />
            </View>
            <View style={style.itemSeparator} />
            <View style={style.listItem}>
              <View style={styles.row}>
                <Icon name="car-info" />
                <Text style={style.itemTitle}>Vehicle Data</Text>
              </View>
              <Icon
                name="chevron-right"
                type="octicons"
                color="gray"
                size={18}
              />
            </View>
            <View style={style.itemSeparator} />
            <View style={style.listItem}>
              <View style={styles.row}>
                <Icon name="ticket-percent" />
                <Text style={style.itemTitle}>Coupons</Text>
              </View>
              <Icon
                name="chevron-right"
                type="octicons"
                color="gray"
                size={18}
              />
            </View>
          </View>
          <View style={style.itemContainer}>
            <View style={style.listItem}>
              <View style={styles.row}>
                <Icon name="clipboard-text-clock-outline" />
                <Text style={style.itemTitle}>History</Text>
              </View>
              <Icon
                name="chevron-right"
                type="octicons"
                color="gray"
                size={18}
              />
            </View>
            <View style={style.itemSeparator} />
            <View style={style.listItem}>
              <View style={styles.row}>
                <Icon name="headset" type="fontawesome5" />
                <Text style={style.itemTitle}>Support</Text>
              </View>
              <Icon
                name="chevron-right"
                type="octicons"
                color="gray"
                size={18}
              />
            </View>
            <View style={style.itemSeparator} />
            <View style={style.listItem}>
              <View style={styles.row}>
                <Icon name="shield" type="entypo" />
                <Text style={style.itemTitle}>Coupons</Text>
              </View>
              <Icon
                name="chevron-right"
                type="octicons"
                color="gray"
                size={18}
              />
            </View>
          </View>
          <View style={style.footerBanner}>
            <Text style={style.footerText}>Safari Charger</Text>
            <Text style={[style.footerText, { marginVertical: 5 }]}>
              Version 1.0.0
            </Text>
            <Text
              style={style.footerText}
            >{`\u00A9 Feru Energy ${new Date().getFullYear()}`}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ChargeScreen;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  wrapper: { width: '100%', alignItems: 'center', padding: 15, flex: 1 },
  topBanner: { backgroundColor: 'black', height: '12%', width: '100%' },
  topWrapper: {
    width: '100%',
    height: '17%',
    backgroundColor: 'white',
    position: 'relative',
    top: -50,
    padding: 15,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 8,
  },
  avatar: { height: 110, width: 110, borderRadius: 55, marginRight: 25 },
  textWrapper: {
    justifyContent: 'space-evenly',
    height: '100%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  phone: {
    fontWeight: 'bold',
    color: 'rgba(182, 195, 217,1)',
  },
  itemContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    paddingRight: 10,
  },
  listItem: {
    ...styles.rowBetween,
  },
  itemSeparator: {
    backgroundColor: 'rgba(182, 195, 217,1)',
    width: '100%',
    height: StyleSheet.hairlineWidth,
    marginVertical: 15,
  },
  itemTitle: { marginLeft: 20 },
  footerBanner: {
    width: '100%',
    paddingTop: 30,
    justifyContent: 'space-evenly',
  },
  footerText: { color: 'gray' },
});
