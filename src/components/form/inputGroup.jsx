import React from 'react';

function InputGroup({
  label,
  type = 'text',
  name,
  placeholder = 'Please type in here',
  validation,
}) {
  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={validation.values[name]} // validation.values.email
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        // validation={(e) => validation(e.target.value, name)}
      />
    </label>
  );
}

export default InputGroup;
