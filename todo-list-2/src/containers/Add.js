import React from 'react';
import { connect } from 'react-redux'

import { addTodo } from '../actions/todos'

let Add = ({dispatch}) => {
    let ele =''
    const onSubmit = e => {
        e.preventDefault()
        dispatch(addTodo(ele.value))
    }
    return (
        <form onSubmit={e => {onSubmit(e)}}>
            <input type='text' ref={ input => {ele=input}}></input>
            <button type='submit'>ADD</button>
        </form>
    )
}


Add = connect()(Add)

export default Add