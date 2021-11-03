import React from 'react';
import { TasksLeft, Filters, ClearCompleted } from '.';

export default function BottomMenu() {
  return(
    <section>
      <TasksLeft />
      <Filters />
      <ClearCompleted />
    </section>
  )
}
