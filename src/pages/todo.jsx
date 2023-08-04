import React from 'react';

import Add from 'components/todo/add';
import List from 'components/todo/list';

function TodoPage(props) {
  return (
    <div>
      <Add />
      <List />
    </div>
  );
}

export default TodoPage;