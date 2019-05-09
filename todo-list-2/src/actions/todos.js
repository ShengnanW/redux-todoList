
let index = 0
export const addTodo = text => {
    return(
    {
        type: 'ADD-TODO',
        id: index++,
        text,
    }
)}

export const toggleTodo = id => {
    return(
    {
        type: 'TOGGLE-TODO',
        id,
    }
)}