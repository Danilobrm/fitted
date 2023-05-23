export interface IButton {
  title: string;
  conditionToDisable: boolean;
  action: () => void;
}
