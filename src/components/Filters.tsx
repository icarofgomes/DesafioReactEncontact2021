import React from 'react';
import { Link } from 'react-router-dom';

export default function Filters() {
  return(
    <section>
      <Link to="/">All</Link>
      <Link to="/completed">Completed</Link>
      <Link to="/active">Active</Link>
    </section>
  )
}
