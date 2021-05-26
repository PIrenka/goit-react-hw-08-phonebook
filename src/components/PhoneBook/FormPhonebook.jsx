import shortid from 'shortid';
import { useState } from 'react';
import styles from './FormPhonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/Phone/operationApi';
import { getAllContacts } from '../../Redux/Phone/phone_selector';

const FormPhonebook = () => {
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState(initialState);
  const { name, number } = state;

  const nameId = shortid.generate();
  const items = useSelector(state => getAllContacts(state));
  const handleChange = e => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const sameName = items.some(item => item.name === name);
    if (sameName) {
      window.alert(`LocalHost:3000 says ${name} is already in contact`);
      reset();
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setState(initialState);
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={nameId}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            id={nameId}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.span}>Tel</span>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default FormPhonebook;
