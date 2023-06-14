import {Validator} from '../../interfaces/validate';
import {PasswordValidator} from './passwordValidator';
import {NameValidator} from './nameValidator';
import {EmailValidator} from './emailValidator';

export class ValidateUser {
  validateRegister({name, email, password}: {[key: string]: string}): {
    [key: string]: string;
  } {
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
    const errors: {[key: string]: string} = {};

    if (nameErrors) {
      errors.name = nameErrors;
    }

    if (emailErrors) {
      errors.email = emailErrors;
    }

    if (passwordErrors) {
      errors.password = passwordErrors;
    }
    return errors;
  }
}
