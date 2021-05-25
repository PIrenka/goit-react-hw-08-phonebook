import { Component, Suspense, lazy } from 'react';
import styles from './App.module.css';

import LinearProgress from '@material-ui/core/LinearProgress';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import { connect } from 'react-redux';
import { getUser } from '../../redux/auth/authOperations';
import { getLoading } from '../../redux/phoneBook/phoneSelector';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../../PrivatRoute';
import PublicRoute from '../../PublicRoute';
import AppBar from './Components/AppBar/AppBar';

const HomePage = lazy(() =>
  import('./Components/AppBar/HomePage' /* webpackChunkName: "homePage" */),
);
const Contacts = lazy(() =>
  import('./Components/Contacts' /* webpackChunkName: "contacts" */),
);
const Login = lazy(() =>
  import('./Components/Login/Login' /* webpackChunkName: "Login" */),
);
const Register = lazy(() =>
  import('./Components/Register/Register' /* webpackChunkName: "Register" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentsUser();
  }
  render() {
    return (
      <div className={styles.App}>
        {this.props.isLoading && <LinearProgress />}
        <AppBar />

        <Suspense
          fallback={
            <p>
              <LinearProgress color="secondary" />
            </p>
          }
        >
          <Switch>
            <PublicRoute
              path="/homePage"
              restricted
              redirectTo="/Login"
              component={HomePage}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={Register}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={Login}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={Contacts}
            />
          </Switch>
        </Suspense>

        {/* <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
