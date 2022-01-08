import React from 'react';

function Todo({ text, id, todos, setTodos, completed }) {
  const findId = () => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  };
  const deleteHandler = () => {
    findId();
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <ul>
        <li>
          <p className={`${completed ? 'completed' : ''} text`}>{text}</p>
        </li>
        <button className="btn btn-complete" onClick={completeHandler}>
          completed
        </button>
        <button className="btn btn-add" onClick={deleteHandler}>
          delete
        </button>
      </ul>
    </div>
  );
}

export default Todo;
