import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

export default function ItemList({ task, changeStatus }) {
  const { deleteItem } = useContext(TodoContext);
  const [showButton, setShowButton] = useState(false);
  return(
    <div
      onMouseOut={() => setShowButton(false)}
      onMouseOver={() => setShowButton(true)}
      >
      <input
        type="checkbox"
        id={ task.id }
        checked={ task.isDone }
        onChange={ changeStatus }
      />
      <input type="text" value={ task.title } disabled/>
      <button
        style={{display: showButton ? 'inline-block' : 'none' }}
        onClick={() => deleteItem(task.id)}
      >
        X
      </button>
    </div>
  )
}
