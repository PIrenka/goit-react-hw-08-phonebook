import { connect } from "react-redux";
import AuthNav from "./authNav";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import styles from "./AppBar.module.css";
import { getIsAuthenticated } from "../../Redux/auth/auth_selector";



const AppBar = ({ isLoginOn }) => (
  <header className={styles.header}>
    <Navigation />
    {isLoginOn ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isLoginOn: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
