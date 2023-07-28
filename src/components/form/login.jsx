import React, { useState } from 'react';
import axios from 'axios';

function LoginForm(props) { 
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  console.log('««««« user »»»»»', user);

  // const onLogin = (e) => {
  //   e.preventDefault();
  
  //   const url = 'https://batch-293-0-nodejs.onrender.com/admin/employees/login';

  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // Xử lý kết quả JSON ở đây
  //       console.log(json);
  //     })
  //     .catch((error) => {
  //       // Nếu có lỗi
  //       console.error(error);
  //     });
  // };

  const onLogin = (e) => {
    e.preventDefault();
  
    const url = 'https://batch-293-0-nodejs.onrender.com/admin/employees/login';

    axios
    .post(url, user)
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.error(err);
    });
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
