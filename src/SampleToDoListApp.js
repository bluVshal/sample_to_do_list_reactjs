/***** 
 * Pravishal ISHRI
 * 25/11/2020
 * Sample To Do List App that homes all the other components of the To Do List
 * It also houses all the functions that run on page load
 * */

import React, {useState, useEffect} from 'react';
import './SampleToDoListApp.css';
import Form from'./components/Form';
import ToDoList from './components/ToDoList';

function SampleListToDoApp() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredToDos, setFilteredToDos] = useState([]);

  // getting todos from Local Storage is run only once: only when page is loaded
  useEffect(() => {
    getTodosFromLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveTodosToLocal();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredToDos(todos.filter(todo => todo.completed === true));
        break;
      case 'incomplete':
        setFilteredToDos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  };

  // Save to Local: Local Storage of Browser
  const saveTodosToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // After refresh, all data on display disappear, need to add a function to get the data back from local storage
  const getTodosFromLocal = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todosInLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todosInLocal);
    }
  }
  

  return (
    <div>
      <header>
        <h1>To Do List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList todos={todos} setTodos={setTodos} filteredToDos={filteredToDos}/>
    </div>
  );
}

export default SampleListToDoApp;
