import styles from "./ContactItem.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../Redux/Phone/operationApi";
import { getUniqContact } from "../../Redux/Phone/phone_selector";

const ContactItem = ({ onDeleteContact, contacts }) => (
  <div>
    {" "}
    <ul className={styles.contact_list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={styles.contact_item} key={id}>
            {" "}
            <span className={styles.contact_item_name}>{name}:</span>
            <span className={styles.contact_item_tel}>{number}</span>{" "}
            <button
              type="submit"
              className={styles.contact_btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>{" "}
  </div>
);
ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  contacts: getUniqContact(state),
});
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(deleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
