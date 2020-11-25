/***
 * Pravishal ISHRI
 * 25/11/2020
 * To Do items are input and filtered here 
 *  */

import React from 'react';

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {
                text: inputText, 
                completed: false, 
                id: Math.random() * 1000
            }
        ]);
        setInputText("");
    }

    //gets the filter status after the drop down value is selected
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input'/>
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value='all'>ALL</option>
                    <option value='completed'>Completed</option>
                    <option value='incomplete'>Incomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;