import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Task from '../components/Task';

function ListItens() {

  const { todos } = useContext(AppContext);

  return ( 
    <ul>
      { todos.map((todo, index) => {
        return (
          <Task
            key={index}
            todo={todo}
            index={index}
          />
        );
      })}
    </ul>
  );
}

export default ListItens;