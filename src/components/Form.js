import React from 'react';

function Form({ inputText, setInputText, todos, setTodos }) {
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, id: Math.random() * 10 }]);
    setInputText('');
  };
  return (
    <form>
      <label htmlFor="add-todo">add todo</label>
      <input value={inputText} onChange={inputChangeHandler} type="text" />
      <button onClick={clickHandler}>add todo</button>
    </form>
  );
}

export default Form;
