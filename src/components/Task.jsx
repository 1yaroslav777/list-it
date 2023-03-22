import React from 'react';

const Task = ({ task, deleteTask, completeTask }) => {
  return (
    <div className="task-item">
      <div className={task.completed ? 'task completed' : 'task'}>
        <span>{task.task}</span>
      </div>

      <button className="completed-btn" onClick={() => completeTask(task.id)}>
        <img src="./img/complete.svg" alt="complete button" />
      </button>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        <img src="./img/delete.svg" alt="delete button" />
      </button>
    </div>
  );
};

export default Task;
