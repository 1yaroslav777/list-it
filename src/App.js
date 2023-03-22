import React from 'react';
import CreateTask from './components/CreateTask';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = React.useState([]);
  console.log(tasks);
  const addTask = (input) => {
    if (input) {
      const newTask = {
        id: tasks.length + 1,
        task: input,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  const completeTask = (id) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : { ...task },
      ),
    ]);
  };

  return (
    <div className="wrapper">
      <span>List It</span>
      <div className="content">
        <CreateTask addTask={addTask} />

        <span className="your-tasks">Tasks:{tasks.length}</span>

        <div className="tasks">
          {tasks.map((task) => (
            <Task key={task.id} task={task} deleteTask={deleteTask} completeTask={completeTask} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
