import React, { Component } from 'react';
import styles from './Header.module.scss'; // Import css modules stylesheet as styles
import '../../styles/styles.scss'; // Import regular stylesheet

class Header extends Component {
  render() {
    // reference as a js object
    return <button className={styles.test}>Hello There!</button>;
  }
}

export default Header;