import React, {useState} from 'react';
import {View} from 'react-native';
import Input from '../../../Input/Input';
import Errors from '../Errors/Errors';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ButtonComponent from '../../../Button/Button';
import APIHelpers from '../../../../utils/api';

let lastRequestData: any = null;

export const LoginForm = () => {
  const [userData, setUserData] = useState<{[key: string]: string}>({});
  const [token, setToken] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});

  function handleInputChange(
    field: keyof {[key: string]: string},
    value: string,
  ) {
    setUserData(prevState => ({...prevState, [field]: value}));
  }

  async function handleSubmit() {
    if (userData === lastRequestData) {
      return;
    }

    const authenticate = await authUser();

    if (!authenticate) {
      lastRequestData = userData;
      return;
    }

    console.log(token);
    setFieldErrors({});
    setUserData({});
  }

  async function authUser() {
    // authenticate user
    const apiActions = new APIHelpers();
    const authenticate = await apiActions.post('/login', userData);

    if (authenticate.status === 400) {
      setFieldErrors(authenticate.data);
      return false;
    }

    setToken(authenticate.data.token);
    return true;
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

        {fieldErrors.email && <Errors error={fieldErrors.email} />}

        <Input
          icon={require('../../../../assets/input-icons/Lock.png')}
          placeholder="Password"
          setText={handleInputChange}
          text={userData.password}
          hideText
          type="text"
          field="password"
        />

        {fieldErrors.password && <Errors error={fieldErrors.password} />}
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
