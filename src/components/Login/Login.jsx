import { Component } from 'react';
import styles from './Login.module.css';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth/operation_auth';

class Login extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);
    this.reset();
  };
  reset = () => {
    return this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.form_container}>
        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>Password</span>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: login,
};
export default connect(null, mapDispatchToProps)(Login);
