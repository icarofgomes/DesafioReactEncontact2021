import React, {useState, useContext} from 'react';
import TodoContext from '../context/TodoContext';

const INITIAL_STATE = {
  id: '',
  title: '',
  isDone: false,
}

export default function InputTaskField({ task = INITIAL_STATE }) {
  const [currentTask, setCurrentTask] = useState(task);
  const { addTask, tasks } = useContext(TodoContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask({
      id: `nt${tasks.length + 1}${Math.round(Math.random()*100)}`,
      title: e.target.value,
      isDone: false,
    })
  }

  const submitButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(currentTask);
    setCurrentTask(INITIAL_STATE);
  }

  return (
    <form onSubmit={ (e) => submitButton(e) }>
      <label htmlFor="input-task">
        <input
          type="text"
          id="input-task"
          onChange={ handleChange }
          value={ currentTask.title }
        />
      </label>
    </form>
  )
}
