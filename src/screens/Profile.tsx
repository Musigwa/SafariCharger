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

const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const data1 = [
    {
      title: 'Profile',
      iconProps: { name: 'person', type: 'octicons' },
    },
    { title: 'Vehicle Info', iconProps: { name: 'car-info' } },
    { title: 'Payment Plan', iconProps: { name: 'ticket-percent' } },
  ];

  const data2 = [
    {
      title: 'History',
      iconProps: { name: 'clipboard-text-clock-outline' },
    },
    {
      title: 'Support',
      iconProps: { name: 'headset', type: 'fontawesome5' },
    },
    { title: 'Settings', iconProps: { name: 'gear', type: 'fontawesome' } },
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
            {data1.map(({ title, iconProps }, i) => (
              <Accordion
                key={i}
                title={title}
                iconProps={iconProps}
                showSeparator={i + 1 < data1.length}
              >
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(rgba(200, 200, 200, 1))',
                    flexDirection: 'row',
                    // flexWrap: 'wrap',
                    // alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}
                >
                  <View
                    style={{ width: '48%', justifyContent: 'space-between' }}
                  >
                    <View
                      style={{
                        backgroundColor: 'white',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: 100,
                        borderRadius: 8,
                        paddingVertical: 6,
                        paddingHorizontal: 8,
                      }}
                    >
                      <Text style={{ fontSize: 16, fontWeight: '600' }}>
                        Tyre Pressure
                      </Text>

                      <View
                        style={{
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="chevron-up" size={20} color="gray" />
                          <Text style={{ fontSize: 12, fontWeight: '700' }}>
                            Tyre 1
                          </Text>
                          <Icon name="chevron-down" size={20} color="gray" />
                        </View>

                        <View>
                          <Text style={{ marginBottom: 2, fontSize: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                              28{'\xa0'}
                            </Text>
                            PSI
                          </Text>
                          <Text style={{ fontSize: 12 }}>Optimum</Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        backgroundColor: 'white',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: 100,
                        borderRadius: 8,
                        paddingVertical: 6,
                        paddingHorizontal: 8,
                      }}
                    >
                      <Text>Total Distance</Text>
                      <View
                        style={[
                          styles.row,
                          { justifyContent: 'space-between' },
                        ]}
                      >
                        <Icon name="route" type="fontawesome5" size={20} />
                        <Text style={{ fontSize: 10 }}>
                          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            365,000{'\xa0'}
                          </Text>
                          Km
                        </Text>
                      </View>
                      <Text>Check mileage</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: 'white',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '45%',
                      height: 220,
                      borderRadius: 10,
                      paddingVertical: 6,
                      paddingHorizontal: 8,
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>
                      Battery Energy
                    </Text>
                    <View
                      style={{
                        flex: 0.8,
                        height: '70%',
                        alignItems: 'center',
                        width: '60%',
                        borderRadius: 15,
                        borderColor: 'rgba(rgba(200, 200, 200, 1))',
                        borderWidth: 0.6,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: 'rgba(248,251,255,1)',
                          flex: 0.2,
                          width: '99%',
                          alignItems: 'center',
                          borderTopEndRadius: 15,
                          borderTopStartRadius: 15,
                        }}
                      />
                      <View
                        style={{
                          flex: 0.8,
                          width: '100%',
                          alignItems: 'center',
                          backgroundColor: 'rgba(42,110,232,1)',
                          borderBottomEndRadius: 10,
                          borderBottomStartRadius: 10,
                          justifyContent: 'center',
                        }}
                      >
                        <Text style={{ fontSize: 16, color: 'white' }}>
                          <Text style={{ fontWeight: 'bold', fontSize: 28 }}>
                            80
                          </Text>
                          %
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row, { justifyContent: 'flex-end' }]}>
                      <Text style={{ fontWeight: '700', fontSize: 13 }}>
                        Saving Mode
                      </Text>
                      <Switch
                        trackColor={{
                          false: 'rgba(200,200,200,1)',
                          true: 'rgba(0,198,122,1)',
                        }}
                        thumbColor={'#f4f3f4'}
                        ios_backgroundColor="#f4f3f4  "
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                  </View>
                </View>
              </Accordion>
            ))}
          </List>
          <List containerStyle={{ marginTop: 20 }}>
            {data2.map(({ title, iconProps }, i) => (
              <Accordion
                key={i}
                title={title}
                iconProps={iconProps}
                showSeparator={i + 1 < data1.length}
              >
                <Text>Items expanded</Text>
              </Accordion>
            ))}
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
