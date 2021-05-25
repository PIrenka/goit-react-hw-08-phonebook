import shortid from "shortid";
import { Component } from "react";
import styles from "./FormPhonebook.module.css";
import { connect } from "react-redux";
import { addContact } from "../../Redux/Phone/operationApi";
import {getAllContacts} from "../../Redux/Phone/phone_selector";

class FormPhonebook extends Component {
  state = {
    name: "",
    number: "",
  };
  nameId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const sameName = this.props.items.some(
      (item) => item.name === this.state.name
    );
    if (sameName) {
      window.alert(
        `LocalHost:3000 says ${this.state.name} is already in contact`
      );
      this.reset();
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    return this.setState({ name: "", number: "" });
  };

  render() {
    console.log("re-render")
    return (
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label} htmlFor={this.nameId}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameId}
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
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {items: getAllContacts(state)}
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormPhonebook);
