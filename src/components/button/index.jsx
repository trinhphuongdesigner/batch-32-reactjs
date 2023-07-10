import React from 'react';

import './button.css';

export default function Button({ icon, name, classes, onClick}) {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>
      <span className="icon icon--white">{icon}</span>
      {name}
    </button>
  );
};
