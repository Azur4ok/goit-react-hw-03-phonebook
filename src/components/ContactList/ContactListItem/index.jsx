import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactListItem.module.css';

export const ContactListItem = ({ contact, onRemove }) => {
  const onClickDelete = () => {
    if (window.confirm('Are you sure to delete this contact')) {
      onRemove(contact.id);
    }
  };
  
  return (
    <li className={styles.list}>
      <span className={styles.text}>
        {contact.name}: {contact.number}
      </span>
      <button className={styles.button} onClick={onClickDelete}>
        delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
};
