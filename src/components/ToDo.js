/****
 * Pravishal ISHRI
 * 25/11/2020
 * To Do actions (Complete, Delete) are all here. The different modifications on the to do list appear here
 * Child of ToDoList.js
 *  */

import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteButtonHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeButtonHandler = () => {
        setTodos(todos.map((el) => {
            if(el.id === todo.id){
                return{
                    ...el, completed: !el.completed
                }
            }
            return el;
        }));
    }

    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={completeButtonHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteButtonHandler} className="trash-btn"> 
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;