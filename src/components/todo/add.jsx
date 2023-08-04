import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMissionAction } from 'store/todo/action';

function Add(props) {
  const dispatch = useDispatch();
  const [mission, setMission] = useState('');

  const onChange = (e) => {
    setMission(e.target.value);
  };

  const onAddMission = () => {
    dispatch(addMissionAction(mission))

    setMission('');
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && mission) {
      onAddMission()
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type your mission..."
        value={mission}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      <div className="input-group-append">
        <button className="btn btn-outline-primary" type="button" onClick={onAddMission} disabled={!mission}>
          <i className="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  );
}

export default Add;
