import React from "react";
import { Header, MainContent } from './components'

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <MainContent />
    </div>
  );
}
