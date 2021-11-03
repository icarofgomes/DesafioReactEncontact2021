import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

export default function ClearCompleted() {
  const { clearCompleted } = useContext(TodoContext);
  return(
    <button onClick={ clearCompleted }>
      Clear Completed
    </button>
  )
}
