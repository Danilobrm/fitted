import React from 'react';
import {View, Text, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../..';
import style from './style';
import Form from './components/Form/Form';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function Register({navigation}: Props) {
  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Image source={require('../../assets/fitted_logo.png')} />
      </View>

      <Text style={style.screenName}>Sign Up</Text>

      <Form />

      <Text style={style.login}>
        Already have an account?{' '}
        <Text
          onPress={() => navigation.navigate('Login')}
          style={style.loginClickable}>
          Log In
        </Text>
      </Text>
    </View>
  );
}
