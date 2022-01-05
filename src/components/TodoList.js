import React from 'react';
import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <div>
      <h2>add your todos here</h2>
      {todos.map((todo) => (
        <Todo text={todo.text} id={todo.id} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
