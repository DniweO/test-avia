import React from 'react';
import './row-checkbox.styles.scss';
import { IRowCheckbox } from './row-checkbox.model';

export function RowCheckboxComponent<T>({ value, label, onChange }: IRowCheckbox<T>) {
  return (
    <label className="row-checkbox">
      <input className="row-checkbox__input" type="checkbox" onClick={() => onChange(value)} />
      <span className="row-checkbox__label">{label}</span>
    </label>
  );
}
