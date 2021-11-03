import React from 'react';
import { Link } from 'react-router-dom';

export default function Filters() {
  return(
    <section className="p-2">
      <Link
        className="bg-blue-400 px-2 py-1 mx-0.5"
        to="/">
        Todas
      </Link>
      <Link
        className="bg-green-400 px-2 py-1 mx-0.5"
        to="/completed">
        Completas
      </Link>
      <Link
        className="bg-yellow-400 px-2 py-1 mx-0.5"
        to="/active">
        Ativas
      </Link>
    </section>
  )
}
