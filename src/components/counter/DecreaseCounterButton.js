import React from 'react';
import { useDispatch } from 'react-redux';

import { decreaseCountAction } from 'store/counter/action';

function DecreaseCounterButton({onMinus}) {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-secondary"
      onClick={() => {
        dispatch(decreaseCountAction(5));
      }}
      // onClick={onMinus}
    >
      Decrease
    </button>
  );
}

export default DecreaseCounterButton;
