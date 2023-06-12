import {
  IHandleSubmit,
  IHandleSubmitProps,
} from '../../../interfaces/authentication/handleSubmit';
import {IErrors} from '../../../interfaces/validate';
import apiActions from '../../../utils/api';
import {ValidateUser} from '../../../utils/validation/validateUser';

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
      await apiActions.post('/register', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });

      setFieldErrors({});
      return true;
    } catch (error: any) {
      setFieldErrors({
        ...errorsClient,
        emailErrors: error.response.data.emailErrors,
      });
      return false;
    }
  }

  async login({userData, setFieldErrors}: IHandleSubmitProps['Authenticate']) {
    try {
      // authenticate user
      const {token} = await apiActions
        .post('/login', {
          email: userData.email,
          password: userData.password,
        })
        .then(response => response.data);

      // implement code to use the token
      console.log(token);

      setFieldErrors({});
      return true;
    } catch (error: any) {
      setFieldErrors(
        error.response.data.email
          ? {
              emailErrors: error.response.data.email,
            }
          : {
              passwordErrors: error.response.data.password,
            },
      );
      return false;
    }
  }
}

export default HandleSubmit;
