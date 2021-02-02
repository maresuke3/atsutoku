//modules
import React from 'react';
//static assets
import './css/reset.css';
import './css/header.css';
import logo from './img/hotSale.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          <img className="header__logo__img" src={logo} alt="logo" />
          <p className="header__logo__title">
            <h1>Atsutoku</h1>
          </p>
        </a>
      </div>
    </header>
  );
};
