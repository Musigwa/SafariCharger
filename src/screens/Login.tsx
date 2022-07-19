import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from 'common/styles';
import { useNavigation } from '@react-navigation/native';
import constants from '../constants';
import { useAppDispatch } from 'container/hooks';
import { dispatchLogin } from 'container/reducers/user';

const { routeNames } = constants;
const LoginScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(dispatchLogin());
  };

  return (
    <View style={style.container}>
      <View style={style.topBanner} />
      <View style={style.form}>
        <Text style={style.headerTitle}>Sign In</Text>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="First Name"
            clearButtonMode="always"
            style={style.input}
          />
          <TextInput
            placeholder="Last Name"
            clearButtonMode="always"
            style={style.input}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={style.btnContainer}
          onPress={handleLogin}
        >
          <Text style={style.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  topBanner: { backgroundColor: 'black', height: '20%', width: '100%' },
  form: {
    width: '90%',
    height: '60%',
    backgroundColor: 'white',
    position: 'relative',
    top: -80,
    ...styles.center,
    justifyContent: 'space-between',
    paddingVertical: 40,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    flex: 0.53,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 16,
    width: '90%',
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(182, 195, 217,0.7)',
    borderRadius: 5,
    height: 50,
    color: 'rgba(182, 195, 217, 0.7)',
  },
  btnContainer: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 15,
    width: '90%',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});
