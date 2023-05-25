import React from 'react';
import {Image, Text, View} from 'react-native';
import style from './style';

// import { Container } from './styles';

interface AuthHeaderProps {
  screenName: string;
}

const AuthHeader = ({screenName}: AuthHeaderProps) => {
  return (
    <View>
      <View style={style.logo}>
        <Image source={require('../../../assets/fitted_logo.png')} />
      </View>

      <Text style={style.screenName}>{screenName}</Text>
    </View>
  );
};

export default AuthHeader;
