
let id = 0
export const add_todo = text => ({
    type: 'ADD_TODO',
    id: id++,
    text,
    completed: false,
})

export const toggle_todo = id => ({
    type: 'TOGGLE_TODO',
    id,
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})