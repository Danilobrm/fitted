import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';
import {RootStackParamList} from '../..';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Input from '../../components/Input/Input';
import ButtonComponent from '../../components/Button/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({navigation}: Props) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit() {
    console.log('logar');
  }

  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Image source={require('../../assets/fitted_logo.png')} />
      </View>

      <Text style={style.screenName}>Log In</Text>

      <View>
        <Input
          icon={require('../../assets/input-icons/Message.png')}
          placeholder="Email"
          setText={setEmail}
          text={email}
          type="email"
        />

        {/* {errors.emailErrors && (
          <View style={style.errors}>
            <Text style={style.errorsText}>{errors.emailErrors}</Text>
          </View>
        )} */}

        <Input
          icon={require('../../assets/input-icons/Lock.png')}
          placeholder="Password"
          setText={setPassword}
          text={password}
          hideText
          type="text"
        />

        {/* {errors.passwordErrors && (
          <View style={style.errors}>
            <Text style={style.errorsText}>{errors.passwordErrors}</Text>
          </View>
        )} */}
      </View>

      <Text
        onPress={() => console.log('reset password')}
        style={style.forgotPassword}>
        Forgot password?
      </Text>

      <ButtonComponent
        title="Log in"
        conditionToDisable={!email || !password}
        action={handleSubmit}
        key="signup btn"
      />

      <Text style={style.register}>
        Don't have an account?{' '}
        <Text
          onPress={() => navigation.navigate('Register')}
          style={style.registerClickable}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}
