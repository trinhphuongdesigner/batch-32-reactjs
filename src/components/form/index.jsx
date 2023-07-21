import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePass = (e) => {
    console.log('««««« asdasd »»»»»');
    setPassword(e.target.value);
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <h1>Form group</h1>
      <form className="d-flex flex-column" onSubmit={onSubmitForm}>
        <Input
          label="Username"
          name="username"
          value={username}
          onChange={onChangeUsername}
        />

        <Input
          label="First name"
          name="firstName"
          value={firstName}
          onChange={onChangeFirstName}
        />

        <Input
          label="Last name"
          name="lastName"
          value={lastName}
          onChange={onChangeLastName}
        />

        <Input
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={onChangePass}
        />
        <input type="submit" value="Submit" />
      </form>

      <h1>Input group</h1>
      <div className="d-flex flex-column">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChangeUsername}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePass}
          />
        </label>
        <button onClick={onSubmitForm}>Submit</button>
      </div>
    </div>
  );
};

export default Form;

const Input = ({
  label,
  type = 'text',
  name,
  value,
  placeholder = 'Please type in here',
  onChange,
}) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
