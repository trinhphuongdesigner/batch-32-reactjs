import Loading from 'components/loading';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteMissionAction,
  deleteMissionSuccessAction,
  updateMissionAction,
  updateMissionSuccessAction,
} from 'store/todo/action';

function List(props) {
  const missions = useSelector((state) => state.todoReducer.missions);

  return missions.length > 0 ? (
    missions.map((m) => <ListItem key={m.id} content={m.name} id={m.id} />)
  ) : (
    <>
      <ListItem
        classes="text-danger"
        content="Không có nhiệm vụ"
        isHiddenButton
      />
    </>
  );
}

export default List;

function ListItem({ id, content, classes, isHiddenButton = false }) {
  const [mission, setMission] = useState('');

  const dispatch = useDispatch();
  const loadingDelete = useSelector((state) => state.todoReducer.loadingDelete);
  const loadingUpdate = useSelector((state) => state.todoReducer.loadingUpdate);

  const onDeleteMission = () => {
    dispatch(deleteMissionAction(id));

    setTimeout(() => {
      dispatch(deleteMissionSuccessAction(id));
    }, 2000);
  };

  const onChangeMission = (e) => {
    setMission(e.target.value);
  };

  const onUpdateMission = () => {
    dispatch(updateMissionAction(id));

    setTimeout(() => {
      dispatch(updateMissionSuccessAction({ id, mission }));
    }, 1000);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && mission) {
      onUpdateMission();
    }
  };

  useEffect(() => {
    setMission(content);
  }, [content]);

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className={`form-control ${classes}`}
        placeholder="Nhiệm vụ 1"
        value={mission}
        onChange={onChangeMission}
        onKeyDown={onKeyDown}
      />

      {!isHiddenButton && (
        <div className="input-group-append">
          <button
            className="btn btn-outline-danger"
            type="button"
            disabled={loadingDelete.includes(id)}
            onClick={onDeleteMission}
          >
            {loadingDelete.includes(id) ? (
              <Loading />
            ) : (
              <i className="fa-solid fa-trash" />
            )}
          </button>

          <button
            className="btn btn-outline-info"
            type="button"
            disabled={loadingUpdate.includes(id)}
            onClick={onUpdateMission}
          >
            {loadingUpdate.includes(id) ? (
              <Loading />
            ) : (
              <i className="fas fa-edit" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
