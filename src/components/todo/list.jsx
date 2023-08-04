import Loading from 'components/loading';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMissionAction, deleteMissionSuccessAction } from 'store/todo/action';

function List(props) {
  const missions = useSelector((state) => state.todoReducer.missions);

  return missions.length > 0 ? (
    missions.map((m) => <ListItem key={m.id} content={m.name} id={m.id} />)
  ) : (
    <ListItem classes="text-danger" content="Không có nhiệm vụ" isHiddenButton />
  );
}

export default List;

function ListItem({ id, content, classes, isHiddenButton = false }) {
  const dispatch = useDispatch();
  const loadingDelete = useSelector((state) => state.todoReducer.loadingDelete);

  const onDeleteMission = () => {
    dispatch(deleteMissionAction(id));

    setTimeout(() => {
      dispatch(deleteMissionSuccessAction(id))
      }, 2000)
  };

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
          <button className="btn btn-outline-danger" type="button" disabled={loadingDelete.includes(id)} onClick={onDeleteMission}>
            {
              loadingDelete.includes(id) ? <Loading /> : <i className="fa-solid fa-trash" />
            }
          </button>
        </div>
      )}
    </div>
  );
}
