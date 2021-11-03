import React, { useContext, useEffect, useState } from 'react';
import TodoContext from '../context/TodoContext';
import { ItemList } from '.';

type AppProps = {
  page: string;
};

type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
};

export default function TasksField({ page }: AppProps) {
  const { tasks } = useContext(TodoContext);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    switch(page) {
      case 'completed':
        setTaskList(tasks.filter((task: TaskType) => task.isDone === true));
        break;
      case 'active':
        setTaskList(tasks.filter((task: TaskType) => task.isDone === false));
        break;
      default:
        setTaskList(tasks)
        break;
    }
  },[ tasks, page ])

  return(
    <section className="p-2 w-full">
      {
        taskList.map((task: TaskType) => (
          <ItemList key={ task.id } task={ task } />
        ))
      }
    </section>
  )
}
