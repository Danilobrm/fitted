import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../..';
import style from './style';

// import { Container } from './styles';

interface AuthFooterParams {
  route: keyof RootStackParamList;
  text: string;
  endpoint: string;
}

const AuthFooter = ({route, text, endpoint}: AuthFooterParams) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={style.container}>
      <Text style={style.footer}>
        {text}{' '}
        <Text onPress={() => navigate(route)} style={style.footerClickable}>
          {endpoint}
        </Text>
      </Text>
    </View>
  );
};

export default AuthFooter;
