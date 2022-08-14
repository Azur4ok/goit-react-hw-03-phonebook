import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
