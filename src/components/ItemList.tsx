import React, { useState, useContext, useRef, useLayoutEffect } from 'react';
import TodoContext from '../context/TodoContext';

type AppProps = {
  task: {
    id: string,
    title: string,
    isDone: boolean
  };
};
type KeyEvent = React.KeyboardEvent<HTMLInputElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default function ItemList({ task }: AppProps) {
  const { deleteItem, editItem, changeStatus } = useContext(TodoContext);
  const [showButton, setShowButton] = useState(false);
  const [localValue, setLocalValue] = useState(task.title)
  const [edit, setEdit] = useState(false);
  const editFocus = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if(edit && (null !== editFocus.current)) {
      editFocus.current.focus();
    }
  }, [edit])

  const updateTitleKey = (e: KeyEvent ) => {
    if(e.key === 'Enter') {
      editItem(task.id, localValue);
      setEdit(false);
    }
  }

  const updateTitleBlur = (e: ChangeEvent) => {
    if(e.type === 'blur') {
      editItem(task.id, localValue);
      setEdit(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value)
  }

  return(
    <form
      onMouseOut={() => setShowButton(false)}
      onMouseOver={() => setShowButton(true)}
      onDoubleClick={() => setEdit(true)}
      className="flex justify-between"
      >
      <section>
        <label htmlFor={ task.id }>
          <input
            className="h-5 w-5"
            type="checkbox"
            id={ task.id }
            checked={ task.isDone }
            onChange={ changeStatus }
          />
        </label>
        <label htmlFor={`task-title${task.id}`}>
          <input
            type="text"
            className="bg-white text-xl p-2 mx-1 w-5/6"
            value={ localValue }
            disabled={ !edit }
            id={`task-title${ task.id }`}
            onChange={ handleChange }
            onKeyDown={ (e) => updateTitleKey(e) }
            onBlur={ (e) => updateTitleBlur(e) }
            ref={ editFocus }
          />
        </label>
      </section>
      <button
        style={{display: showButton ? 'inline-block' : 'none' }}
        className="bg-red-200 rounded-full h-6 w-6 px-1.5 mr-2 my-auto flex items-center
          justify-center text-center text-white hover:bg-red-400"
        onClick={() => deleteItem(task.id)}
      >
        x
      </button>
    </form>
  )
}
