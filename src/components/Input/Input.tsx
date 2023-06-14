import React from 'react';
import {Image, ImageSourcePropType, Text, TextInput, View} from 'react-native';
import style from './style';

export interface IInput {
  icon: ImageSourcePropType;
  placeholder: string;
  hideText?: true;
  setText: (field: keyof {[key: string]: string}, value: string) => void;
  text: string;
  type: 'email' | 'text';
  field: keyof {[key: string]: string};
}

const Input = ({
  icon,
  placeholder,
  hideText,
  setText,
  text,
  type,
  field,
}: IInput) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        value={text}
        onChangeText={value => setText(field, value)}
        maxLength={30}
        secureTextEntry={hideText}
        inputMode={type}
      />
      <View style={style.placeholder}>
        <Image source={icon} />
      </View>

      {!text && (
        <View pointerEvents="none">
          <Text style={style.placeholderText}>{placeholder}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
