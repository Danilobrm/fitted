import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import style, {placeholderStyle} from './style';
import {IInput} from '../../interfaces/input';

// import { Container } from './styles';

const Input = ({icon, placeholder, hideText, setText, text, type}: IInput) => {
  const [display, setDisplay] = useState<'flex' | 'none'>('flex');

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        value={text}
        onChangeText={value => setText(value)}
        maxLength={30}
        secureTextEntry={hideText}
        onFocus={() => setDisplay('none')}
        onBlur={() => !text && setDisplay('flex')}
        inputMode={type}
      />
      <View style={style.placeholder}>
        <Image source={icon} />
      </View>
      {!text && (
        <Text style={placeholderStyle(display).placeholderText}>
          {placeholder}
        </Text>
      )}
    </View>
  );
};

export default Input;
