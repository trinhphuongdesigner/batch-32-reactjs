import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import InputGroup from 'components/form/inputGroup';

const Form = () => {
  const validation = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
    },

    validationSchema: Yup.object({
      // username: Yup.string()
      //   .min(6, 'Mininum 6 characters')
      //   .max(12, 'Maximum 12 characters')
      //   .required('Eh điền đi mày'),

      email: Yup.string().email('Invalid email format').required('Required!'),

      firstName: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required tên!'),

      lastName: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required họ!'),

      password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .max(12, 'Minimum 12 characters')
        .required('Required!'),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "Password's not match")
        .required('Required nhập lại MK'),
    }),

    onSubmit: (values) => {
      console.log('««««« values »»»»»', values);
    },
  });

  console.log('««««« validation.errors »»»»»', validation.errors);
  console.log('««««« validation.touched »»»»»', validation.touched);
  // console.log('««««« validation »»»»»', validation);

  return (
    <div>
      <h1>Form group</h1>
      <div className="d-flex flex-column" >
        <InputGroup
          label="Email"
          name="email"
          validation={validation}
        />

        <InputGroup
          label="First name"
          name="firstName"
          validation={validation}
        />

        <InputGroup
          label="Last name"
          name="lastName"
          validation={validation}
        />

        <InputGroup
          label="password"
          type="password"
          name="password"
          validation={validation}
        />

        <InputGroup
          label="confirmPassword"
          type="confirmPassword"
          name="confirmPassword"
          validation={validation}
        />
        <button onClick={validation.handleSubmit}>Click to submit</button>
      </div>
    </div>
  );
};

export default Form;
