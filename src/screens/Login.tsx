import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAppDispatch } from 'container/hooks';
import { dispatchLogin } from 'container/reducers/user';
import constants from '../constants';
import { useNavigation } from '@react-navigation/native';
import { style } from './Singup';

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
            placeholder="Tel -Or- email"
            clearButtonMode="always"
            style={style.input}
            autoComplete="tel"
            keyboardType={'phone-pad' || 'email-address'}
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
          onPress={() => navigate(routeNames.SINGUP)}
        >
          <Text style={{ fontWeight: '600' }}>
            Don't have an account yet?{'\u2003'}
            <Text style={{ color: 'rgba(37, 196, 12,1)', fontWeight: 'bold' }}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
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
