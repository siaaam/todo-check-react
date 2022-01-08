import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <h1>Your todos goes here</h1>
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          id={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
