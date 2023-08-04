import React from 'react';
import { useSelector } from 'react-redux';

function List(props) {
  const missions = useSelector((state) => state.todoReducer.missions);

  console.log('««««« missions »»»»»', missions);

  return missions.length > 0 ? (
    missions.map((m) => <ListItem key={m.id} content={m.name} />)
  ) : (
    <ListItem classes="text-danger" content="Không có nhiệm vụ" isHiddenButton />
  );
}

export default List;

function ListItem({ content, classes, isHiddenButton = false }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className={`form-control ${classes}`}
        placeholder="Nhiệm vụ 1"
        defaultValue={content}
        disabled
      />

      {!isHiddenButton && (
        <div className="input-group-append">
          <button className="btn btn-outline-danger" type="button">
            <i className="fa-solid fa-trash" />
          </button>
        </div>
      )}
    </div>
  );
}
