import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from 'common/styles';
import { useAppDispatch } from 'container/hooks';
import { dispatchLogin } from 'container/reducers/user';
import { useNavigation } from '@react-navigation/native';
import constants from '../constants';

const { routeNames } = constants;

const SignUpScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(dispatchLogin());
  };

  return (
    <View style={style.container}>
      <View style={style.topBanner} />
      <View style={style.form}>
        <Text style={style.headerTitle}>Create Account</Text>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Email"
            clearButtonMode="always"
            style={style.input}
            autoComplete="email"
          />
          <TextInput
            placeholder="Phone number"
            clearButtonMode="always"
            style={style.input}
            autoComplete="tel"
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Password"
            clearButtonMode="always"
            style={[style.input, { marginBottom: 0 }]}
            autoComplete="password-new"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ alignSelf: 'flex-start', marginLeft: 20 }}
          onPress={() => navigate(routeNames.LOGIN)}
        >
          <Text style={{ fontWeight: '600' }}>
            Already have an account?{'\u2003'}
            <Text style={{ color: 'rgba(37, 196, 12,1)', fontWeight: 'bold' }}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={style.btnContainer}
          onPress={handleLogin}
        >
          <Text style={style.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

export const style = StyleSheet.create({
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
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
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
    marginBottom: 15,
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
