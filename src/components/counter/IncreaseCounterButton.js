import React from 'react';
import { useDispatch } from 'react-redux';

import { increaseCountAction } from 'store/counter/action';

function IncreaseCounterButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        dispatch(increaseCountAction(10));
      }}
      // onClick={onPlus}
    >
      Increase
    </button>
  );
}

export default IncreaseCounterButton;
