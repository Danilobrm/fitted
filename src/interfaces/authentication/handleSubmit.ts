import {IUserRegisterData} from '../userData';
import {IErrors} from '../validate';

export interface IHandleSubmitProps {
  Register: {
    userData: IUserRegisterData;
    setFieldErrors: React.Dispatch<React.SetStateAction<IErrors>>;
  };
}

export interface IHandleSubmit {
  register({
    userData,
    setFieldErrors,
  }: IHandleSubmitProps['Register']): Promise<void | boolean>;
}
