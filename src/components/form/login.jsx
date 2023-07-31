import React, { useState } from 'react';

import { axiosClient } from 'helper/axiosClient';

function LoginForm(props) { 
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onLogin = async (e) => {
    e.preventDefault();

    const url = '/admin/employees/login';
    try {
      const response = await axiosClient.post(url, user);

      localStorage.setItem("TOKEN", response.data.token);
      localStorage.setItem("REFRESH_TOKEN", response.data.refreshToken);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  const onChange = (e, fieldName) => {
    setUser((prev) => ({
      ...prev,
      [fieldName]: e.target.value,
    }));
  };

  return (
    <form className="p-5" onSubmit={onLogin}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>

        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={user.email}
          onChange={(e) => onChange(e, 'email')}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>

        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={user.password}
          onChange={(e) => onChange(e, 'password')}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
