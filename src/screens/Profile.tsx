import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import profilePic from 'assets/img/profile.jpg';
import List, { Accordion } from 'common/components/List';
import Icon from 'common/components/Icon';
import styles from 'common/styles';
import VehicleInfo from 'components/Vehicle/Info';
import History from 'components/Vehicle/History';

const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const data1 = [
    {
      title: 'Profile',
      iconProps: { name: 'person', type: 'octicons' },
      RenderItem: VehicleInfo,
    },
    {
      title: 'Vehicle Info',
      iconProps: { name: 'car-info' },
      RenderItem: null,
    },
    {
      title: 'Payment Plan',
      iconProps: { name: 'ticket-percent' },
      RenderItem: null,
    },
  ];

  const data2 = [
    {
      title: 'History',
      iconProps: { name: 'clipboard-text-clock-outline' },
      renderItem: null,
    },
    {
      title: 'Support',
      iconProps: { name: 'headset', type: 'fontawesome5' },
      renderItem: null,
    },
    {
      title: 'Settings',
      iconProps: { name: 'gear', type: 'fontawesome' },
      renderItem: null,
    },
  ];

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}
        >
          <List>
            <Accordion
              title={data1[0].title}
              iconProps={data1[0].iconProps}
              showSeparator
            />
            <Accordion
              title={data1[1].title}
              iconProps={data1[1].iconProps}
              showSeparator
            >
              <VehicleInfo />
            </Accordion>
            <Accordion
              title={data1[2].title}
              iconProps={data1[2].iconProps}
              showSeparator
            />
          </List>
          <List containerStyle={{ marginTop: 20 }}>
            <Accordion
              title={data2[0].title}
              iconProps={data1[0].iconProps}
              showSeparator
            >
              <History />
            </Accordion>
            <Accordion
              title={data2[1].title}
              iconProps={data2[1].iconProps}
              showSeparator
            />
            <Accordion
              title={data2[2].title}
              iconProps={data2[2].iconProps}
              showSeparator
            />
          </List>
          {/* <List data={data2} /> */}
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

export default ProfileScreen;

const style = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, width: '100%' },
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
  textWrapper: { justifyContent: 'space-evenly', height: '100%' },
  name: { fontWeight: 'bold', fontSize: 20 },
  phone: { fontWeight: 'bold', color: 'rgba(182, 195, 217,1)' },
  footerBanner: {
    width: '100%',
    paddingTop: 30,
    justifyContent: 'space-evenly',
  },
  footerText: { color: 'gray' },
  itemContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingRight: 10,
  },
});
