import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

// import { Container } from './styles';

interface ErrorParams {
  error: string;
}

const Errors = ({error}: ErrorParams) => {
  return (
    <View style={style.errors}>
      <Text style={style.errorsText}>{error}</Text>
    </View>
  );
};

export default Errors;
