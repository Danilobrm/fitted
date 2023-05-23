import React, {useLayoutEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../..';
import Input from '../../components/Input/Input';
import style from './style';
import {api} from '../../api/api';
import {ValidateUser} from '../../middlewares/validate';
import {Errors} from '../../interfaces/validate';
import ButtonComponent from '../../components/Button/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function Register({navigation}: Props) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const noErrors = {
    emailErrors: [],
    nameErrors: [],
    passwordErrors: [],
  };

  const [errors, setErrors] = useState<Errors>(noErrors);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  async function registerUser() {
    try {
      const validateUser = new ValidateUser();
      const errorsClient = validateUser.validate({name, email, password});

      for (const error in errorsClient) {
        if (errorsClient[error as keyof Errors].length > 0) {
          setErrors(errorsClient);
          return;
        }
      }

      const user = await api.post('/register', {
        name: name,
        email: email,
        password: password,
      });
      setErrors(noErrors);

      console.log(user.data);
    } catch (error: any) {
      setErrors(error.response.data);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Image source={require('../../assets/fitted_logo.png')} />
      </View>
      <Text style={style.screenName}>Sign Up</Text>
      <View>
        <Input
          icon={require('../../assets/input-icons/Profile.png')}
          placeholder="Name"
          setText={setName}
          text={name}
          type="text"
        />
        <View style={style.errors}>
          {errors.nameErrors.map((error: string, index: number) => {
            return (
              <Text style={style.errorsText} key={index}>
                {error}
              </Text>
            );
          })}
        </View>
        <Input
          icon={require('../../assets/input-icons/Message.png')}
          placeholder="Email"
          setText={setEmail}
          text={email}
          type="email"
        />
        <View style={style.errors}>
          {errors.emailErrors.map((error: string, index: number) => {
            return (
              <Text style={style.errorsText} key={index}>
                {error}
              </Text>
            );
          })}
        </View>
        <Input
          icon={require('../../assets/input-icons/Lock.png')}
          placeholder="Password"
          setText={setPassword}
          text={password}
          hideText
          type="text"
        />
        <View style={style.errors}>
          {errors.passwordErrors.map((error: string, index: number) => {
            return (
              <Text style={style.errorsText} key={index}>
                {error}
              </Text>
            );
          })}
        </View>
      </View>

      <View>
        <Text style={style.terms}>
          I accept all the{' '}
          <Text style={style.termsMarked}>Terms & Conditions</Text>
        </Text>
      </View>

      <ButtonComponent
        title="Sign up"
        conditionToDisable={!name || !email || !password}
        action={registerUser}
        key="signup btn"
      />
    </View>
  );
}
