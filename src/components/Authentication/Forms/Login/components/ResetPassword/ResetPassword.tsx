import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

// import { Container } from './styles';

const ResetPassword = () => {
  return (
    <View>
      <Text
        onPress={() => console.log('reset password')}
        style={style.forgotPassword}>
        Forgot password?
      </Text>
    </View>
  );
};

export default ResetPassword;
