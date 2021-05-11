import styles from './stylesFilter.module.css';

import { connect } from 'react-redux';
// import * as actions from '../../redux/phoneBookNoToolkits/actions';
import * as actions from '../../redux/phoneBook/actions';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      placeholder="Enter name for search"
    />
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContacts(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
