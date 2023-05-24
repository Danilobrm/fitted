import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../..';
import style, {loginOptionStyle} from './style';
import Form from './components/Form/Form';
import {UserContext} from '../../contexts/UserContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function Register({navigation}: Props) {
  const {errors} = useContext(UserContext);

  let marginTopOptionToLogIn = 150;

  for (const key in errors) {
    if (Object.hasOwnProperty.call(errors, key)) {
      marginTopOptionToLogIn -= 20;
    }
  }
  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Image source={require('../../assets/fitted_logo.png')} />
      </View>

      <Text style={style.screenName}>Sign Up</Text>

      <Form />

      <Text style={loginOptionStyle(marginTopOptionToLogIn).login}>
        Already have an account?{' '}
        <Text
          onPress={() => navigation.navigate('Login')}
          style={loginOptionStyle(marginTopOptionToLogIn).loginClickable}>
          Log In
        </Text>
      </Text>
    </View>
  );
}
