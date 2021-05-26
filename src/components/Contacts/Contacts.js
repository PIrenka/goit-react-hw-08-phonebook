import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContact } from '../../Redux/Phone/operationApi';

import FormPhonebook from '../PhoneBook';
import ContactItem from '../ContactItem';
import Filter from '../Filter';
import Section from '../Section';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContact(), [dispatch]));

  return (
    <div>
      <FormPhonebook />
      <Filter />
      <Section title="Contacts list">
        <ContactItem />
      </Section>
    </div>
  );
};

export default Contacts;
