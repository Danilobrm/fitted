import {Errors} from '../validate';

export interface UserContextProtocol {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
  setToggleCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
}
