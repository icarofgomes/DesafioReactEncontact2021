import React from 'react';
import { TasksLeft, Filters, ClearCompleted } from '.';

export default function BottomMenu() {
  return(
    <section className="flex justify-between">
      <TasksLeft />
      <Filters />
      <ClearCompleted />
    </section>
  )
}
