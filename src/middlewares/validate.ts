import isEmail from 'validator/lib/isEmail';
import {Errors, Validator} from '../interfaces/validate';
import {IUserData} from '../interfaces/userData';

export class ValidateUser {
  validate({name, email, password}: IUserData): Errors {
    const emailValidator: Validator<string, string[]> = new EmailValidator();

    // create class to validate
    const passwordValidator: Validator<string, string[]> =
      new PasswordValidator();
    const nameValidator: Validator<string, string[]> = new NameValidator();

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
class EmailValidator implements Validator<string, string[]> {
  emailErros: string[] = [];
  validate(email: string): string[] {
    // empty field
    if (!email) {
      this.emailErros.push('campo email não pode ficar vazio.');
      return this.emailErros;
    }
    if (!isEmail(email)) {
      this.emailErros.push('email inválido.');
    }

    return this.emailErros;
  }
}

class PasswordValidator implements Validator<string, string[]> {
  passwordErros: string[] = [];
  validate(password: string): string[] {
    if (!password) {
      this.passwordErros.push('campo senha não pode ficar vazio.');
      return this.passwordErros;
    }
    if (password.length < 6) {
      this.passwordErros.push('senha precisa ser maior que 6 caracteres.');
    }
    return this.passwordErros;
  }
}

class NameValidator implements Validator<string, string[]> {
  nameErros: string[] = [];
  validate(name: string): string[] {
    if (!name) {
      this.nameErros.push('campo nome não pode ficar vazio.');
    }
    return this.nameErros;
  }
}
