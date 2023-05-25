import {createContext} from 'react';

interface ICheckBoxContext {
  setToggleCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCheckBox: boolean;
}

const CheckBoxContext = createContext<ICheckBoxContext>({
  setToggleCheckBox: () => false,
  toggleCheckBox: false,
});

export {CheckBoxContext};
