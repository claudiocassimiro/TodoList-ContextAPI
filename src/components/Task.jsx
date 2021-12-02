import { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

function Task({todo, index}) {

  const { removeTask, editTask } = useContext(AppContext);
  const [hiddeInput, setHiddeInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function sendEditTask(index) {
    editTask(index, inputValue);
    setInputValue('');
    setHiddeInput(false);
  }

  return ( 
    <div key={ index } id={ index }>
            <li>{todo}</li>
            <button
              onClick={ () => removeTask(index) }
            >
              Deletar
            </button>
            <button
              onClick={ () => setHiddeInput(true) }
            >
              Editar
            </button>
            { hiddeInput && (
              <div>
                <input 
                  type="text"
                  name="inputValue"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="button"
                  onClick={ () => sendEditTask(index)}
                >
                  Finalizar
                </button>
              </div>
            )}
          </div>
   );
}

export default Task;