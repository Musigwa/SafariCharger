import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import styles from 'common/styles';
import Icon from 'common/components/Icon';

const NewStation = () => {
  const [quantity, setQuantity] = useState(1);
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
      <View
        style={{
          padding: 10,
          ...styles.center,
          ...styles.row,
        }}
      >
        <TouchableOpacity
          onPress={() => setQuantity(quantity - 1)}
          style={{
            overflow: 'hidden',
            paddingLeft: 2,
            width: 15,
            height: 30,
            borderTopLeftRadius: 150,
            borderBottomLeftRadius: 150,
            backgroundColor: 'black',
            ...styles.center,
          }}
        >
          <Icon name="minus" color="white" size={15} />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'black',
            borderRadius: 10,
            height: 90,
            width: 90,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 6,
          }}
        >
          <View
            style={{ padding: 2, backgroundColor: 'white', borderRadius: 5 }}
          >
            <Icon name="ev-plug-type1" size={35} />
          </View>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: '700' }}>
            CHAdeMO
          </Text>
          {quantity > 1 ? (
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '700' }}>
              (x{quantity})
            </Text>
          ) : null}
        </View>
        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={{
            overflow: 'hidden',
            width: 15,
            height: 30,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            backgroundColor: 'black',
            ...styles.center,
          }}
        >
          <Icon
            name="plus"
            color="white"
            size={15}
            style={{ fontWeight: '700', paddingRight: 5 }}
          />
        </TouchableOpacity>
      </View>
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
