import React from 'react';

function InputGroup({
  label,
  type = 'text',
  name,
  value,
  placeholder = 'Please type in here',
  onChange,
}) {
  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
      />
    </label>
  );
}

export default InputGroup;
