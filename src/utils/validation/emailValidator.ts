import isEmail from 'validator/lib/isEmail';
import {Validator} from '../../interfaces/validate';

export class EmailValidator implements Validator<string, string> {
  validate(email: string): string {
    // empty field
    if (!email) {
      return 'campo email não pode ficar vazio.';
    }
    if (!isEmail(email)) {
      return 'email inválido.';
    }
    return '';
  }
}
