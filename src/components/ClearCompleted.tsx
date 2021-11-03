import React, { useContext, useState, useEffect } from 'react';
import TodoContext from '../context/TodoContext';

type TaskType = {
  id: string,
  title: string,
  isDone: boolean,
};

export default function ClearCompleted() {
  const { clearCompleted, tasks } = useContext(TodoContext);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    tasks.some((task: TaskType) => task.isDone) ? setCompleted(true) : setCompleted(false);
  },[tasks]);

  return(
    <section className={`p-2 ${ completed ? 'visible' : 'invisible'}`}>
      <button
        className="bg-red-400 px-2"
        type="button"
        onClick={ clearCompleted }>
        Limpar Completas
      </button>
    </section>
  )
}
