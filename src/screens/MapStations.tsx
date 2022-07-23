import BottomSheet from 'common/components/Card/BottomSheet';
import StationList from 'common/components/Card/StationsList';
import Icon from 'common/components/Icon';
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
import chargers from '../constants/chargers.json';
import swaps from '../constants/swaps.json';
import NewStation from './NewStation';
import StationDetailsScreen from './StationDetails';

type CoordsType = {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
};

type MarkerType = { coordinate: CoordsType; key: string };

const StationsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState<MarkerType>(chargers[0]);

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
  const flex = 0.8;

  const toggleModal = (item: any) => {
    if (item) setSelected(item);
    if (showModal && showAdd) setShowAdd(false);
    setShowModal(!showModal);
  };

  const data = chargers.concat(swaps);

  return (
    <View style={styles.mapContainer}>
      <MapView provider={PROVIDER_DEFAULT} style={styles.map} region={position}>
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
                name="location-arrow"
                type="fontawesome"
                size={25}
                color="white"
              />
            </View>
          </Marker>
        )}
        {data.map(item => {
          // const { latitude, longitude } = item.coordinate;
          const isSwap = item.key?.includes('bar');
          return (
            <Marker
              key={item.key}
              title={item.name}
              coordinate={item.coordinate}
              description={item.connectors.map(i => i.name).join(', ')}
              onCalloutPress={() => toggleModal(item)}
            >
              <View style={style.markerContainer}>
                <Icon
                  name={isSwap ? 'car-battery' : 'ev-station'}
                  type="materialcommunity"
                  size={20}
                  color="white"
                />
              </View>
            </Marker>
          );
        })}
      </MapView>
      <View style={style.headerExtender}>
        <View style={style.inputContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="search" type="feather" color="black" />
          </TouchableOpacity>
          <TextInput
            placeholder="Search charge station"
            clearButtonMode="always"
            style={style.input}
          />
          <TouchableOpacity style={style.iconContainer} activeOpacity={0.7}>
            <Icon name="equalizer" type="fontisto" color="black" size={18} />
          </TouchableOpacity>
        </View>
      </View>
      <StationList data={data} onItemPress={toggleModal} />
      <BottomSheet
        isOpen={showModal}
        flex={flex}
        toggleSheet={toggleModal}
        showAddBtn={showAdd}
        handleAdd={() => setShowAdd(!showAdd)}
      >
        {showAdd ? <NewStation /> : <StationDetailsScreen item={selected} />}
      </BottomSheet>
    </View>
  );
};

export default StationsScreen;

const style = StyleSheet.create({
  posContainer: {
    backgroundColor: 'rgba(37, 196, 12,1)',
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
  iconContainer: {
    borderRadius: 6,
    padding: 4,
  },
  headerExtender: {
    alignSelf: 'flex-start',
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
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
  input: { fontSize: 16, width: '78%', paddingVertical: 10 },
});
