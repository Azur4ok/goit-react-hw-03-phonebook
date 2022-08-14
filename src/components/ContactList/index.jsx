import React from 'react';
import PropTypes from 'prop-types';

import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts &&
        contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onRemove={onRemoveContact}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
