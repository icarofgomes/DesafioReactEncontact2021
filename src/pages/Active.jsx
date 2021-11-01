import React from 'react';
import { InputTaskField, TasksField, CheckAll, Header } from '../components';

export default function Active() {
  return(
    <div>
      <Header />
      <CheckAll />
      <InputTaskField />
      <TasksField page="active"/>
    </div>
  )
};
