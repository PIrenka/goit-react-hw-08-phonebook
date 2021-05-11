import styles from './stylesContactList.module.css';
import { connect } from 'react-redux';
// import * as actions from '../../redux/phoneBookNoToolkits/actions';
import * as actions from '../../redux/phoneBook/actions';

const ContactListItem = ({ id, name, phone, onDeleteContact }) => {
  return (
    <li className={styles.contactListItem}>
      {name}: {phone}
      <button onClick={() => onDeleteContact(id)} className={styles.btnDelete}>
        delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);

  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(({ name, id, phone }) => (
        <ContactListItem
          {...{ name, id, phone }}
          onDeleteContact={onDeleteContact}
          key={id}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(actions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
