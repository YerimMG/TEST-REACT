import React from 'react';
import './style.scss';

function textInput({ name, placeholder, value, type, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}

export default textInput;
