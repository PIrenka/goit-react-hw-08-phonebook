import { useSelector } from 'react-redux';
import { getIsAuthenticated } from './Redux/auth/auth_selector';
import { Route, Redirect } from 'react-router-dom';
const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isLoginOn = useSelector(state => getIsAuthenticated(state));
  return (
    <Route
      {...routeProps}
      render={props =>
        isLoginOn && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;