import CheckBox from '@react-native-community/checkbox';
import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {CheckBoxContext} from '../../../../../../contexts/CheckBox';

export default function RegisterTerms() {
  const {toggleCheckBox, setToggleCheckBox} = useContext(CheckBoxContext);

  return (
    <View>
      <View
        style={style.terms}
        onTouchStart={() => setToggleCheckBox(!toggleCheckBox)}>
        <CheckBox
          style={style.checkbox}
          value={toggleCheckBox}
          onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
          tintColors={{
            true: '#B7076B',
          }}
        />
        <Text style={style.termstext}>
          I accept all the{' '}
          <Text style={style.termsMarked}>Terms & Conditions</Text>
        </Text>
      </View>
    </View>
  );
}
