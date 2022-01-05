import React from 'react';

function Todo({ text, id }) {
  return (
    <div>
      <ul>
        <li>{text}</li>
      </ul>
    </div>
  );
}

export default Todo;
