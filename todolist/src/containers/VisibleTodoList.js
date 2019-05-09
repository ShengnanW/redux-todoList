import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggle_todo } from '../actions/index';

let VisibleTodoList = (props) => {
    const { todos, todoClick } = props 
    console.log(todos)
    return(
        <TodoList todos={todos} onClick={todoClick}/>
    )
} 

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    todoClick: id => dispatch(toggle_todo(id))
})

VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleTodoList)

export default VisibleTodoList