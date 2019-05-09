import React from 'react';


function TodoList({todos, onToggle}) {
    return ( 
    <div>
        <ul>
        {
            todos.length>0 &&
            todos.map( todo => {
                console.log(todo)
                return(
                    <li 
                key={todo.id}
                style={{
                    textDecoration: todo.completed? 'line-through' : 'none',
                    maxWidth: '20px'
                }}
                onClick={() => onToggle(todo.id)}
                >{todo.text}</li>
                )
            })
        }
        </ul>
    </div>
    )
}

export default TodoList 