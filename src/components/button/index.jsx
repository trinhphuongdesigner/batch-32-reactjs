import React from 'react';

import './button.css';

export default function Button({ icon, name, classes}) {
  return (
    <button className={`btn ${classes}`}>
      <span className="icon icon--white">{icon}</span>
      {name}
    </button>
  );
};
