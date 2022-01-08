import React, { useState } from 'react';
import DeleteAllBtn from './DeleteAllBtn';
import Form from './Form';
import TodoList from './TodoList';
import './App.css';

function App() {
  //  get data from local storage
  const getDataFromLS = () => {
    let list = localStorage.getItem('lists');
    if (list) {
      return JSON.parse(localStorage.getItem('lists'));
    } else {
      return [];
    }
  };
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(getDataFromLS());

  return (
    <div>
      <h2>this is a simple todo app </h2>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
      />

      <TodoList todos={todos} setTodos={setTodos} />
      <DeleteAllBtn todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
