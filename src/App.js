import { Component, Suspense, lazy } from 'react';
import './App.css';
// import styles from "./Routes/Route.module.css";
import LinearProgress from '@material-ui/core/LinearProgress';
import Section from './Components/Section';
// import HomePage from "./Components/AppBar/HomePage";
import { connect } from 'react-redux';
import { getUser } from './Redux/auth/operation_auth';
import { getLoading } from './Redux/Phone/phone_selector';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
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
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div>
        <Section>
          {this.props.isLoading && <LinearProgress color="secondary" />}
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
        </Section>
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
