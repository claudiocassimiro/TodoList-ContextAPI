import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

function Form() {

  const [task, setTask] = useState('');
  const { addTodo } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(task);
    setTask('');
  }

    return (
      <form onSubmit={handleSubmit}>
          <label>
            Task:
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </label>
          <button
            type="submit"
          >
            Adicionar
          </button>
      </form>
    );
}

export default Form;
