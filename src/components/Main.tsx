import React from 'react';
import { InputTaskField, TasksField } from '.';

export default function Main() {
  return(
    <main>
      <h1>Todos</h1>
      <InputTaskField />
      <TasksField />
    </main>
  )
}