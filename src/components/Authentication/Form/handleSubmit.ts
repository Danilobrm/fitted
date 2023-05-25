import {
  IHandleSubmit,
  IHandleSubmitProps,
} from '../../../interfaces/authentication/handleSubmit';
import {IErrors} from '../../../interfaces/validate';
import apiActions from '../../../utils/api';
import {ValidateUser} from '../../../utils/validation/validateUser';
import {initialUserRegisterErrors} from './Register/defaultFields';

class HandleSubmit implements IHandleSubmit {
  async register({userData, setFieldErrors}: IHandleSubmitProps['Register']) {
    // instace the validate class
    const validateUser = new ValidateUser();
    const errorsClient = validateUser.validateRegister(userData);

    for (let error in errorsClient) {
      if (errorsClient[error as keyof IErrors]) {
        setFieldErrors(errorsClient);
        if (errorsClient.emailErrors) {
          return;
        }
      }
    }

    try {
      // register user on database
      await apiActions.create('/register', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });

      setFieldErrors(initialUserRegisterErrors);
      return true;
    } catch (error: any) {
      setFieldErrors({
        ...errorsClient,
        emailErrors: error.response.data.emailErrors,
      });
      return false;
    }
  }
}

export default HandleSubmit;
