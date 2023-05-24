import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Input from '../../../../components/Input/Input';
import {UserContext} from '../../../../contexts/UserContext';
import {Errors} from '../../../../interfaces/validate';
import RegisterButton from '../Button/Button';
import style from './style';

// import { Container } from './styles';

const Form = () => {
  const [errors, setErrors] = useState<Errors>({
    nameErrors: '',
    emailErrors: '',
    passwordErrors: '',
  });
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View>
      <UserContext.Provider
        value={{setName, setEmail, setPassword, setErrors, setToggleCheckBox}}>
        <View>
          <Input
            icon={require('../../../../assets/input-icons/Profile.png')}
            placeholder="Name"
            setText={setName}
            text={name}
            type="text"
          />

          {errors.nameErrors && (
            <View style={style.errors}>
              <Text style={style.errorsText}>{errors.nameErrors}</Text>
            </View>
          )}

          <Input
            icon={require('../../../../assets/input-icons/Message.png')}
            placeholder="Email"
            setText={setEmail}
            text={email}
            type="email"
          />

          {errors.emailErrors && (
            <View style={style.errors}>
              <Text style={style.errorsText}>{errors.emailErrors}</Text>
            </View>
          )}

          <Input
            icon={require('../../../../assets/input-icons/Lock.png')}
            placeholder="Password"
            setText={setPassword}
            text={password}
            hideText
            type="text"
          />

          {errors.passwordErrors && (
            <View style={style.errors}>
              <Text style={style.errorsText}>{errors.passwordErrors}</Text>
            </View>
          )}
        </View>

        <View
          style={style.terms}
          onTouchStart={() => setToggleCheckBox(!toggleCheckBox)}>
          <CheckBox
            style={style.checkbox}
            disabled={false}
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

        <RegisterButton
          checkBoxStatus={toggleCheckBox}
          userData={{name, email, password}}
        />
      </UserContext.Provider>
    </View>
  );
};

export default Form;
