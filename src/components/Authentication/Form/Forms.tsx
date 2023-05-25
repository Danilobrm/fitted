import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Input from '../../Input/Input';
import RegisterTerms from './Register/Terms/Terms';
import {IErrors} from '../../../interfaces/validate';
import Errors from './Errors/Errors';
import ButtonComponent from '../../Button/Button';
import {CheckBoxContext} from '../../../contexts/CheckBox';
import {RootStackParamList} from '../../..';
import HandleSubmit from './handleSubmit';
import {IUserRegisterData} from '../../../interfaces/userData';
import {
  initialUserRegisterErrors,
  initialUserRegisterState,
} from './Register/defaultFields';
import ResetPassword from './Login/ResetPassword/ResetPassword';

export const RegisterForm = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [userData, setUserData] = useState<IUserRegisterData>(
    initialUserRegisterState,
  );
  const [fieldErrors, setFieldErrors] = useState<IErrors>(
    initialUserRegisterErrors,
  );

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  async function handleSubmit() {
    const actions = new HandleSubmit();

    const createdAccount = await actions
      .register({userData, setFieldErrors})
      .then(status => status);

    if (!createdAccount) {
      return;
    }
    navigate('Login');
    setUserData(initialUserRegisterState);
    setToggleCheckBox(false);
  }

  function handleInputChange(field: keyof typeof userData, value: string) {
    setUserData(prevState => ({...prevState, [field]: value}));
  }

  return (
    <View>
      <View>
        <Input
          icon={require('../../../assets/input-icons/Profile.png')}
          placeholder="Name"
          setText={handleInputChange}
          text={userData.name}
          type="text"
          field="name"
        />

        {fieldErrors.nameErrors && <Errors error={fieldErrors.nameErrors} />}

        <Input
          icon={require('../../../assets/input-icons/Message.png')}
          placeholder="Email"
          setText={handleInputChange}
          text={userData.email}
          type="email"
          field="email"
        />

        {fieldErrors.emailErrors && <Errors error={fieldErrors.emailErrors} />}

        <Input
          icon={require('../../../assets/input-icons/Lock.png')}
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

export const LoginForm = () => {
  const [userData, setUserData] = useState<IUserRegisterData>(
    initialUserRegisterState,
  );

  const [fieldErrors, setFieldErrors] = useState<IErrors>({
    emailErrors: '',
    passwordErrors: '',
  });

  function handleInputChange(field: keyof typeof userData, value: string) {
    setUserData(prevState => ({...prevState, [field]: value}));
  }

  async function handleSubmit() {
    console.log('logar');
    setFieldErrors({});
    setUserData(initialUserRegisterState);
  }

  return (
    <View>
      <View>
        <Input
          icon={require('../../../assets/input-icons/Message.png')}
          placeholder="Email"
          setText={handleInputChange}
          text={userData.email}
          type="email"
          field="email"
        />

        {fieldErrors.emailErrors && <Errors error={fieldErrors.emailErrors} />}

        <Input
          icon={require('../../../assets/input-icons/Lock.png')}
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

      <ResetPassword />

      <ButtonComponent
        title="Log in"
        conditionToDisable={!userData.email || !userData.password}
        action={handleSubmit}
      />
    </View>
  );
};
