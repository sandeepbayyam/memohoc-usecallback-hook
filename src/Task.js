import React from 'react';
function Task(props) {
  console.log(props.t, 'Task component renders');
  return (
    <li className="betterview">
      {props.title}
      <b>{props.status}</b>
      <button
        onClick={() => {
          props.toggleStatus(props.i);
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          props.deleteTask(props.i);
        }}
      >
        Delete
      </button>
    </li>
  );
}
export default React.memo(Task);
