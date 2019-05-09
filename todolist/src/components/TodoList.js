import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, onClick}) => (
    <ul>
        {
           todos.length>0 && todos.map((todo, index) => (<Todo 
            key={index}
            text={todo.text}
            completed={todo.completed}
            onClick={() => onClick(todo.id)} />))
        }
    </ul>
)

export default TodoList