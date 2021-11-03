import React, { useContext, useEffect, useState } from 'react';
import TodoContext from '../context/TodoContext';

type TaskType = {
  id: string,
  title: string,
  isDone: boolean,
};


export default function TasksLeft() {
  const { tasks } = useContext(TodoContext);
  const [itemsLeft, setItemsLeft] = useState(0);

  useEffect(() => {
    const counter = tasks.length - tasks.filter((task: TaskType) => task.isDone === true).length;
    setItemsLeft(counter)
  }, [tasks]);

  const createField = () => {
    switch(itemsLeft) {
      case 0:
        return `nenhuma tarefa pendente.`;
      case 1:
        return `Pendente: ${itemsLeft} item.`;
      default:
        return `Pendente: ${itemsLeft} itens.`;
    }
  }

  return(
    <section className="w-4/12 p-2 text-sm">
      { createField() }
    </section>
  )
}
