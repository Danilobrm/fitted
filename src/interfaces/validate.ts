export interface Validator<T, U> {
  validate(data: T): U;
}

export interface IErrors {
  nameErrors?: string;
  emailErrors?: string;
  passwordErrors?: string;
}
