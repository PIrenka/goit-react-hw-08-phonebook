import { connect } from "react-redux";
import { getUserEmail } from "../../Redux/auth/auth_selector";
import { logOut } from "../../Redux/auth/operation_auth";
import styles from "../../Routes/Route.module.css";

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.name}> {email}</span>
    <button type="button" className={styles.btn} onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  email: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
