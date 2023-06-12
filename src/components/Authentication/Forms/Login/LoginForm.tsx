import React, {useState} from 'react';
import {IErrors} from '../../../../interfaces/validate';
import HandleSubmit from '../handleSubmit';
import {View} from 'react-native';
import Input from '../../../Input/Input';
import Errors from '../Errors/Errors';
import {IUserData} from '../../../../interfaces/userData';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ButtonComponent from '../../../Button/Button';

export const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [fieldErrors, setFieldErrors] = useState<IErrors>({});

  function handleInputChange(field: keyof IUserData, value: string) {
    setUserData(prevState => ({...prevState, [field]: value}));
  }

  async function handleSubmit() {
    const actions = new HandleSubmit();

    const authenticate = await actions
      .login({userData, setFieldErrors})
      .then(status => status);

    if (!authenticate) {
      return;
    }
    setUserData({
      email: '',
      password: '',
    });
  }

  return (
    <View>
      <View>
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

      <ResetPassword />

      <ButtonComponent
        title="Log in"
        conditionToDisable={!userData.email || !userData.password}
        action={handleSubmit}
      />
    </View>
  );
};
