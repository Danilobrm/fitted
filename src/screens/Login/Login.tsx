import React from 'react';
import {View} from 'react-native';
import style from './style';
import AuthHeader from '../../components/Authentication/AuthHeader/AuthHeader';
import AuthFooter from '../../components/Authentication/AuthFooter/AuthFooter';
import {LoginForm} from '../../components/Authentication/Forms/Login/LoginForm';

export default function Login() {
  return (
    <View style={style.container}>
      <AuthHeader screenName="Log in" />

      <LoginForm />

      <AuthFooter
        route="Register"
        text="Don't have an account?'"
        endpoint="Sign Up"
      />
    </View>
  );
}
