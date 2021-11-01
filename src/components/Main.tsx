import React from 'react';
import { InputTaskField, TasksField, CheckAll } from '.';

export default function Main() {
  return(
    <main>
      <h1>Todos</h1>
      <CheckAll />
      <InputTaskField />
      <TasksField />
    </main>
  )
}