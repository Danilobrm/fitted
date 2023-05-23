import {Dispatch, SetStateAction} from 'react';
import {ImageSourcePropType} from 'react-native/types';

export interface IInput {
  icon: ImageSourcePropType;
  placeholder: string;
  hideText?: true;
  setText: Dispatch<SetStateAction<string>>;
  text: string;
  type: 'email' | 'text';
}
