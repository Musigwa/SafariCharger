import styles from 'common/styles';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import { useNavigation } from '@react-navigation/native';
import constants from '../constants';

const { routeNames } = constants;

const data = [
  {
    backgroundColor: 'white',
    image: require('assets/img/carcharger.jpeg'),
    title: 'About Safari Charger',
    subtitle:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  },
  {
    backgroundColor: '#fff',
    image: require('assets/img/batswap.jpeg'),
    title: 'Why Do We Use It?',
    subtitle:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    backgroundColor: '#fff',
    image: require('assets/img/charge.jpg'),
    title: 'Still Not Convinced?',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    backgroundColor: '#fff',
    image: require('assets/img/chargepoint.jpg'),
    title: 'How To Get Started',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
];

const OnboardingScreen = () => {
  const { navigate } = useNavigation();

  const handleNext = () => {
    navigate(routeNames.SINGUP);
  };

  return (
    <Onboarding
      containerStyles={style.containerStyle}
      onDone={handleNext}
      onSkip={handleNext}
      pages={data.map((it, id) => ({
        ...it,
        image: (
          <View style={style.imageContainer}>
            <View style={style.topBanner} />
            <View style={style.imageWrapper}>
              <Image source={data[id - 1]?.image} style={style.prevImg} />
              <Image source={it.image} style={style.image} />
              <Image source={data[id + 1]?.image} style={style.nextImg} />
            </View>
          </View>
        ),
      }))}
    />
  );
};

export default OnboardingScreen;

const style = StyleSheet.create({
  containerStyle: { justifyContent: 'flex-start', alignItems: 'center' },
  topBanner: { width: '100%', height: 80, backgroundColor: 'black' },
  imageContainer: { width: '100%' },
  imageWrapper: {
    width: '100%',
    ...styles.center,
    ...styles.rowBetween,
    top: -50,
  },
  image: {
    width: '50%',
    height: 200,
    borderRadius: 10,
  },
  prevImg: {
    width: '20%',
    height: 180,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  nextImg: {
    width: '20%',
    height: 180,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
});
