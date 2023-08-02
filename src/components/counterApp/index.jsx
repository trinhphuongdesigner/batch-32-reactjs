import React, { useState } from 'react';

import CounterLabel from 'components/counter/CounterLabel';
import DecreaseCounterButton from 'components/counter/DecreaseCounterButton';
import IncreaseCounterButton from 'components/counter/IncreaseCounterButton';

function CounterApp() {
  // const [count, setCount] = useState(0);
  return (
    <div className="container-xl d-flex flex-column align-items-center py-4">
      <DecreaseCounterButton/>

      <CounterLabel />

      <IncreaseCounterButton />
    </div>
  );
}

export default CounterApp;
