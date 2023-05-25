import {IUserRegisterData} from '../../../../interfaces/userData';
import {IErrors} from '../../../../interfaces/validate';

export const initialUserRegisterState: IUserRegisterData = {
  name: '',
  email: '',
  password: '',
};

export const initialUserRegisterErrors: IErrors = {
  nameErrors: '',
  emailErrors: '',
  passwordErrors: '',
};
