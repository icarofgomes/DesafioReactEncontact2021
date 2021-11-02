import React from 'react';
import { InputTaskField, TasksField, CheckAll, Header, BottomMenu } from '../components';

export default function Completed() {
  return(
    <div>
      <Header />
      <CheckAll />
      <InputTaskField />
      <TasksField page="completed"/>
      <BottomMenu />
    </div>
  )
};
