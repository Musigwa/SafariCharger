import styles from 'common/styles';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../Icon';

const StationList = ({ data, onItemPress }: any) => {
  return (
    <View style={style.container}>
      {/* <View
        style={{
          backgroundColor: 'rgba(42,110,232,1)',
          alignSelf: 'center',
          overflow: 'hidden',
          width: 90,
          height: 45,
          borderTopRightRadius: 100,
          borderTopLeftRadius: 100,
          paddingTop: 15,
          ...styles.center,
        }}
      >
        <Icon name="plus" color="white" />
      </View> */}
      {/* <Ripple /> */}
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.itemContainer}
            onPress={() => onItemPress(item)}
          >
            <View style={[styles.rowBetween, { marginBottom: 8 }]}>
              <Image source={{ uri: item.image }} style={style.image} />
              <View style={styles.item}>
                <Text
                  style={[styles.title, { maxWidth: 150 }]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
                <View style={styles.row}>
                  <Icon
                    name="location"
                    type="evilicon"
                    size={18}
                    color="black"
                  />
                  <Text style={styles.description}>{item.location}</Text>
                </View>
              </View>
              <View style={styles.iconContainer}>
                <Icon
                  name="arrow-right-top"
                  type="materialcommunity"
                  size={20}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.rowBetween}>
              <Icon
                name={
                  item.key.includes('bar')
                    ? 'car-battery'
                    : `ev-plug-${item.connector.abbrev}`
                }
                type="materialcommunity"
                size={28}
                color="black"
              />
              <View>
                <Text style={style.connector}>{item.connector.name}</Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={style.chargeCap}
                >
                  {item.ratings[0]}
                </Text>
              </View>
              <View style={style.badgeContainer}>
                <Text style={style.statusBadge}>available</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default StationList;

const style = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 50,
    borderRadius: 5,
  },
  badgeContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(37, 196, 12,1)',
  },
  statusBadge: {
    textTransform: 'capitalize',
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  chargeCap: { color: 'black', fontWeight: '700', maxWidth: 150 },
  connector: { textTransform: 'capitalize', color: 'gray' },
});
