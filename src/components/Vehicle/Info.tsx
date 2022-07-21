import Icon from 'common/components/Icon';
import styles from 'common/styles';
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

const VehicleInfo = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
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
      <View style={{ width: '48%', justifyContent: 'space-between' }}>
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
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Tyre Pressure</Text>

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
              <Icon
                name="chevron-up"
                size={20}
                color="gray"
                style={{ borderRadius: 20 }}
                onPress={() => {
                  console.log('The icon is pressed');
                }}
              />
              <Text style={{ fontSize: 12, fontWeight: '700' }}>
                Tyre <Text style={{ color: 'rgba(37, 196, 12,1)' }}>(FL)</Text>
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
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
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
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Battery Energy</Text>
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
              <Text style={{ fontWeight: 'bold', fontSize: 28 }}>80</Text>%
            </Text>
          </View>
        </View>
        <View style={[styles.row, { justifyContent: 'flex-end' }]}>
          <Text style={{ fontWeight: '700', fontSize: 13 }}>Saving Mode</Text>
          <Switch
            trackColor={{
              false: 'rgba(200,200,200,1)',
              true: 'rgba(37, 196, 12,1)',
            }}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#f4f3f4  "
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default VehicleInfo;
