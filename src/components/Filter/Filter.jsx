import PropTypes from "prop-types";

import styles from "./Filter.module.css";
import { connect } from "react-redux";
import * as actions from "../../Redux/Phone/phone-actions";
import {getFilter} from "../../Redux/Phone/phone_selector"

const Filter = ({ value, onChange }) => (
  <div className={styles.container}>
    <label className={styles.label}>
      Find contact by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />{" "}
    </label>
  </div>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return { value: getFilter(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(actions.filterChange(e.currentTarget.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
