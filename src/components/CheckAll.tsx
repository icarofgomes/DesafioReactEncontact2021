import React, {useContext} from 'react';
import TodoContext from '../context/TodoContext';

export default function CheckAll() {
  const { SelectAll} = useContext(TodoContext);
  return(
    <button type="button" onClick={ SelectAll }>
      Selecionar todos
    </button>
  )
}
