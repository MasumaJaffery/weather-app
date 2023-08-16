import React from 'react';
import PropTypes from 'prop-types';

const SearchFilter = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search province..."
    value={value}
    onChange={onChange}
  />
);

SearchFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchFilter;
