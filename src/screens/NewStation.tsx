import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import styles from 'common/styles';
import Icon from 'common/components/Icon';

const NewStation = () => {
  const [quantity, setQuantity] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(2);
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

  const handleSelect = (id: number) => {
    const uncheck = selected === id;
    setSelected(uncheck ? null : id);
    setQuantity(Number(!uncheck));
  };

  return (
    <View style={styles.flexBetween}>
      <View>
        <MapView
          provider={PROVIDER_DEFAULT}
          style={[style.map]}
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
        <View style={style.addPhoto}>
          <Icon name="camera" type="feather" color="white" />
        </View>
      </View>
      <View>
        <Text style={[style.text, { lineHeight: 40 }]}>
          Name:{'\u2003\u2003'}
          <Text style={style.heavyText}>Feru Charging Station</Text>
          {'\u2003'}
          <Icon name="edit" type="antdesign" color="black" />
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={style.text}>Address:{'\u2003'}</Text>
          <View>
            <Text style={style.text}>KK 549 St, Kicukiro</Text>
            <Text style={{ color: 'rgba(177, 180, 186,1)', fontSize: 14 }}>
              3 Charger point
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={style.heavyText}>Socket Types</Text>
        <ScrollView
          horizontal
          style={{ marginVertical: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {[
            'ev-plug-ccs1',
            'ev-plug-ccs2',
            'ev-plug-chademo',
            'ev-plug-tesla',
            'ev-plug-type1',
            'ev-plug-type2',
          ].map((plug, id) => {
            const checkSelected = selected === id;
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={id}
                style={[
                  styles.row,
                  style.plugContainer,
                  {
                    justifyContent: checkSelected ? 'space-between' : 'center',
                    backgroundColor: checkSelected
                      ? 'black'
                      : 'rgba(248,248,248,1)',
                  },
                ]}
                onPress={() => handleSelect(id)}
              >
                {checkSelected ? (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => setQuantity(quantity - 1)}
                    style={[
                      styles.center,
                      style.minusBtn,
                      { backgroundColor: 'white' },
                    ]}
                  >
                    <Icon name="minus" type="entypo" color="black" size={18} />
                  </TouchableOpacity>
                ) : null}
                <View style={[style.plugWrapper]}>
                  <View style={style.plugIconContainer}>
                    <Icon name={plug} size={35} color="gray" />
                  </View>
                  <Text
                    style={[
                      style.plugName,
                      { color: checkSelected ? 'white' : 'black' },
                    ]}
                  >
                    {plug.split('-')[2].toUpperCase()}
                  </Text>
                  {quantity > 1 ? (
                    <Text
                      style={[
                        style.plugName,
                        { color: checkSelected ? 'white' : 'black' },
                      ]}
                    >
                      (x{quantity})
                    </Text>
                  ) : null}
                </View>
                {checkSelected ? (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => setQuantity(quantity + 1)}
                    style={[styles.center, style.plusBtn]}
                  >
                    <Icon name="plus" type="entypo" color="black" size={18} />
                  </TouchableOpacity>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.center, style.addBtn]}
      >
        <Text style={style.btnText}>Add Station</Text>
      </TouchableOpacity>
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
  map: { borderRadius: 10, height: 200 },
  text: { color: 'gray', fontSize: 16 },
  get heavyText() {
    return { ...this.text, color: 'black', fontWeight: 'bold' };
  },
  addBtn: {
    backgroundColor: 'black',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderRadius: 30,
  },
  btnText: { color: 'white', fontWeight: 'bold' },
  plusBtn: {
    overflow: 'hidden',
    width: 15,
    height: 30,
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 150,
    backgroundColor: 'white',
  },
  minusBtn: {
    overflow: 'hidden',
    width: 15,
    height: 30,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'white',
  },
  plugContainer: {
    margin: 8,
    paddingVertical: 20,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  plugIconContainer: {
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 5,
  },
  plugWrapper: {
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 5,
  },
  plugName: { color: 'black', fontSize: 12, fontWeight: '600' },
  addPhoto: {
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 10,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: -20,
    right: 10,
  },
});
