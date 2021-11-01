import React, { useState } from 'react';

export default function ItemList({ task, changeStatus }) {
  const [showButton, setShowButton] = useState(false);
  return(
    <div
      key={ task.id }
      onMouseOut={() => setShowButton(false)}
      onMouseOver={() => setShowButton(true)}
      >
      <input
        type="checkbox"
        id={ task.id }
        checked={ task.isDone }
        onChange={ changeStatus }
      />
      <input type="text" value={ task.title } disabled/>
      <button style={{display: showButton ? 'inline-block' : 'none' }}>X</button>
    </div>
  )
}
