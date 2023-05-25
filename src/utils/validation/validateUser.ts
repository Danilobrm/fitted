import {IErrors, Validator} from '../../interfaces/validate';
import {IUserRegisterData} from '../../interfaces/userData';
import {PasswordValidator} from './passwordValidator';
import {NameValidator} from './nameValidator';
import {EmailValidator} from './emailValidator';

export class ValidateUser {
  validateRegister({name, email, password}: IUserRegisterData): IErrors {
    // create class to validate
    const emailValidator: Validator<string, string> = new EmailValidator();
    const passwordValidator: Validator<string, string> =
      new PasswordValidator();
    const nameValidator: Validator<string, string> = new NameValidator();

    // validate data
    const nameErrors = nameValidator.validate(name);
    const emailErrors = emailValidator.validate(email);
    const passwordErrors = passwordValidator.validate(password);

    //get the returned list of erros
    const errors: IErrors = {};

    if (nameErrors) {
      errors.nameErrors = nameErrors;
    }

    if (emailErrors) {
      errors.emailErrors = emailErrors;
    }

    if (passwordErrors) {
      errors.passwordErrors = passwordErrors;
    }

    return errors;
  }
}
