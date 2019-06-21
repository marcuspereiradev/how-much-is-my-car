import React from 'react';

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

export default Select;
