import React, { useState, useEffect } from 'react';
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
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // function
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [status, todos]);

  return (
    <div>
      <h2>this is a simple todo app </h2>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />

      <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
      <DeleteAllBtn todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
