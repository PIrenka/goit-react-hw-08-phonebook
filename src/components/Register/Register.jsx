import { useState } from 'react';
import styles from './Register.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/operation_auth';

const Register = () => {
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const { name, password, email } = state;

  const handleChange = e => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      name,
      password,
      email,
    };
    dispatch(register(payload));

    reset();
  };
  const reset = () => {
    return setState({ name: '', email: '', password: '' });
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          <span className={styles.span}>Name</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.span}>Password</span>
          <input
            className={styles.input}
            // type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.btn}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
