import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import styles from 'common/styles';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

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
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    get longitudeDelta() {
      return this.latitudeDelta * ASPECT_RATIO;
    },
  };
  const [region] = useState(initialRegion);
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [id, setId] = useState(0);

  const onMapPress = ({ nativeEvent }: any) => {
    setId(id + 1);
    setMarkers([
      ...markers,
      { coordinate: nativeEvent.coordinate, key: `foo${id}` },
    ]);
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={region}
        onPress={onMapPress}>
        {markers.map(marker => (
          <Marker
            title={marker.key}
            // image={flagPinkImg}
            key={marker.key}
            coordinate={marker.coordinate}
          />
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setMarkers([])}
          style={styles.mapBubble}>
          <Text>Tap map to create a marker of random color</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StationsScreen;
