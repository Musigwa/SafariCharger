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

const StationList = ({ data }: any) => {
  return (
    <View style={style.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.7} style={style.itemContainer}>
            <View style={[styles.rowBetween, { marginBottom: 8 }]}>
              <Image
                source={require('assets/img/chargepoint.jpg')}
                style={style.image}
              />
              <View style={style.item}>
                <Text style={style.title}>{item.name}</Text>
                <Text style={style.description}>{item.location}</Text>
              </View>
              <View style={style.iconContainer}>
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
                name={`ev-plug-${item.connector.abbrev}`}
                type="materialcommunity"
                size={28}
                color="black"
              />
              <View>
                <Text style={style.conector}>{item.connector.name}</Text>
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
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  item: {
    marginHorizontal: 15,
  },
  image: {
    width: 60,
    height: 50,
    borderRadius: 5,
  },
  title: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: 'gray',
  },
  iconContainer: {
    backgroundColor: 'black',
    ...styles.center,
    borderRadius: 50,
    padding: 8,
  },
  badgeContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  statusBadge: {
    textTransform: 'capitalize',
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  chargeCap: { color: 'black', fontWeight: '700', maxWidth: 150 },
  conector: { textTransform: 'capitalize', color: 'gray' },
});
