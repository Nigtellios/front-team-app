import React, { Component } from 'react';
import logo from '../../logo.svg';
import style from './Header.module.scss';
import '../../styles/styles.scss';

class Header extends Component {
  render() {
    return (
      <header className={style.mainHeader}>
        <div className={style.mainHeader__logoBox}>
          <img src={logo} className={style.mainHeader__logo} alt="logo" />
        </div>
        <div className={style.mainHeader__menuBox}>
          <ul>
            <li>There Would be NAVIGATION</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;