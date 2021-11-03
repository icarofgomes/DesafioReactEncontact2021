import React from 'react';
import { CheckAll, InputTaskField, Router, BottomMenu } from '.';

export default function MainContent() {
  return(
    <main className="bg-white w-3/6 mx-auto rounded-lg shadow-2xl">
      <section className="flex">
        <CheckAll />
        <InputTaskField />
      </section>
      <hr />
      <Router />
      <hr />
      <BottomMenu />
  </main>
  )
}
