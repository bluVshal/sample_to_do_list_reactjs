/*****
 * Pravishal ISHRI
 * 25/11/2020
 * Component that concerns the to do list: all entered to do items are displayed as a list here
 *  */

import React from 'react';
import Todo from './ToDo';

const ToDoList = ({todos, setTodos, filteredToDos}) => {
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredToDos.map((todo) => <Todo 
                                        key={todo.id} 
                                        text={todo.text} 
                                        todo={todo}
                                        todos={todos}
                                        setTodos={setTodos}/>
                )}
            </ul>
        </div>
    );
}

export default ToDoList;