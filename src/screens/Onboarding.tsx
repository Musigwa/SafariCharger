import second from 'assets/img/batswap.jpeg';
import third from 'assets/img/carcharger.jpeg';
import fourth from 'assets/img/charge.jpg';
import first from 'assets/img/chargepoint.jpg';
import styles from 'common/styles';
import React, { ReactNode } from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import { useNavigation } from '@react-navigation/native';
import constants from '../constants';
import { useAppDispatch } from 'container/hooks';

const { routeNames } = constants;

const ImgWrapper = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: object;
}) => (
  <View style={styles.center}>
    <View style={[{ backgroundColor: 'black', height: 80 }, style]} />
    <View style={[styles.rowBetween, { alignItems: 'center' }]}>
      {children}
    </View>
  </View>
);

const data = [
  {
    backgroundColor: 'white',
    image: first,
    title: 'About Safari Charger',
    subtitle:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  },
  {
    backgroundColor: '#fff',
    image: second,
    title: 'Why Do We Use It?',
    subtitle:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    backgroundColor: '#fff',
    image: third,
    title: 'Still Not Convinced?',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    backgroundColor: '#fff',
    image: fourth,
    title: 'How To Get Started',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
];

const OnboardingScreen = () => {
  const { navigate } = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <Onboarding
      containerStyles={{ justifyContent: 'flex-start' }}
      onDone={() => navigate(routeNames.LOGIN)}
      pages={data.map((it, id) => ({
        ...it,
        image: (
          <ImgWrapper style={{ width }}>
            <Image
              source={data[id - 1]?.image}
              style={[
                style.image,
                {
                  width: '20%',
                  height: 180,
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0,
                },
              ]}
            />
            <Image
              source={it.image}
              style={[style.image, { marginHorizontal: 20, width: '50%' }]}
            />
            <Image
              source={data[id + 1]?.image}
              style={[
                style.image,
                {
                  width: '20%',
                  height: 180,
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                },
              ]}
            />
          </ImgWrapper>
        ),
      }))}
    />
  );
};

export default OnboardingScreen;

const style = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    top: -30,
    borderRadius: 10,
  },
});
