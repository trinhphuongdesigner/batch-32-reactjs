import React from 'react';

import './card.css';

function Card({
  image,
  name,
  role,
  birthday,
  mark,
  edu,
  address,
  email,
  phone,
}) {
  return (
    <div className="card d-flex">
      <img
        className="picture"
        src={image}
        alt="demo pic"
      />

      <div className="intro">
        <h4 className="display-one-line">{name}</h4>

        <p className="display-one-line">{role}</p>
      </div>

      <div className="info-warpper">
        <div className="info">
          <div className="icon d-flex">
            <i className="fa-regular fa-calendar-days" />

            <span>DOB</span>
          </div>

          <div className="info-content">{birthday}</div>
        </div>

        <div className="info">
          <div className="icon d-flex">
            <i className="fa-solid fa-heart" />

            <span>BG</span>
          </div>

          <div className="info-content">{mark}</div>
        </div>

        <div className="info">
          <div className="icon d-flex">
            <i className="fa-regular fa-calendar-days" />

            <span>EDU</span>
          </div>
          <div className="info-content">{edu}</div>
        </div>

        <div className="info">
          <div className="icon d-flex">
            <i className="fa-regular fa-calendar-days" />

            <span>RES</span>
          </div>

          <div className="info-content">{address}</div>
        </div>
      </div>

      <div className="contact-warpper">
        <div className="contact bg-red">
          <h5>EMAIL ID</h5>
          <div className="icon">
            <i
              className="fa-regular fa-envelope"
              style={{ color: '#fafcff' }}
            />

            <span>{email}</span>
          </div>
        </div>

        <div className="contact bg-green">
          <h5>PHONE NO</h5>
          <div className="icon">
            <i className="fa-solid fa-phone" style={{ color: '#fafcff' }} />

            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
