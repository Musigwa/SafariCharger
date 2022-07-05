import styles from 'common/styles';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from '../Icon';

type ModalType = {
  flexValue: number;
  onPress: (args: any) => void;
  isOpen: boolean;
} & any;

const CardModal = ({ flexValue, onPress, item, isOpen }: ModalType) => {
  const { absoluteFill } = StyleSheet;
  const isSwap = item.key?.includes('bar');

  return isOpen ? (
    <View style={[style.container, absoluteFill]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[style.overlay, { flex: 1 - flexValue }]}
      />
      <View style={[style.modalContainer, { flex: flexValue }]}>
        <Image style={style.image} source={{ uri: item.image }} />
        <View style={styles.rowBetween}>
          <View>
            <Text style={[styles.title, { fontWeight: '700' }]}>
              {item.name}
            </Text>
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
        <View style={style.bannerContainer}>
          <Icon
            name={isSwap ? 'car-battery' : `ev-plug-${item.connector.abbrev}`}
            type="materialcommunity"
            size={50}
            color="black"
          />
          <View style={[styles.center, style.bannerMiddle]}>
            <Text style={style.bannerMiddleTitle}>{item.connector.name}</Text>
            <Text
              style={style.bannerMiddleDesc}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.ratings[0]}
            </Text>
          </View>
          <View style={styles.center}>
            <Text style={style.bannerMiddleTitle}>500 RWF</Text>
            <Text style={style.bannerMiddleDesc}>
              Per {isSwap ? '100%' : 'Kwh'}
            </Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={style.btnContainer}>
          <Text style={style.btnText}>BOOK {isSwap ? 'SWAP' : 'CHARGER'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : null;
};

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

export default CardModal;
