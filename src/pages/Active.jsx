import React from 'react';
import { InputTaskField, TasksField, CheckAll, Header, BottomMenu } from '../components';

export default function Active() {
  return(
    <div>
      <Header />
      <CheckAll />
      <InputTaskField />
      <TasksField page="active"/>
      <BottomMenu />
    </div>
  )
};
