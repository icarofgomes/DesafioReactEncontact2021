import React, { useContext, useEffect, useState } from 'react';
import TodoContext from '../context/TodoContext';
import { ItemList } from '.';

export default function TasksField() {
  const { tasks, changeStatus } = useContext(TodoContext);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(tasks);
  },[ tasks ])

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
