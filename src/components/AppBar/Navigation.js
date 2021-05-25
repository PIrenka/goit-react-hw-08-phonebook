import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
import { connect } from 'react-redux';
import phoneBook from '../../image/3.png';
import { getIsAuthenticated } from '../../Redux/auth/auth_selector';

const Navigation = ({ isLoginOn }) => (
  <nav className={styles.nav}>
    <NavLink
      exact
      to="/homepage"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <img src={phoneBook} width="40" alt="PhoneBook" />
    </NavLink>

    {isLoginOn && (
      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isLoginOn: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
