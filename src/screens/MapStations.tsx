import styles from 'common/styles';
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import StationList from 'common/components/Cards/StationsList';
import Icon from 'common/components/Icon';
import stations from '../constants/coords.json';

type CoordsType = {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
};

type MarkerType = {
  coordinate: CoordsType;
  key: string;
};

const StationsScreen = () => {
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

  const [position] = useState(initialRegion);
  const [markers] = useState<MarkerType[]>(stations);

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_DEFAULT}
        // provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={position}
        // onPress={onMapPress}
      >
        {position && (
          <Marker
            title="Our current location"
            description={`${position.latitude.toFixed(
              2,
            )}, ${position.longitude.toFixed(2)}`}
            coordinate={position}
            key={position.latitude.toString()}
          >
            <View style={style.posContainer}>
              <Icon
                name={'location-arrow'}
                type="fontawesome"
                size={25}
                color="white"
              />
            </View>
          </Marker>
        )}
        {markers.map(({ coordinate, key }, id) => {
          const { latitude, longitude } = coordinate;
          return (
            <Marker
              key={key}
              title={key}
              coordinate={coordinate}
              description={`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`}
            >
              <View style={style.markerContainer}>
                <Icon
                  name={id % 2 ? 'ev-station' : 'car-battery'}
                  type="materialcommunity"
                  size={20}
                  color="white"
                />
              </View>
            </Marker>
          );
        })}
      </MapView>
      <StationList data={stations} />
      <View style={style.headerExtender}>
        <View style={style.inputContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="search" type="evilicon" color="black" size={30} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search charge station"
            clearButtonMode="always"
            style={style.input}
          />
          <TouchableOpacity style={style.iconContainer} activeOpacity={0.7}>
            <Icon name="equalizer" type="fontisto" color="white" size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={style.iconContainer} activeOpacity={0.7}>
            <Icon
              name="tripadvisor"
              type="fontawesome"
              color="white"
              size={18}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StationsScreen;

const style = StyleSheet.create({
  posContainer: {
    backgroundColor: 'rgba(37, 196, 104,1)',
    ...styles.center,
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  markerContainer: {
    backgroundColor: 'black',
    ...styles.center,
    borderRadius: 50,
    padding: 8,
  },
  iconContainer: { backgroundColor: 'black', borderRadius: 6, padding: 4 },
  headerExtender: {
    alignSelf: 'flex-start',
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  inputContainer: {
    position: 'relative',
    ...styles.rowBetween,
    bottom: -25,
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  input: { fontSize: 16, width: '65%', paddingVertical: 10 },
});
