import React from 'react';
import {View} from 'react-native';
import style from './style';
import {RegisterForm} from '../../components/Authentication/Form/Forms';
import AuthHeader from '../../components/Authentication/AuthHeader/AuthHeader';
import AuthFooter from '../../components/Authentication/AuthFooter/AuthFooter';

export default function Register() {
  return (
    <View style={style.container}>
      <AuthHeader screenName="Sign Up" />

      <RegisterForm />

      <AuthFooter
        route="Login"
        text="Already have an account?"
        endpoint="Log In"
      />
    </View>
  );
}
