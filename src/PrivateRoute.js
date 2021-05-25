import { connect } from "react-redux";
import { getIsAuthenticated } from './Redux/auth/auth_selector';
import { Route, Redirect } from 'react-router-dom';
const PrivatRoute = ({
    component: Component,
    isLoginOn,
   redirectTo,
    ...routeProps
  }) => (
    <Route
      {...routeProps}
      render={props =>
        isLoginOn ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );

const mapStateToProps = state => ({
    isLoginOn: getIsAuthenticated(state),
  });
  
  export default connect(mapStateToProps)(PrivatRoute);