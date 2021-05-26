import { useState } from 'react';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/auth/operation_auth';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('ciba@gmail.com');
  const [password, setPassword] = useState('12345qqqq');

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    dispatch(login(payload));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.span}>Password</span>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
