import React from 'react';
import Task from './Task';
function Todolist() {
  const [todolist, setTodoList] = React.useState([
    {
      title: 'car service',
      status: 'done',
    },
    {
      title: 'newbatch',
      status: 'notdone',
    },
    {
      title: 'mobile',
      status: 'notdone',
    },
  ]);
  const [newtask, setNewtask] = React.useState('');
  const handleTask = (e) => {
    setNewtask(e.target.value);
  };
  const addTask = () => {
    setTodoList([...todolist, newtask]);
  };
  const deleteTask = React.useCallback((index) => {
    var temp = todolist;
    temp.splice(index, 1);
    setTodoList([...temp]);
  }, []);
  const toggleStatus = React.useCallback((index) => {
    var temp = todolist;
    if (temp[index].status === 'done') {
      temp[index].status = 'notdone';
    } else {
      temp[index].status = 'done';
    }
    setTodoList([...temp]);
  }, []);
  return (
    <div className="betterview">
      {JSON.stringify(todolist)}
      <input type="text" onChange={handleTask} />
      <button onClick={addTask}>Add Task</button>
      {todolist.map((t, i) => {
        return (
          <Task
            title={t.title}
            status={t.status}
            i={i}
            key={i}
            deleteTask={deleteTask}
            toggleStatus={toggleStatus}
          ></Task>
        );
      })}
    </div>
  );
}
export default Todolist;
