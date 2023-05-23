import React from 'react';
import {View, Pressable, Text} from 'react-native';
import style, {buttonStyle} from './style';
import {IButton} from '../../interfaces/button';

// import { Container } from './styles';

const ButtonComponent = ({conditionToDisable, title, action}: IButton) => {
  return (
    <View style={style.container}>
      <Pressable
        style={buttonStyle(conditionToDisable).button}
        onPress={action}
        disabled={conditionToDisable}>
        <Text style={style.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
