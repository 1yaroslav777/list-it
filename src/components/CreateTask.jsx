import React from 'react';

const CreateTask = ({ addTask }) => {
  const [input, setInput] = React.useState('');

  const onChangeInput = (event) => {
    setInput(event.currentTarget.value);
  };
  const onAdd = (event) => {
    addTask(input);
    setInput('');
  };

  return (
    <>
      <span>Lets create a task!</span>
      <input placeholder="Your task..." value={input} onChange={onChangeInput} />
      <button className="add-task" onClick={onAdd}>
        Add new task
      </button>
    </>
  );
};

export default CreateTask;
