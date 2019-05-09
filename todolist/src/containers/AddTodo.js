import React from 'react';
import { add_todo } from '../actions/index';
import { connect } from 'react-redux';

let AddTodo = ({ dispatch }) => {
    let input =''
    const onSubmit = e => {
        e.preventDefault()
        dispatch(add_todo(input.value))
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={node => input=node}></input>
                <button type='submit'>ADD TODO</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)  

export default AddTodo