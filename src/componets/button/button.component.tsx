import React from 'react';
import './button.styles.scss';
import { IButton } from './button.model';

export const ButtonComponent = ({ label, onClick }: IButton) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      {label}
    </button>
  );
};
