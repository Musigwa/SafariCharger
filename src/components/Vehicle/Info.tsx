import Icon from 'common/components/Icon';
import styles from 'common/styles';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

const tyrePressure = { FL: 23, FR: 26, RL: 28, RR: 25 };

const VehicleInfo = () => {
  const [presIndex, setPresIndex] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const batteryLevel = 100;
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handlePrev = () => {
    if (presIndex > 0) setPresIndex(presIndex - 1);
  };
  const handleNext = () => {
    if (presIndex < Object.keys(tyrePressure).length - 1)
      setPresIndex(presIndex + 1);
  };

  return (
    <View style={style.container}>
      <View style={{ width: '48%', justifyContent: 'space-between' }}>
        <View style={style.presCont}>
          <Text style={style.presTitle}>Tyre Pressure</Text>

          <View style={styles.rowBetween}>
            <View style={styles.center}>
              <Icon
                name="chevron-up"
                size={20}
                color="gray"
                onPress={handleNext}
              />
              <Text style={{ fontSize: 12, fontWeight: '700' }}>
                Tyre{'\xa0'}
                <Text style={{ color: 'rgba(37, 196, 12,1)' }}>
                  ({Object.keys(tyrePressure)[presIndex]})
                </Text>
              </Text>
              <Icon
                name="chevron-down"
                size={20}
                color="gray"
                onPress={handlePrev}
              />
            </View>

            <View>
              <Text style={{ marginBottom: 2, fontSize: 10 }}>
                <Text style={style.smallText}>
                  {`${Object.values(tyrePressure)[presIndex]}\xa0`}
                </Text>
                PSI
              </Text>
              <Text style={{ fontSize: 12 }}>Optimum</Text>
            </View>
          </View>
        </View>
        <View style={style.distContainer}>
          <Text style={style.presTitle}>Total Distance</Text>
          <View style={[styles.rowBetween]}>
            <Icon name="route" type="fontawesome5" size={20} />
            <Text style={{ fontSize: 10 }}>
              <Text style={style.smallText}>365,000{'\xa0'}</Text>
              Km
            </Text>
          </View>
          <Text>Check mileage</Text>
        </View>
      </View>
      <View style={style.batContainer}>
        <Text style={style.presTitle}>Battery Energy</Text>
        <View style={style.cellContainer}>
          {batteryLevel < 50 ? (
            <Text
              style={{
                fontSize: 16,
                color: isEnabled ? 'rgba(37,196,12,1)' : 'rgba(42,110,232,1)',
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 28 }}>
                {batteryLevel}
              </Text>
              %
            </Text>
          ) : null}
          <View
            style={[
              style.level,
              {
                flex: batteryLevel / 100,
                backgroundColor: isEnabled
                  ? 'rgba(37,196,12,1)'
                  : 'rgba(42,110,232,1)',
                borderRadius: batteryLevel === 100 ? 15 : 0,
              },
            ]}
          >
            {batteryLevel >= 50 ? (
              <Text style={{ fontSize: 16, color: 'white' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 28 }}>
                  {batteryLevel}
                </Text>
                %
              </Text>
            ) : null}
          </View>
        </View>
        <View style={[styles.rowBetween]}>
          <Text style={{ fontWeight: '700', fontSize: 13 }}>Eco Mode</Text>
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

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(200, 200, 200, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  presCont: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  presTitle: { fontSize: 14, fontWeight: '600' },
  smallText: { fontWeight: 'bold', fontSize: 15 },
  distContainer: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  batContainer: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: '45%',
    height: 220,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  cellContainer: {
    height: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    width: '60%',
    borderRadius: 15,
    borderColor: 'rgba(200, 200, 200, 1))',
    borderWidth: 0.6,
  },
  level: {
    width: '102%',
    alignItems: 'center',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    justifyContent: 'center',
  },
});
