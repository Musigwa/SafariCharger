import styles from 'common/styles';
import React, { useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';

const StationDetailsScreen = (show: boolean) => {
  const bottomSheet = useRef();
  useEffect(() => {
    if (show) bottomSheet.current.show();
    return () => {};
  }, [show]);

  return (
    <View style={style.container}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={500} />
      <TouchableOpacity
        style={style.button}
        onPress={() => bottomSheet.current.show()}
      >
        <Text style={style.text}>Open modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StationDetailsScreen;

const style = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    backgroundColor: '#140078',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#8559da',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
