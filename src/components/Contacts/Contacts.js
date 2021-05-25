import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact } from '../../Redux/Phone/operationApi';
import { getLoading } from '../../Redux/Phone/phone_selector';
import FormPhonebook from '../PhoneBook';
import ContactItem from '../ContactItem';
import Filter from '../Filter';
import Section from '../Section';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div>
        <FormPhonebook />
        <Filter />
        <Section title="Contacts list">
          <ContactItem />{' '}
        </Section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContact()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
