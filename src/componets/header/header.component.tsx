import React from 'react';
import './header.styles.scss';
import logo from '../../assets/images/logo.svg';

export const HeaderComponent: React.FC = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
