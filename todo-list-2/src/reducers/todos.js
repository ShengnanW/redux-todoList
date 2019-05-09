
 const todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD-TODO':
            return [
                ...state,
                {
                    id: action.id,
                    completed: false,
                    text: action.text
                }
            ]
        case 'TOGGLE-TODO':
            return (
                state.map(todo => todo.id === action.id? {...todo, completed: !todo.completed} : todo)
            )
        default: 
            return state
    }
} 

export default todos