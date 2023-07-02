type IRowCheckboxValue = string | number;

export interface IRowCheckbox<T> {
  value: T;
  label: string;
  isActive: boolean;
  onChange: (value: T) => void;
}
