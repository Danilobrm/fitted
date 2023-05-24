import {Errors, Validator} from '../../interfaces/validate';
import {IUserData} from '../../interfaces/userData';
import {PasswordValidator} from './passwordValidator';
import {NameValidator} from './nameValidator';
import {EmailValidator} from './emailValidator';

export class ValidateUserRegister {
  validate({name, email, password}: IUserData): Errors {
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
    const errors: Errors = {
      nameErrors: nameErrors,
      emailErrors: emailErrors,
      passwordErrors: passwordErrors,
    };
    return errors;
  }
}
