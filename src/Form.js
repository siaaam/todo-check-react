import React, { useEffect } from 'react';

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  // add data to localstorage;
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(todos));
  }, [todos]);

  // get data from local storage

  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, id: Math.random() * 10, completed: false },
    ]);
    setInputText('');
  };

  const selectHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <label htmlFor="add todo">add todo</label>
      <input
        value={inputText}
        type="text"
        name="todo"
        id="todo"
        onChange={inputChangeHandler}
      />
      <button onClick={clickHandler}>add todo</button>
      <div>
        <select onChange={selectHandler} name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
