import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import styles from 'common/styles';
import Icon from 'common/components/Icon';

const NewStation = () => {
  const { height, width } = useWindowDimensions();
  const ASPECT_RATIO = width / height;
  const initialRegion = {
    latitude: -1.94708912869,
    longitude: 30.061088171,
    latitudeDelta: 0.0922,
    get longitudeDelta() {
      return this.latitudeDelta * ASPECT_RATIO;
    },
  };
  const data = [
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
    'ev-plug-type1',
  ];

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={[{ borderRadius: 10, height: 200 }]}
        region={initialRegion}
      >
        <Marker
          title="Our current location"
          description={`${initialRegion.latitude.toFixed(
            2,
          )}, ${initialRegion.longitude.toFixed(2)}`}
          coordinate={initialRegion}
          key={initialRegion.latitude.toString()}
        >
          <View style={style.posContainer}>
            <Icon
              name="location-arrow"
              type="fontawesome"
              size={25}
              color="white"
            />
          </View>
        </Marker>
      </MapView>
      <View>
        <Text style={{ color: 'gray', fontSize: 16, lineHeight: 40 }}>
          Name:{'\u2003\u2003'}
          <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>
            Feru Charging Station
          </Text>
          {'\u2003'}
          <Icon name="edit" type="antdesign" color="black" />
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'gray', fontSize: 16 }}>
            Address:{'\u2003'}
          </Text>
          <View>
            <Text style={{ color: 'gray', fontSize: 16 }}>
              KK 549 St, Kicukiro
            </Text>
            <Text style={{ color: 'rgba(177, 180, 186,1)', fontSize: 14 }}>
              3 Charger point
            </Text>
          </View>
        </View>
      </View>
      <Text>Socket Types</Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {Array.from({ length: 50 }, () => (
          <Text>Musigwa</Text>
        ))}
      </ScrollView>
      {/* <FlatList
        style={{ flex: 1, flexGrow: 1 }}
        contentContainerStyle={{ backgroundColor: 'gray' }}
        data={data}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => String(index)}
      /> */}
    </View>
  );
};

export default NewStation;

const style = StyleSheet.create({
  posContainer: {
    backgroundColor: 'rgba(37, 196, 12,1)',
    ...styles.center,
    borderRadius: 20,
    height: 40,
    width: 40,
  },
});
