import React, { useState, useContext, useRef, useEffect } from 'react';
import TodoContext from '../context/TodoContext';

export default function ItemList({ task, changeStatus }) {
  const { deleteItem, editItem } = useContext(TodoContext);
  const [showButton, setShowButton] = useState(false);
  const [localValue, setLocalValue] = useState(task.title)
  const [edit, setEdit] = useState(false);
  const editFocus = useRef(null);

  useEffect(() => {
    edit && editFocus.current.focus();
  }, [edit])

  const updateTitle = (e) => {
    if(e.key === 'Enter') {
      editItem(task.id, localValue);
      setEdit(false);
    }
    if(e.type === 'blur') {
      editItem(task.id, localValue);
      setEdit(false);
    }
  }

  const handleChange = ({target}) => {
    setLocalValue(target.value)
  }

  return(
    <form
      onMouseOut={() => setShowButton(false)}
      onMouseOver={() => setShowButton(true)}
      onDoubleClick={() => setEdit(true)}
      >
      <input
        type="checkbox"
        id={ task.id }
        checked={ task.isDone }
        onChange={ changeStatus }
      />
      <label htmlFor={`task-title${task.id}`}>
        <input
          type="text"
          value={ localValue }
          disabled={!edit}
          id={`task-title${task.id}`}
          onChange={ handleChange }
          onKeyDown={(e) => updateTitle(e)}
          onBlur={(e) => updateTitle(e)}
          ref={editFocus}
        />
      </label>
      <button
        style={{display: showButton ? 'inline-block' : 'none' }}
        onClick={() => deleteItem(task.id)}
      >
        X
      </button>
    </form>
  )
}
