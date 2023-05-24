import {createContext} from 'react';
import {UserContextProtocol} from '../interfaces/contexts/UserContextProtocol';

const UserContext = createContext<UserContextProtocol>({
  setName: () => '',
  setEmail: () => '',
  setPassword: () => '',
  setErrors: () => {},
  setToggleCheckBox: () => false,
});

export {UserContext};
