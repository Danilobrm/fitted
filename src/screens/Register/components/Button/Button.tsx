import React, {useContext} from 'react';
import ButtonComponent from '../../../../components/Button/Button';
import {ValidateUserRegister} from '../../../../utils/validation/validateUser';
import apiActions from '../../../../utils/api';
import {UserContext} from '../../../../contexts/UserContext';
import {IUserData} from '../../../../interfaces/userData';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../..';
import {Errors} from '../../../../interfaces/validate';

// import { Container } from './styles';

type RegisterButtonParams = {
  checkBoxStatus: boolean;
  userData: IUserData;
};

const RegisterButton = ({userData, checkBoxStatus}: RegisterButtonParams) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {setName, setEmail, setPassword, setErrors, setToggleCheckBox} =
    useContext(UserContext);
  const {name, email, password} = userData;

  async function registerUser() {
    // instace the validate class
    const validateUser = new ValidateUserRegister();
    const errorsClient = validateUser.validate(userData);

    for (let error in errorsClient) {
      if (errorsClient[error as keyof Errors]) {
        setErrors(errorsClient);
      }
    }

    if (errorsClient.emailErrors) {
      return;
    }

    try {
      // register user on database
      const user = await apiActions.create('/register', {
        name: name,
        email: email,
        password: password,
      });

      if (user.status === 200) {
        setErrors({nameErrors: '', emailErrors: '', passwordErrors: ''});
        setName('');
        setEmail('');
        setPassword('');
        setToggleCheckBox(false);
        navigate('Login');
      }
    } catch (error: any) {
      setErrors({
        ...errorsClient,
        emailErrors: error.response.data.emailErrors,
      });
    }
  }
  return (
    <ButtonComponent
      title="Sign up"
      conditionToDisable={!checkBoxStatus || !name || !email || !password}
      action={registerUser}
      key="signup btn"
    />
  );
};

export default RegisterButton;
