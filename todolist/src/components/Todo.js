import React from 'react';

function Todo({text, completed, onClick, id}) {
return (
    <li onClick={onClick}
    style={{
        textDecoration: completed? 'line-through': 'none',
        maxWidth:'10px'
    }}>
        {text}
    </li>
)}

export default Todo