import React from 'react';
import { InputTaskField, TasksField, CheckAll, Header, BottomMenu } from '../components';

export default function Main() {
  return(
    <main>
      <Header />
      <CheckAll />
      <InputTaskField />
      <TasksField page="main"/>
      <BottomMenu />
    </main>
  )
}
