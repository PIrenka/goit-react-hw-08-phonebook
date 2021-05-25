import { connect } from "react-redux";
import { getIsAuthenticated } from './Redux/auth/auth_selector';
import { Route, Redirect } from 'react-router-dom';
const PublicRoute = ({
    component: Component,
    isLoginOn,
   redirectTo,
    ...routeProps
  }) => (
    <Route
    {...routeProps}
    render={props =>
      isLoginOn && routeProps.restricted ? (
        <Redirect to={redirectTo}/>
      ) : (
        <Component {...props} />
      )
    }
  />
  );

const mapStateToProps = state => ({
    isLoginOn: getIsAuthenticated(state),
  });
  
  export default connect(mapStateToProps)(PublicRoute);