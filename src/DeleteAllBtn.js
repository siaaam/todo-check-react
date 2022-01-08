import React from 'react';

function DeleteAllBtn({ todos, setTodos }) {
  const deleteAllHandler = () => {
    todos = [];
    setTodos(todos);
  };

  return (
    <div>
      <button className="btn btn-dlt" onClick={deleteAllHandler}>
        delete all
      </button>
    </div>
  );
}

export default DeleteAllBtn;
