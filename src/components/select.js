import React from 'react';
import PropTypes from 'prop-types';

const Select = ({onChange, placeholder, collection, disabled}) => (
  <select onChange={onChange} disabled={disabled}>
    <option value=''>{placeholder}</option>
    {
      collection.map((item) => {
        return <option key={item.id} value={item.id}>{item.name}</option>
      })
    }
  </select>
)

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  collection: PropTypes.array,
  disabled: PropTypes.bool
};

export default Select;
