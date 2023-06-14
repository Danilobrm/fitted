import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Input from '../../../Input/Input';
import Errors from '../Errors/Errors';
import ButtonComponent from '../../../Button/Button';
import {CheckBoxContext} from '../../../../contexts/CheckBox';
import RegisterTerms from './components/Terms/Terms';
import {RootStackParamList} from '../../../../routes/auth.routes';
import APIHelpers from '../../../../utils/api';
import {ValidateUser} from '../../../../utils/validation/validateUser';

type IUserData = {[key: string]: string};

let lastRequestData: IUserData = {};

export const RegisterForm = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [userData, setUserData] = useState<IUserData>({});
  const [fieldErrors, setFieldErrors] = useState<IUserData>({});

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  function handleInputChange(field: keyof IUserData, value: string) {
    setUserData(prevState => ({...prevState, [field]: value}));
  }

  async function handleSubmit() {
    if (userData === lastRequestData) {
      return;
    }

    const register = await registerUser();

    if (!register) {
      lastRequestData = userData;
      return;
    }

    navigate('Login');
    setFieldErrors({});
    setUserData({});
    setToggleCheckBox(false);
  }

  async function registerUser() {
    const validateUserData = validateData();

    if (!validateUserData) {
      return false;
    }

    // register user on database
    const apiActions = new APIHelpers();
    const register = await apiActions.post('/register', userData);

    if (register.status === 400) {
      setFieldErrors(register.data);
      return false;
    }
    return true;
  }

  function validateData() {
    // validate data in client
    const validateUser = new ValidateUser();
    const errorsClient = validateUser.validateRegister(userData);
    setFieldErrors(errorsClient);

    if (errorsClient.email) {
      return false;
    }
    return true;
  }

  return (
    <View>
      <View>
        <Input
          icon={require('../../../../assets/input-icons/Profile.png')}
          placeholder="Name"
          type="text"
          setText={handleInputChange}
          text={userData.name}
          field="name"
        />

        {fieldErrors.name && <Errors error={fieldErrors.name} />}

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
