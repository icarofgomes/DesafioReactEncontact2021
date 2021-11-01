import React, { useContext, useEffect, useState } from 'react';
import TodoContext from '../context/TodoContext';
import { ItemList } from '.';

export default function TasksField({ page }) {
  const { tasks, changeStatus } = useContext(TodoContext);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    switch(page) {
      case 'completed':
        setTaskList(tasks.filter((task) => task.isDone === true));
        break;
      case 'active':
        setTaskList(tasks.filter((task) => task.isDone === false));
        break;
      default:
        setTaskList(tasks)
        break;
    }
  },[ tasks, page ])

  return(
    <section>
      {
        taskList.map((task) => (
          <ItemList key={ task.id } task={ task } changeStatus={ changeStatus }/>
        ))
      }
    </section>
  )
}
