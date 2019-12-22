import React from 'react';
import './style.scss';

function textInput({ name, placeholder, value, type }) {
  return (
    <input type={type} placeholder={placeholder} value={value} name={name} />
  );
}

export default textInput;
