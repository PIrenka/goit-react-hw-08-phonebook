import { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

// import * as actions from '../../redux/phoneBookNoToolkits/actions';
import * as actions from '../../redux/phoneBook/actions';
import Label from '../Label';

import styles from './stylesContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };
  nameId = uuid();

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const existName = this.props.items.some(
      item => item.name === this.state.name,
    );
    const existPhoneNumber = this.props.items.some(
      item => item.phone === this.state.phone,
    );
    if (existName || existPhoneNumber) {
      window.alert(
        `LocalHost:3000 says contact with such name or phone number is already exists`,
      );
      this.reset();
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    return this.setState({ name: '', phone: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={styles.form}>
        <Label title="Name">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChangeForm}
            id={this.nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>

        <Label title={'Number'}>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={this.state.phone}
            onChange={this.handleChangeForm}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </Label>
        <button type="submit" className={styles.btnAddContact}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ contacts: { items } }) => {
  return { items };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, phone }) => dispatch(actions.addContact({ name, phone })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
