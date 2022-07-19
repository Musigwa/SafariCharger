import Icon from 'common/components/Icon';
import styles from 'common/styles';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

type PropType = { item: any };

const StationDetailsScreen = ({ item }: PropType) => {
  const [selected, setSelected] = useState<number | null>(null);
  const isSwap = item.key?.includes('bar');

  return (
    <>
      <Image style={style.image} source={{ uri: item.image }} />
      <View style={[styles.rowBetween, { paddingVertical: 10 }]}>
        <View>
          <Text style={[styles.title, { fontWeight: '700' }]}>{item.name}</Text>
          <View style={styles.row}>
            <Icon
              name="ios-location-outline"
              type="ionicon"
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
      <ScrollView
        contentContainerStyle={{ paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {Array.from({ length: 5 }, (it, i) => (
          <TouchableOpacity
            key={i}
            style={[
              style.bannerContainer,
              {
                marginBottom: 8,
                backgroundColor:
                  selected === i ? 'rgba(37, 196, 12,1)' : 'white',
              },
            ]}
            activeOpacity={0.6}
            onPress={() => {
              if (selected === i) setSelected(null);
              else setSelected(i);
            }}
          >
            <Icon
              name={isSwap ? 'car-battery' : `ev-plug-${item.connector.abbrev}`}
              type="materialcommunity"
              size={50}
              color="black"
            />
            <View style={[styles.center, style.bannerMiddle]}>
              <Text style={style.bannerMiddleTitle}>
                {item.connector.name}, 100Ah
              </Text>
              <Text
                style={style.bannerMiddleDesc}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Mileage: {item.ratings[0]}
              </Text>
            </View>
            <View style={styles.center}>
              <Text style={style.bannerMiddleTitle}>500 RWF</Text>
              <Text style={style.bannerMiddleDesc}>
                Per {isSwap ? '100%' : 'Kwh'}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ paddingVertical: 10 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            style.btnContainer,
            { backgroundColor: selected !== null ? 'black' : 'gray' },
          ]}
          disabled={selected === null}
          onPress={() => {
            Alert.alert('Alert', 'The charger is booked');
          }}
        >
          <Text style={style.btnText}>
            BOOK {isSwap ? 'BATTERY' : 'CHARGER'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default StationDetailsScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0,0.3)',
  },
  overlay: {
    width: '100%',
  },
  modalContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'space-between',
  },
  image: { width: '100%', height: 200, borderRadius: 15 },
  bannerContainer: {
    ...styles.rowBetween,
    width: '100%',
    borderRadius: 12,
    borderColor: 'rgba(164, 186, 222,.3)',
    borderWidth: 1.5,
    shadowColor: 'rgba(164, 186, 222,.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  bannerMiddle: {
    borderStartColor: 'rgba(164, 186, 222,.5)',
    borderStartWidth: 1,
    borderEndColor: 'rgba(164, 186, 222,.5)',
    borderEndWidth: 1,
    paddingHorizontal: 10,
    width: '55%',
  },
  bannerMiddleTitle: { fontWeight: '700', marginBottom: 6, color: 'black' },
  bannerMiddleDesc: { color: 'gray', fontWeight: '600', maxWidth: 180 },
  btnContainer: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 15,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});
