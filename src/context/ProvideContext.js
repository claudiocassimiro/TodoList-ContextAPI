import { useState } from 'react';
import AppContext from "./AppContext";

const ProvideContext = ({ children }) => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }
  
  const editTask = (index, newText) => {
    const newTodos = todos.map((todo, i) => i === index ? newText : todo );
    setTodos(newTodos);
  }

  return (
      <AppContext.Provider value={{todos, addTodo, removeTask, editTask}}>
        {children}
      </AppContext.Provider>
  );
};

export default ProvideContext;
