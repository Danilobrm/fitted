import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Input from '../../../Input/Input';

import {IErrors} from '../../../../interfaces/validate';
import Errors from '../Errors/Errors';
import ButtonComponent from '../../../Button/Button';
import {CheckBoxContext} from '../../../../contexts/CheckBox';
import {RootStackParamList} from '../../../..';
import HandleSubmit from '../handleSubmit';
import {IUserData} from '../../../../interfaces/userData';
import RegisterTerms from './components/Terms/Terms';

export const RegisterForm = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [fieldErrors, setFieldErrors] = useState<IErrors>({});

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  function handleInputChange(field: keyof IUserData, value: string) {
    setUserData(prevState => ({...prevState, [field]: value}));
  }

  async function handleSubmit() {
    const actions = new HandleSubmit();

    const createdAccount = await actions
      .register({userData, setFieldErrors})
      .then(status => status);

    if (!createdAccount) {
      return;
    }
    navigate('Login');
    setUserData({
      name: '',
      email: '',
      password: '',
    });
    setToggleCheckBox(false);
  }

  return (
    <View>
      <View>
        <Input
          icon={require('../../../../assets/input-icons/Profile.png')}
          placeholder="Name"
          setText={handleInputChange}
          text={userData.name}
          type="text"
          field="name"
        />

        {fieldErrors.nameErrors && <Errors error={fieldErrors.nameErrors} />}

        <Input
          icon={require('../../../../assets/input-icons/Message.png')}
          placeholder="Email"
          setText={handleInputChange}
          text={userData.email}
          type="email"
          field="email"
        />

        {fieldErrors.emailErrors && <Errors error={fieldErrors.emailErrors} />}

        <Input
          icon={require('../../../../assets/input-icons/Lock.png')}
          placeholder="Password"
          setText={handleInputChange}
          text={userData.password}
          hideText
          type="text"
          field="password"
        />

        {fieldErrors.passwordErrors && (
          <Errors error={fieldErrors.passwordErrors} />
        )}
      </View>

      <CheckBoxContext.Provider value={{toggleCheckBox, setToggleCheckBox}}>
        <RegisterTerms />
      </CheckBoxContext.Provider>

      <ButtonComponent
        title="Sign up"
        conditionToDisable={
          !toggleCheckBox ||
          !userData.name ||
          !userData.email ||
          !userData.password
        }
        action={handleSubmit}
      />
    </View>
  );
};
