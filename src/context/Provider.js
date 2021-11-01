import React, { useState, useEffect } from 'react';
import TodoContext from './TodoContext';

export default function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const handleClick = (state) => {
    setTasks([...tasks, state])
  }

  const changeStatus = ({ target }) => {
    setTasks(tasks.map((task) => (
      task.id === target.id ? {...task, isDone: !task.isDone} : task
    )))
  }

  useEffect(() => {
    const API = 'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact2021/todos';
    async function fetchData() {
      const request = await fetch(API);
      const json = await request.json();
      setTasks(json);
    }
    fetchData();
  }, []);

  const context = { tasks, handleClick, changeStatus }
  return(
    <TodoContext.Provider value={ context }>
      { children }
    </TodoContext.Provider>
  )
}
